import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import card1 from "../../card1.png"
import card2 from "../../card2.png"
import card3 from "../../card3.png"
import sarthak from "../../sathak-karma.png"
import sarah from "../../sarah.png"
import ronal from "../../ronal.png"
import joseph from "../../josesep.png"
import leisure from "../../leisure.png"
import activism from "../../Activism.png"
import mba from "../../mba.png"
import philoshopy from "../../philoshopy.png"
import './Card.css'
import { faPencil, faBriefcase, faLocationDot, faMicroscope, faCalendar, faCircleExclamation, faShareNodes, faEye, faCalendarDay, faThumbsUp, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import EllipseModal from './EllipseModal/EllipseModal';


const Card = () => {
    
    return (
        <div className='container row mt-4'>
            <div className='col-7'>
            <div class="card">
                <img src={card1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 class="card-title"><FontAwesomeIcon icon={faPencil} /> Article</h5>

                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                    <p class="card-text">What if famous brands had regular fonts? Meet Regular brands!.</p> <span><FontAwesomeIcon icon={faEllipsis}/></span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                    <p class="card-subtitle mb-2 text-muted">I've worked in UX for the better part of a decade.From now on, I plan to rei...</p>
                    </div>

                    <div className='d-flex justify-content-between mt-3 align-items-center'>
                    <p><img src={sarthak} class="rounded-circle" alt="Cinque Terre"/> Sarthak Kamra</p>
                    <p> <FontAwesomeIcon icon={faEye}/> 1.4k veiws</p> <FontAwesomeIcon icon={faShareNodes}/>

                    </div>
                </div>
                </div>

            
            

            <div>
            <div class="card" >
                <img src={card2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <div className='d-flex justify-content-between align-items-center'>

                    <h5 class="card-title"><FontAwesomeIcon icon={faMicroscope} /> Education</h5>
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        
                    <p class="card-text">Tax Benefits for Investment under National Pension Scheme launched by Government</p>
                    <span><FontAwesomeIcon icon={faEllipsis}/></span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>    
                    <p class="card-subtitle mb-2 text-muted">I've worked in UX for the better part of a decade.From now on, I plan to rei...</p>
                    </div>
                    <div className='d-flex justify-content-between mt-3 align-items-center'>
                    <p><img src={sarah} class="rounded-circle" alt="Cinque Terre"/> Sarah West</p>
                    <p> <FontAwesomeIcon icon={faEye}/> 1.4k veiws</p> <FontAwesomeIcon icon={faShareNodes}/>

                    </div>
                </div>
                </div>
            </div>
            <div>
            <div class="card" >
                <img src={card3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                    <h5 class="card-title"><FontAwesomeIcon icon={faCalendar} /> Meet up</h5>

                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                    <p class="card-text">Finance & Investment Elite Social Mixer @Lujiazui</p>
                    <span><EllipseModal></EllipseModal></span>
                    </div>
                    <div className='d-flex justify-content-around mt-3'>
                        <p><FontAwesomeIcon icon={faCalendarDay}/> Fri, 12 Oct,2018</p>
                        <p>Ahmedabad,India</p>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="visit-website" type="button">Visit Website</button>
                        </div>
                        <div className='d-flex justify-content-between mt-3 align-items-center'>
                    <p><img src={ronal} class="rounded-circle" alt="Cinque Terre"/> Ronal Jones</p>
                    <p> <FontAwesomeIcon icon={faEye}/> 1.4k veiws</p> <FontAwesomeIcon icon={faShareNodes}/>

                    </div>
                </div>
                </div>
            </div>
            <div>
            <div class="card" >
                <div class="card-body">
                    <div className='d-flex justify-content-between mt-3 align-items-center'>
                    <h5 class="card-title"><FontAwesomeIcon icon={faBriefcase} /> Job</h5>

                    </div>
                    <div className='d-flex justify-content-between mt-3 align-items-center'>
                    <p class="card-text">Software Developer</p>
                    <span><FontAwesomeIcon icon={faEllipsis}/></span>
                    </div>
                    <div className='d-flex justify-content-between mt-3 align-items-center'>
                    <p class="card-text"><FontAwesomeIcon icon={faBriefcase}/> Innovaccer Analytics Private Ltd.
</p>
                    <p class="card-text">Nadia,India</p>
             
                    </div>
                    
                    <div class="d-grid gap-2">
                        <button class="apply-on-times" type="button">Apply on Times Job</button>
                        </div>
                        <div className='d-flex justify-content-between mt-3 align-items-center'>
                    <p><img src={joseph} class="rounded-circle" alt="Cinque Terre"/> Joseph Gray</p>
                    <p> <FontAwesomeIcon icon={faEye}/> 1.4k veiws</p> <FontAwesomeIcon icon={faShareNodes}/>

                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className='col-5'>
                <div class="card" >
                <div class="card-body">
                    <div className='d-flex justify-content-between'>
                    <h5 class="card-title"><FontAwesomeIcon icon={faLocationDot} /> Nadia, India</h5>
                    <p><FontAwesomeIcon icon={faPencil} /></p>
                    </div>
                    <hr />
                    <p class="card-subtitle mb-2 mt-4 text-muted"><FontAwesomeIcon icon={faCircleExclamation} /> Your location will help us serve better and extend a personalised experience.</p>
                </div>
                <div className="card-body">
                <p className='mt-5'><FontAwesomeIcon icon={faThumbsUp} /> REcommended Groups</p>

                    
                    <div className='d-flex justify-content-between mt-3 align-items-center'>
                    <p><img src={leisure} class="rounded-circle" alt="Cinque Terre"/> Leisure</p>

                    <span class="badge rounded-pill bg-light text-dark">Follow</span>

                    </div>
                    <div className='d-flex justify-content-between mt-3 align-items-center'>
                    <p><img src={activism} class="rounded-circle" alt="Cinque Terre"/> Activism</p>

                    <span class="badge rounded-pill bg-light text-dark">Follow</span>

                    </div>
                    <div className='d-flex justify-content-between mt-3 align-items-center'>
                    <p><img src={mba} class="rounded-circle" alt="Cinque Terre"/> MBA</p>

                    <span class="badge rounded-pill bg-light text-dark">Follow</span>

                    </div>
                    <div className='d-flex justify-content-between mt-3 align-items-center'>
                    <p><img src={philoshopy} class="rounded-circle" alt="Cinque Terre"/> Philosophy</p>

                    <span class="badge rounded-pill bg-light text-dark">Follow</span>

                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <p></p>
                    <p className='see-more'>See More...</p>

                    </div>

                </div>
                    
                    

                
                
                </div>
            </div>
        </div>
    );
};

export default Card;