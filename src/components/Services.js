import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Solar panels for home",
      link: "View Details",
    },
    {
      id: "02",
      title: "Solar panels for industry",
      link: "View Details",
    },
    {
      id: "03",
      title: "Solar panel for chargers",
      link: "View Details",
    },
    {
      id: "04",
      title: "Wind power generator",
      link: "View Details",
    },
  ];

  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="text-start servicesHeading">
              Trusted service,
              <span className="subText fs-2">
                {" "}
                for your
                <br /> various needs
              </span>
            </h2>
            <button type="button" className="btn getInTouchBtn btn-lg">
              Get in touch
            </button>
            <div className="row service-section">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="col-md-6"
                  style={{ textAlign: "start" }}
                >
                  <div className="card serviceCard">
                    <div className="card-body">
                      <h5 className="card-id">{item.id}</h5>
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.link}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm-6">
            <img src="" alt="servicesImg" className="service-img" />
          </div>
        </div>
        <div className="row">
          <h2 className="text-center servicesHeading">
            See how we solve <br /> problem,
            <span className="subText fs-2"> right on target</span>
          </h2>
          <div
            className="card"
            style={{
              marginTop: "3rem",
              padding: "20px",
              borderRadius: "30px",
              backgroundColor: "#f2f4f4",
              border: "none",
            }}
          >
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body">
                  <h3 className="service-card-title text-start">Medtronic</h3>
                  <p className="service-card-text">
                    "We have used services from Xurya for most of our stations,
                    this is our strategic step to continue to increase the
                    number of solar panel usage for our stations, we are very
                    satisfied with the services from Xurya."
                  </p>
                  <button type="button" className="btn view-case-study btn-lg">
                    View case study
                  </button>
                  <p className="service-sign-card-text">
                    Jeniffer Kolobaly -
                    <small className="text-muted"> CTO EV Medtronic</small>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src=""
                  className="img-fluid rounded-start"
                  alt="view case study"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
