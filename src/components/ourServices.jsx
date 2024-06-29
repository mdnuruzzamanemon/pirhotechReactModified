import React from "react";
import '../css/ourServices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faCode, faChartSimple } from '@fortawesome/free-solid-svg-icons';
// import {  faSearchengin, faAndroid, faApple } from '@fortawesome/free-regular-svg-icons';
import { faSearchengin, faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';


function OurServices() {
  return (
    <div className="serviceMain" id="ourServicesSection">
      <h1>Our Services</h1>
      <section className="container serContainer">
        <section className="card__container">
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">

                <FontAwesomeIcon icon={faPaintBrush} />

              </div>
              <div className="card__content">
                <h3>Designing</h3>
                <p>From concept to creation, our designs inspire and captivate, blending creativity with functionality.</p>
                <a className="commonBtn" href="#"> <span>Read More</span></a>
              </div>
            </div>
          </div>
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <div className="card__content">
                <h3>Develoment</h3>
                <p>Innovative solutions crafted through cutting-edge technology and meticulous development processes.</p>
                <a className="commonBtn" href="#"> <span>Read More</span></a>
              </div>
            </div>
          </div>
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faSearchengin} />

              </div>
              <div className="card__content">
                <h3>SEO</h3>
                <p>We optimize your website to rank higher in search engine results, driving organic traffic and maximizing your digital presence.</p>
                <a className="commonBtn" href="#"> <span>Read More</span></a>
              </div>
            </div>
          </div>

          <div className="card__bx" >
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faChartSimple} />
              </div>
              <div className="card__content">
                <h3>Digital Marketing</h3>
                <p>Strategic campaigns that resonate, leveraging digital platforms to drive engagement and growth.</p>
                <a className="commonBtn" href="#"> <span>Read More</span></a>
              </div>
            </div>
          </div>

          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faAndroid} />
              </div>
              <div className="card__content">
                <h3>Android App Development</h3>
                <p>Creating powerful Android solutions for your business goals with precision and innovation.</p>
                <a className="commonBtn" href="#"> <span>Read More</span></a>
              </div>
            </div>
          </div>

          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faApple} />
              </div>
              <div className="card__content">
                <h3>IOS App Development</h3>
                <p>Crafting sleek, user-centric iOS apps to elevate your brand with seamless Apple device experiences.</p>
                <a className="commonBtn" href="#"> <span>Read More</span></a>
              </div>
            </div>
          </div>

        </section>

      </section>
    </div>

  );
}

export default OurServices;