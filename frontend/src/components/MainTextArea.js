import React from 'react';
import Form from 'react-bootstrap/Form';

class MainTextArea extends React.Component {
  constructor(props) {
  	super(props);

    this.state = {
      typingTimer : null,
      inputString : ""
    };

	this.actualTextRef = React.createRef();
  	this.textUpdate = this.textUpdate.bind(this);
  	this.updateParent = this.updateParent.bind(this);
  	this.clearValue = this.clearValue.bind(this);
  }

  clearValue() {
  	this.actualTextRef.current.value = "";
  }

  textUpdate(event) {
    clearTimeout(this.state.typingTimer);
    if (event.target.value) {
      this.setState({inputString: event.target.value, typingTimer: setTimeout(this.updateParent, 1000)});
    }
  }

  updateParent() {
  	this.props.handler();
  }

  render() {
  	return (
		  <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={10} onChange={event => this.textUpdate(event)} placeholder="enter text here" ref={this.actualTextRef} />
            </Form.Group>
          </Form>
  	  );
  }
}


export default MainTextArea;