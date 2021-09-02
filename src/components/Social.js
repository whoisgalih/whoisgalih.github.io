import { Component, createRef } from "react";
import Tilt from "react-tilt";
import "../styles/social.css";
import PropTypes from "prop-types";

class Social extends Component {
  constructor(props) {
    super(props);
    this.wrapper = createRef();
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Tilt
          className={"Tilt Social" + this.props.name}
          options={{
            maxTilt: 15,
            perspective: 3000, // Transform perspective, the lower the more extreme the tilt gets.
            easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
            scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
            speed: 300, // Speed of the enter/exit transition.
            transition: true, // Set a transition on enter/exit.
            reset: true, // If the tilt effect has to be reset on exit.
            glare: false, // Enables glare effect
            maxGlare: 1, // From 0 - 1.
          }}
          style={this.props.backgroundStyle}
        >
          <a href={this.props.link} target="blank">
            <svg xmlns="http://www.w3.org/2000/svg" ref={this.wrapper} fill={this.props.color} viewBox="0 0 16 16">
              <path ref={this.wrapper} d={this.props.d} />
            </svg>
          </a>
        </Tilt>
      </div>
    );
  }
}

Social.propTypes = {
  d: PropTypes.string.isRequired,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  backgroundStyle: PropTypes.object,
};

Social.defaultProps = {
  color: "#fff",
  backgroundStyle: { background: "#000" },
  size: "",
};

export default Social;
