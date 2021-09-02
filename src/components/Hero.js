import { Component } from "react";
import SocialList from "./SocialList.js";
import "../styles/Hero.css";
import ProfileImage from "../assets/danist-soh-G3XuoNo0hkI-unsplash.jpg";
import Tilt from "react-tilt";

export default class hero extends Component {
  render() {
    return (
      <div>
        <div className="container" id="hero">
          <div className="row row-cols-1 row-cols-md-2" style={{ alignItems: "center", height: "100%" }}>
            <div className="col h100 d-flex align-content-between flex-wrap">
              <div></div>
              <div>
                <h1>
                  <strong>whoisgalih?</strong>
                </h1>
                <p>Hello! I am galih, a front-end web developer from Central Java, Indonesia.</p>
                {/* Mail */}
                <div style={{ display: "flex" }}>
                  <Tilt
                    className={"Mail"}
                    options={{
                      maxTilt: 200,
                      perspective: 500, // Transform perspective, the lower the more extreme the tilt gets.
                      easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
                      scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
                      speed: 300, // Speed of the enter/exit transition.
                      transition: true, // Set a transition on enter/exit.
                      reset: true, // If the tilt effect has to be reset on exit.
                      glare: false, // Enables glare effect
                      maxGlare: 1, // From 0 - 1.
                    }}
                    style={{}}
                  >
                    <a href="mailto: galihakbar.ga91@gmail.com" className="btn">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1.8em" fill="white" class="bi bi-envelope inline" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                      </svg>
                      <p className="inline white">Contact Me</p>
                    </a>
                    {/* <a href="/" target="blank"></a> */}
                  </Tilt>
                </div>
              </div>
              <SocialList />
            </div>
            <div className="col">
              <img src={ProfileImage} alt="gambar" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
