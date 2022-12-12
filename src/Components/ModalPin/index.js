import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPinComp(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter PIN to Transfer
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <h3>Enter your 6 digits PIN for confirmation to<br/>
        continue transferring money.
        </h3>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Continue</Button>
      </Modal.Footer>

    </Modal>
  );
}

export default ModalPinComp;
