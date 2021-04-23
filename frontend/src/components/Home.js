import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

import { FacebookShareButton, TwitterShareButton, RedditShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, RedditIcon } from "react-share";

import emptyImage from './empty_image.png';
import exampleImage from './example_line_plot.png';
import abstractImage from './example_abstract_plot.png';
import facebookLogo from './facebook_logo.png';
import instagramLogo from './instagram_logo.png';
import twitterLogo from './twitter_logo.png';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { VictoryChart, VictoryTheme, VictoryLine, VictoryLegend } from "victory";
import Rendering from './Rendering';

import Download from './Download';
import MainTextArea from './MainTextArea';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCSVDownloadModal : false,
      show2DImageDownloadModal : false,
      show3DImageDownloadModal : false,
      showShareModal : false,
      typingTimer : null,
      // input_string : "",
      diagramData : {sentiments: [], movingAverage: []},
      tokens : []
    };

    // this.textUpdate = this.textUpdate.bind(this);
    this.clearText = this.clearText.bind(this);
    this.open2DImageDownloadModal = this.open2DImageDownloadModal.bind(this);
    this.close2DImageDownloadModal = this.close2DImageDownloadModal.bind(this);
    this.open3DImageDownloadModal = this.open3DImageDownloadModal.bind(this);
    this.close3DImageDownloadModal = this.close3DImageDownloadModal.bind(this);
    this.openCSVDownloadModal = this.openCSVDownloadModal.bind(this);
    this.closeCSVDownloadModal = this.closeCSVDownloadModal.bind(this);
    this.openShareModal = this.openShareModal.bind(this);
    this.closeShareModal = this.closeShareModal.bind(this);
    this.saveChart = this.saveChart.bind(this);
    this.saveAbstract = this.saveAbstract.bind(this);
    this.callServer = this.callServer.bind(this);
    this.triggerDownload = this.triggerDownload.bind(this);
    this.mainTextAreaRef = React.createRef();
    this.saveCSV = this.saveCSV.bind(this);
    // this.updateInputString = this.updateInputString.bind(this);
  }

  // updateInputString(newInputString) {
  //   console.log("pogu");
  //   this.setState({input_string: newInputString});
  //   this.callServer();
  // }

  // textUpdate(event) {
  //   clearTimeout(this.state.typingTimer);
  //   if (event.target.value) {
  //     this.setState({input_string: event.target.value, typingTimer: setTimeout(this.callServer, 1000)});
  //   }
  // }

  callServer() {
    //this.setState({diagramData: [{x: 1, y: Math.floor(Math.random() * 10)}, {x: 2, y: Math.floor(Math.random() * 10)}, {x: 3, y: Math.floor(Math.random() * 10)}]});
    const input_string = this.mainTextAreaRef.current.state.inputString;

    console.log("Sent to server: " + input_string);
    fetch("http://208.87.134.10/api/emotions", {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({"text": input_string})})
    .then(response => {
      response.json().then(res => {
        console.log("Response:");
        console.log(res);
        //console.log(res.x_values);
        this.setState({diagramData: {sentiments: [0].concat(res.x_values.sentiments), movingAverage: [0].concat(res.x_values.movingAverage)}})

        this.setState({tokens: res.tokens})
        //console.log("tokens: " + this.state.tokens)
      })
    })
    .catch(error => console.log("error: " + error));
    //this.refs.abstractImage.src = abstractImage;

  }

  triggerDownload (imgURI) {
    let evt = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true
    });

    let a = document.createElement("a");
    a.setAttribute("download", "2d-polarity-graph.png");
    a.setAttribute("href", imgURI);
    a.setAttribute("target", "_blank");

    a.dispatchEvent(evt);
  }

  saveCSV() {
    const tokens = this.state.tokens
    let csvContent = "data:text/csv;charset=utf-8,"
    if (tokens.length > 0) {
      csvContent += "Phrase,Polarity,," + Object.keys(tokens[0].emotions) + "\n";
      let i;
      for (i = 0; i < tokens.length; i++) {

        let line = "\"" + tokens[i].text.replace(/"/g, "\"\"") + "\"," + this.state.diagramData.sentiments[i+1] + ",," + Object.values(tokens[i].emotions) + "\n";
        csvContent += line;
        console.log(line)
      }
      //console.log(headers);

      console.log(csvContent);
      /*csvContent += tokens.map(e => {
        console.log(typeof e);
        e.join(",");
      }).join("\n");*/
    }



    var encodedUri = encodeURI(csvContent);
    let link = document.createElement('a');
    link.download = 'data.csv';
    link.href = encodedUri
    link.click();
  }

  saveAbstract() {
    let canvas = document.getElementById("ThreeDContainer").children[0].children[0];
    let imgURI = canvas.toDataURL("image/png")
    let link = document.createElement('a');
    link.download = 'abstract.png';
    link.href = imgURI
    link.click();
  }

  saveChart() {
    let svg = document.getElementById("chartID").children[0].children[0];
    let {width, height} = svg.getBBox();
    let data = (new XMLSerializer()).serializeToString(svg);
    let DOMURL = window.URL || window.webkitURL || window;

    let img = document.createElement("img");
    let svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    let url = DOMURL.createObjectURL(svgBlob);


    img.onload = () => {
      let canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      DOMURL.revokeObjectURL(url);

      let imgURI = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

      this.triggerDownload(imgURI);
    }
    img.src = url;

  }



  open2DImageDownloadModal() {
    this.setState({
      show2DImageDownloadModal : true
    });
  }

  close2DImageDownloadModal() {
    this.setState({
      show2DImageDownloadModal : false
    });
  }

  open3DImageDownloadModal() {
    this.setState({
      show3DImageDownloadModal : true
    });
  }

  close3DImageDownloadModal() {
    this.setState({
      show3DImageDownloadModal : false
    });
  }

  openCSVDownloadModal() {
    this.setState({
      showCSVDownloadModal : true
    });
  }

  closeCSVDownloadModal() {
    this.setState({
      showCSVDownloadModal : false
    });
  }

  openShareModal() {
    this.setState({
      showShareModal : true
    });
  }

  closeShareModal() {
    this.setState({
      showShareModal : false
    });
  }

  clearText() {
    this.setState({tokens: [], diagramData: {sentiments: [], movingAverage: []}
      // , input_string: ""
    });
    //this.refs.abstractImage.src = emptyImage;
    // this.refs.mainTextArea.value = "";
    this.mainTextAreaRef.current.clearValue();
  }

  render() {
    return (
      <div className="main-page">
        <div className="row justify-content-center ml-0 mr-0">
          <div className="pt-3 col-lg-10">
            <div className="row py-3 ml-0 mr-0">
              <div className="col-6 px-1 py-5">

                <MainTextArea handler={this.callServer} ref={this.mainTextAreaRef} />
              {/*
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={10} onChange={event => this.textUpdate(event)} placeholder="enter text here" ref="mainTextArea" />
                  </Form.Group>
                </Form>
              */}

                <Button className="mx-2" id="green" variant="primary" onClick={this.clearText}>clear</Button>
                <p id="subtitle">when you enter your writing, it gets analyzed by our algorithm in order to draw an image!</p>
              </div>
              <div className="col-6 px-3">
                <Tabs defaultActiveKey="linear" id="figure-tabs" transition={false}>
                  <Tab eventKey="linear" title="linear">
                    <div id="chartID">
                      <VictoryChart theme={VictoryTheme.material}>
                        <VictoryLegend orientation = {"horizontal"} x={100}  data = {[
                          {name: "Sentiment", symbol: {fill:"black"}},
                          {name: "Running Average", symbol: {fill:"red"}}]}/>
                        <VictoryLine data={this.state.diagramData.sentiments}/>
                        <VictoryLine style={{ data: { stroke: "red" } }} data={this.state.diagramData.movingAverage}/>
                      </VictoryChart>
                    </div>
                    {/*2D buttons and modal*/}
                    <Button className="mx-2" id="green" variant="primary" onClick={this.openCSVDownloadModal}>download CSV</Button>
                    <Button className="mx-2" id="pink" variant="primary" onClick={this.openShareModal}>share!</Button>
                    <Button className="mx-2" id="green" variant="primary" onClick={this.open2DImageDownloadModal}>download image</Button>
                    <Modal show={this.state.show2DImageDownloadModal} onHide={this.close2DImageDownloadModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>Download Image?</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to download the image?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={this.close2DImageDownloadModal}>
                          Cancel
                        </Button>
                        <Button onClick={this.saveChart}>
                          Download
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Tab>
                  <Tab eventKey="abstract" title="abstract">
                    <div className = "col-60" id="ThreeDContainer">
                      <Rendering array={this.state.tokens}/>
                    </div>
                    {/*3D buttons and modal*/}
                    <Button className="mx-2" id="green" variant="primary" onClick={this.openCSVDownloadModal}>download CSV</Button>
                    <Button className="mx-2" id="pink" variant="primary" onClick={this.openShareModal}>share!</Button>
                    {/*<Button className="mx-2" id="green" variant="primary" onClick={this.open3DImageDownloadModal}>download image</Button>*/}
                    <Modal show={this.state.show3DImageDownloadModal} onHide={this.close3DImageDownloadModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>Download Image?</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to download the image?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={this.close3DImageDownloadModal}>
                          Cancel
                        </Button>
                        <Button onClick={this.saveAbstract}>
                          Download
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Tab>
                </Tabs>

              </div>
            </div>
          </div>
        </div>

        {/* Download Modal to download a CSV file */}
        <Modal show={this.state.showCSVDownloadModal} onHide={this.closeCSVDownloadModal}>
          <Modal.Header closeButton>
            <Modal.Title>Download CSV?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to download the CSV?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeCSVDownloadModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.saveCSV}>
                Download
              </Button>
          </Modal.Footer>
        </Modal>

        {/* Download Modal to download a 2D image
        <Modal show={this.state.showImageDownloadModal} onHide={this.closeImageDownloadModal}>
          <Modal.Header closeButton>
            <Modal.Title>Download Image?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to download the image?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeImageDownloadModal}>
              Cancel
            </Button>
            <a href={exampleImage} download="Sentiment-2D.png">
              <Button variant="primary" onClick={this.closeImageDownloadModal}>
                Download
              </Button>
            </a>
          </Modal.Footer>
        </Modal>*/}

        <Modal show={this.state.showShareModal} centered dialogClassName="share-modal" onHide={this.closeShareModal}>
          <Modal.Header closeButton className="no-border"/>
          <Modal.Body>
            <div className="col">
              <Modal.Title className="col no-gutter">
                <p className="h4 text-center" style={{margin: 0}}>Tell your friends about The Sentimental Image!</p>
              </Modal.Title>
              <div className='row justify-content-center'>
                <div className="col text-center">
                  <FacebookShareButton
                    url={"https://www.gatech.edu"}
                    quote={"Check out The Sentimental Image! Visualize your writing!"}
                    hashtag="#thesentimentalimage">
                    <FacebookIcon size={50} round={false} />
                  </FacebookShareButton>
                </div>
                <div className="col text-center">
                  <RedditShareButton
                    url={"https://www.gatech.edu"}
                    quote={"Check out The Sentimental Image! Visualize your writing!"}>
                    <RedditIcon size={50} round={false} />
                  </RedditShareButton>
                </div>
                <div className="col text-center">
                  <TwitterShareButton
                    url={"https://www.gatech.edu"}
                    quote={"Check out The Sentimental Image! Visualize your writing!"}>
                    <TwitterIcon size={50} round={false} />
                  </TwitterShareButton>
                </div>
              </div>
            </div>
          </Modal.Body>

        </Modal>

      </div>
    );
  }
}

export default Home;
