import React from 'react';
import BannerLogo from '../../../Rectangle 2.png'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleDark" class="carousel carousel-white slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={BannerLogo} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Computer Engineering</h5>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
</div>

</div>
        </div>
    );
};

export default Banner;