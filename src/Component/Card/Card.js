import React from 'react';
import card1 from "../../card1.png"
import card2 from "../../card2.png"
import card3 from "../../card3.png"


const Card = () => {
    return (
        <div className='container row mt-4'>
            <div className='col-8'>
            <div class="card">
                <img src={card1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Article</h5>
                    <p class="card-text">What if famous brands had regular fonts? Meet Regular brands!.</p>
                    <p class="card-subtitle mb-2 text-muted">I've worked in UX for the better part of a decade.From now on, I plan to rei...</p>
                </div>
                </div>

            
            

            <div>
            <div class="card" >
                <img src={card2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Article</h5>
                    <p class="card-text">What if famous brands had regular fonts? Meet Regular brands!.</p>
                    <p class="card-subtitle mb-2 text-muted">I've worked in UX for the better part of a decade.From now on, I plan to rei...</p>
                </div>
                </div>
            </div>
            <div>
            <div class="card" >
                <img src={card3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Article</h5>
                    <p class="card-text">What if famous brands had regular fonts? Meet Regular brands!.</p>
                    <p class="card-subtitle mb-2 text-muted">I've worked in UX for the better part of a decade.From now on, I plan to rei...</p>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Visit Website</button>
                        </div>
                </div>
                </div>
            </div>
            <div>
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">Job</h5>
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
                    <h5 class="card-title">Nadia, India</h5>
                    <p class="card-subtitle mb-2 text-muted">Your location will help us serve better and extend a personalised experience.</p>
                    

                
                </div>
                </div>
            </div>
        </div>
    );
};

export default Card;