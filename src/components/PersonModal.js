import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class PersonModal extends React.Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onNameChange = e => {
    // alert(e.target.value);
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle} className="mb-2">
          Open Modal
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
          <ModalHeader toggle={this.toggle}>
            Modal title -{this.state.name}
          </ModalHeader>
          <ModalBody>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default PersonModal;
