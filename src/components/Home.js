import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero-section text-center py-5">
      <div className="container">
        <h1 className="display-4">New Energy for the Future</h1>
        <p>#1 Energy provider in the world</p>
        <button className="btn btn-primary mx-2">Get in Touch</button>
        <button className="btn btn-outline-secondary mx-2">Our Services</button>
      </div>
      <div className="container home-section1">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="text-center homeHeading">
              Focusing on quality,
              <span className="subText fs-2 homeSubHeading">
                {" "}
                we
                <br /> maintain customer trust
              </span>
            </h2>
          </div>
          <div className="col-sm-6">
            <p className="home-para text-start">
              We ensure that every installation we build has strict quality
              checks. Sustainable solutions for an environmentally friendly and
              renewable future.
            </p>
          </div>
        </div>
        <div className="row list-of-client">
          <div className="client-list"></div>
          <div className="client-list"></div>
          <div className="client-list"></div>
          <div className="client-list"></div>
          <div className="client-list"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
