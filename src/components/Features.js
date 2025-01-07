import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      title: "Layered Security",
      description:
        "With layered security, we ensure the safety of every unit we provide.",
    },
    {
      title: "Quality control of each part",
      description: "Every unit you send is checked carefully for every detail.",
    },
    {
      title: "Reliable Customer Service",
      description:
        "Our customer services available 24 hours a week, with qualified people.",
    },
    {
      title: "Maintenance manual book",
      description:
        "We provide a guidebook that can be used to ensure maximum care.",
    },
    {
      title: "Delivered safely",
      description:
        "Every unit we send arrives safely and quickly, without any obstacles or drama.",
    },
    {
      title: "Based on artificial intelligence",
      description:
        "You can control and view each unit from your phone, It's very easy to use.",
    },
  ];

  return (
    <section id="features" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center featureHeading">
          We offer quality,
          <span className="subText fs-2">
            {" "}
            with the
            <br /> best materials and service
          </span>
        </h2>
        <div className="row featureSection">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-md-4"
              style={{ textAlign: "start", padding: "0px" }}
            >
              <div
                className="card featureCard"
                style={{
                  borderTopLeftRadius: index === 0 ? "8px" : "0",
                  borderTopRightRadius: index === 2 ? "8px" : "0",
                  borderBottomLeftRadius: index === 3 ? "8px" : "0",
                  borderBottomRightRadius: index === 5 ? "8px" : "0",
                }}
              >
                <div className="card-body">
                  <img src="" alt="featureImg" className="card-img" />
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="feature-card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
