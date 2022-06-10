import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignupModal from '../SignupModal/SignupModal';
import loginImage from '../../LoginImage.png';
import facebook from '../../facebook.png';
import google from '../../google.png';
import '../../Component/SignupModal/SignupModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace} from '@fortawesome/free-solid-svg-icons';
const LoginModal = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const closeModal2 =()=>{
    document.getElementById('modal2').style.display='none';
  }
    return (
        <div >
                   <>
      
      <p className='it-is-free' onClick={handleShow}>Sign in</p>

      <Modal id='modal2' show={show} onHide={handleClose}>
      <p className='ms-4 login-text-color'>let's learn,share & inspire each other with our passion for computer engineering. Sign up now <FontAwesomeIcon icon={faHandPeace}/></p>
        {/* Login */}
                <Modal.Body >
                 <div className='row'>
                     <div className='col-6'>
                     <form>
                 <h1>Sign in</h1>
                
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                
                
                <button type="submit" class="create-account">Sign in</button>
                <button type="button" class="sign-with-google mt-4"><img src={facebook} alt="" /> Sign in with Facebook</button>
                <button type="button" class="sign-with-google mt-2"><img src={google} alt="" /> Sign in with Google</button>
                <button type="button" class="sign-with-google mt-2">Forget Password?</button>

                </form>
                     </div>
                     <div className='col-6'>
                         <p>Don't have an account yet?  <span onClick={closeModal2}><SignupModal></SignupModal></span></p>
                         <img className='img-fluid' src={loginImage} alt="" />
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

export default LoginModal;