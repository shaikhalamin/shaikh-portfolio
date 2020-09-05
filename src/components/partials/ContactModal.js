import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class ContactModal extends React.Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.toggle}
          type="button"
          className="btn btn-info btn-block text-white"
        >
          Contact Info
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
          <ModalHeader toggle={this.toggle}>Professional Info</ModalHeader>
          <ModalBody>
            <ul>
              <li>Shaikh Al Amin</li>
              <li>Senior Software Engineer</li>
              <li>alamin.cse15@gmail.com</li>
              <li>+8801712341937</li>
            </ul>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ContactModal;
