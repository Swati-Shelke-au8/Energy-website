import React from "react";
import "./Footer.css";
import FooterNavbar from "./FooterNavbar";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 footer-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h1 className="text-start footerHeading">
              It's time to support zero pollution, <br />
              <span className="subText fs-2 footerSubHeading">
                with renewable resources
              </span>
            </h1>
            <div className="row">
              <div
                className="col-sm-6"
                style={{ width: "45%", fontSize: "22px" }}
              >
                <p>
                  <img src="" alt="" className="resourcesImg" />
                  Experienced for more than 10 years
                </p>
              </div>
              <div
                className="col-sm-6"
                style={{ width: "45%", fontSize: "22px" }}
              >
                <p>
                  <img src="" alt="" className="resourcesImg" />
                  Support for the latest technology
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-start">
            <p className="footer-para">
              By increasing the effectiveness and efficiency of electricity use,
              the use of renewable resources is very profitable for all
              industrial services.
            </p>
            <button type="button" className="btn footer-get-in-touch btn-lg">
              Get in touch
            </button>
          </div>
        </div>
        <div className="row">
          <FooterNavbar />
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row" style={{ margin: "30px 0px", fontSize: "18px" }}>
          <div className="col-sm-6 text-start">
            <p>&copy; 2024 Xurya Inc. All rights reserved.</p>
          </div>
          <div className="col-sm-6">
            <div className="footer-policy">
              <p>Terms of Services</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
