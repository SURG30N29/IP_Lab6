import React from 'react';
import college from '../assets/college infrastructure.jpeg';

function Home() {
  return (
    <div className="home">
      <div className="jumbotron text-center bg-primary text-white py-5" id="about-us">
        <div className="container">
          <h1 className="display-4">Welcome to Jairam College of Arts, Science and Commerce</h1>
          <p className="lead">Empowering students for the future.</p>
          <a href="#" className="btn btn-light btn-lg">Learn More</a>
        </div>
      </div>

      <div className="container my-5" id="About">
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p className="description">
              Jairam College is a leading institution providing quality education in various fields. 
              Our mission is to empower students with the knowledge and skills required to succeed in their careers.
            </p>
          </div>
          <div className="col-md-6">
            <img src={college} alt="College" className="infrastructure" />
          </div>
        </div>

        {/* Button Section */}
        <div className="row my-5">
          <div className="col-md-6 text-center">
            <h4>Want to view our departments?</h4>
            <a href="/departments" className="btn btn-primary mt-3">Click Here</a>
          </div>
          <div className="col-md-6 text-center">
            <h4>Want to view our events?</h4>
            <a href="/events" className="btn btn-primary mt-3">Click Here</a>
          </div>
        </div>

        {/* Google Maps Embed for VESIT */}
        <div className="row mt-5">
          <div className="col-12">
            <h3>Our Location</h3>
            <iframe
              title="VESIT Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8781847129563!2d72.88664277592732!3d19.04572745094053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8add9569a29%3A0xb7ad04bf9a389df7!2sVivekanand%20Education%20Society&#39;s%20Institute%20Of%20Technology%20(VESIT)!5e0!3m2!1sen!2sin!4v1697716554810!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
