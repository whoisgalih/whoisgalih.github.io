import { Component } from "react";
import "../styles/AppBar.css";

export default class AppBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light fixed-top app-bar">
          <div className="container">
            <a className="navbar-brand" href="/">
              <strong>whoisgalih</strong>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#Home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Link">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Action">
                      Action
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#Disabled" tabIndex={-1} aria-disabled="true">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
