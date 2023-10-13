import React from "react";
import logo from "./section7img/section7.webp";
import "../Component/Section7.css";

const Section7 = () => {
  return (
    <div className="section7main1">
      <div className="section7main">
        <div className="Section7left">
          <div className="list">
            <h2>
              <li>
                - Accelerate results with our streamlined processes and
                efficient team.
              </li>
              <li>
                - Leverage our extensive pool of skilled developers for rapid
                project completion.
              </li>
              <li>
                - Collaborative problem-solving and transparent communication
                ensure technical excellence.
              </li>
              <li>- Experience efficient, top-tier delivery with us.</li>
            </h2>
          </div>
          <div className="Section7img">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="Section7right">
          <div className="section7TextRight">
            <h1>Projects</h1>
            <h3>You name IT we make IT</h3>
          </div>
          <div className="Section7button">
            <button className="section7button1">CRM</button>
            <button className="section7button2">OTT</button>
            <button className="section7button3">E-Commerce</button>
            <button className="section7button4">Social Media</button>
            <button className="section7button5">Delivery</button>
            <button className="section7button6">EduTech</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
