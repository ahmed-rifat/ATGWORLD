import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LoginModal = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
             <>
      <Button variant="primary" onClick={handleShow}>
        Create account. it's free!
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* Login */}
                <Modal.Body>
                 <div className='row'>
                     <div className='col-6'>
                     <form>
                 <h1>Create account</h1>
                <div className='d-flex'>
                <div class="mb-3">
                    
                    <label for="exampleInputEmail1" class="form-label">First name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Last name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                
                <button type="submit" class="btn btn-primary">Create account</button>
                </form>
                     </div>
                     <div className='col-6'>
                         <p>Already have an account? Sign in</p>
                     </div>
                 </div>

                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    );
};

export default LoginModal;