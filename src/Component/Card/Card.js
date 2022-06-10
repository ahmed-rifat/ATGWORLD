import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import card1 from "../../card1.png"
import card2 from "../../card2.png"
import card3 from "../../card3.png"
import './Card.css'
import { faPencil, faBriefcase, faLocationDot, faMicroscope, faCalendar, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';


const Card = () => {
    return (
        <div className='container row mt-4'>
            <div className='col-8'>
            <div class="card">
                <img src={card1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"><FontAwesomeIcon icon={faPencil} /> Article</h5>
                    <p class="card-text">What if famous brands had regular fonts? Meet Regular brands!.</p>
                    <p class="card-subtitle mb-2 text-muted">I've worked in UX for the better part of a decade.From now on, I plan to rei...</p>
                </div>
                </div>

            
            

            <div>
            <div class="card" >
                <img src={card2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"><FontAwesomeIcon icon={faMicroscope} /> Education</h5>
                    <p class="card-text">Tax Benefits for Investment under National Pension Scheme launched by Government</p>
                    <p class="card-subtitle mb-2 text-muted">I've worked in UX for the better part of a decade.From now on, I plan to rei...</p>
                </div>
                </div>
            </div>
            <div>
            <div class="card" >
                <img src={card3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"><FontAwesomeIcon icon={faCalendar} /> Meet up</h5>
                    <p class="card-text">Finance & Investment Elite Social Mixer @Lujiazui</p>
                    <div className='d-flex justify-content-around'>
                        <p>Fri, 12 Oct,2018</p>
                        <p>Ahmedabad,India</p>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Visit Website</button>
                        </div>
                </div>
                </div>
            </div>
            <div>
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title"><FontAwesomeIcon icon={faBriefcase} /> Job</h5>
                    <p class="card-text">Software Developer</p>
                    <div className='d-flex justify-content-between'>
                    <p class="card-text">Software Developer</p>
                    <p class="card-text">Nadia,India</p>
             
                    </div>
                    
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Apply on Times Job</button>
                        </div>
                </div>
                </div>
            </div>
            </div>
            <div className='col-4'>
                <div class="card" >
                <div class="card-body">
                    <div className='d-flex justify-content-between'>
                    <h5 class="card-title"><FontAwesomeIcon icon={faLocationDot} /> Nadia, India</h5>
                    <p><FontAwesomeIcon icon={faPencil} /></p>
                    </div>
                    <hr />
                    <p class="card-subtitle mb-2 mt-4 text-muted"><FontAwesomeIcon icon={faCircleExclamation} /> Your location will help us serve better and extend a personalised experience.</p>
                    

                
                </div>
                </div>
            </div>
        </div>
    );
};

export default Card;