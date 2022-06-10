import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginModal from '../LoginModal/LoginModal';
import loginImage from '../../LoginImage.png';
import facebook from '../../facebook.png';
import google from '../../google.png';
import './SignupModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';




const SignupModal = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const closeModal1 =()=>{
    document.getElementById('modal1').style.display='none';
  }
    return (
        <div >
          
             <>
      <p>Create account. <span className='it-is-free' onClick={handleShow}>it's free!</span></p>

      <Modal id='modal1' show={show} onHide={handleClose}>
      <p className='ms-4 login-text-color'>let's learn,share & inspire each other with our passion for computer engineering. Sign up now <FontAwesomeIcon icon={faHandPeace}/></p>
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
                
                <button type="submit" class="create-account">Create account</button>
                <button type="button" class="sign-with-google mt-4"><img src={facebook} alt="" /> Sign up with Facebook</button>
                <button type="button" class="sign-with-google mt-2"><img src={google} alt="" /> Sign up with Google</button>
               </form>
                     </div>
                     <div className='col-6'>
                         <p>Already have an account? <span onClick={closeModal1}><LoginModal></LoginModal></span></p>
                         <img className='img-fluid' src={loginImage} alt="" />

                         <p className='text-condition'>By signing up,you agree to our Terms & conditions, Privacy policy</p>
                         

                     </div>
                 </div>

                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          
        </Modal.Footer>
      </Modal>
    </>
        </div>
    );
};

export default SignupModal;