import axios from "axios";
import FsLightbox from "fslightbox-react";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import ProgressiveImage from "react-progressive-image";
import Slider from "react-slick";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import Hobie from "../components/Hobie";

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [hobies, setHobies] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler(!toggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
    axios.get("/api/reviews").then((response) => {
      setReviews(response.data);
    });
    axios.get("/api/hobies").then((response) => {
      setHobies(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>About - Hermilo Ortega - Software Engineer</title>
        <meta name="description" content="Hi! My Name is Hermilo Ortega and I'm a Software Engineer based on Vancouvr BC."/>
      </Helmet>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <ProgressiveImage src={information.aboutImage} placeholder="/images/about-image-placeholder.png" >
                  {(src) => (
                    <img src={src} alt="aboutimage" onClick={() => handleToggler(!toggler)} />
                  )}
                </ProgressiveImage>
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox toggler={toggler} sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  Energetic Software Engineer with 6+ years of experience helping companies to reduce time, costs and effort automating processes through high-performance web technologies
                </p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>Full Name</b> {information.name}
                    </li>
                  )}
                  {!information.age ? null : (
                    <li>
                      <b>Age</b> {information.age} Years
                    </li>
                  )}
                  {!information.phone ? null : (
                    <li>
                      <b>Phone</b> <a href="tel:2368781239">{information.phone}</a> 
                    </li>
                  )}
                  {!information.nationality ? null : (
                    <li>
                      <b>Nationality</b> {information.nationality}
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b>Languages</b> {information.language}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Email</b> <a href="hermilo.jh@gmail.com">{information.email}</a>
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Address</b> {information.address}
                    </li>
                  )}
                </ul>
                <a href={information.cvfile} className="mi-button">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Services" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map((service) => (
                <div className="col-lg-6 col-md-6 col-12 mt-30" key={service.title} >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Hobies" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {hobies.map((hobie) => (
                <div className="col-lg-4 col-md-6 col-12 mt-30" key={hobie.title} >
                  <Hobie content={hobie} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-review-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Reviews" />
          <div className="row justify-content-center">
            <div className="col-12">
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map((review) => (
                  <Testimonial key={review.id} content={review} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;