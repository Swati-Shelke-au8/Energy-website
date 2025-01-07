import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="text-start footerHeading">
              It's time to support zero pollution, <br />
              <span className="subText fs-2">with renewable resources</span>
            </h2>
            <div className="row">
              <div className="col-sm-6">
                <p>Experienced for more than 10 years</p>
              </div>
              <div className="col-sm-6">
                <p>Support for the latest technology</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 text-start">
            <p>
              By increasing the effectiveness and efficiency of electricity use,
              the use of renewable resources is very profitable for all
              industrial services.
            </p>
            <button type="button" className="btn footer-get-in-touch btn-lg">
              Get in touch
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <p>&copy; 2024 Xurya Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
