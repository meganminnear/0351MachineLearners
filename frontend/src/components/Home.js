import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

import emptyImage from './empty_image.png';
import exampleImage from './example_line_plot.png';
import abstractImage from './example_abstract_plot.png';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDownloadModal : false
    };

    this.textUpdate = this.textUpdate.bind(this);
    this.clearText = this.clearText.bind(this);
    this.openDownloadModal = this.openDownloadModal.bind(this);
    this.closeDownloadModal = this.closeDownloadModal.bind(this);
  }

  textUpdate() {
    setTimeout(function() {
      this.refs.diagramImage.src = exampleImage;
      this.refs.abstractImage.src = abstractImage;
    }.bind(this), 1000);
  }

  openDownloadModal() {
    this.setState({
      showDownloadModal : true
    });
  }

  closeDownloadModal() {
    this.setState({
      showDownloadModal : false
    });
  }

  clearText() {
    this.refs.diagramImage.src = emptyImage;
    this.refs.abstractImage.src = emptyImage;
    this.refs.mainTextArea.value = "";
  }

  render() {
    return (
      <div className="main-page">
        <div className="row justify-content-center ml-0 mr-0">
          <div className="pt-3 col-lg-10">
            <div className="row py-3 ml-0 mr-0">
              <div className="col-6 px-1 py-5">
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1"> 
                    <Form.Control as="textarea" rows={10} onChange={this.textUpdate} placeholder="enter text here" ref="mainTextArea" />
                  </Form.Group>
                </Form>
                <Button className="mx-2" id="green" variant="primary" onClick={this.clearText}>clear</Button>
                <Button className="mx-2" id="green" variant="primary">undo</Button>
                <p id="subtitle">when you enter your writing, it gets analyzed by our algorithm in order to draw an image!</p>
              </div>
              <div className="col-6 px-3">
                <Tabs defaultActiveKey="linear" id="figure-tabs">
                  <Tab eventKey="linear" title="linear">
                    <Image width="100%" src={emptyImage} ref="diagramImage" />
                  </Tab>
                  <Tab eventKey="abstract" title="abstract">
                    <Image width="100%" src={emptyImage} ref="abstractImage" />
                  </Tab>
                </Tabs>
                <Button className="mx-2" id="green" variant="primary" onClick={this.openDownloadModal}>download CSV</Button>
                <Button className="mx-2" id="pink" variant="primary">share!</Button>
                <Button className="mx-2" id="green" variant="primary" onClick={this.openDownloadModal}>download image</Button>
              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.showDownloadModal}>
          <Modal.Header closeButton>
            <Modal.Title>Download?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to download?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeDownloadModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.closeDownloadModal}>
              Download
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Home;
