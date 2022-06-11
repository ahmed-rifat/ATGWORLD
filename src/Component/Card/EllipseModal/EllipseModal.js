import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const EllipseModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
<>
      <p onClick={handleShow}>
      <FontAwesomeIcon icon={faEllipsis}/>
      </p>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        
        <Modal.Body>
          <p className='mt-2'>Edit </p>
          <p className='mt-2'>Report</p>
          <p className='mt-2'>Option 3</p>
        </Modal.Body>
        <Button onClick={handleClose}>
            Close
          </Button>
        
      </Modal>
    </>
        </div>
    );
};

export default EllipseModal;