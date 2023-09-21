import React from 'react';
import image from '../assets/images/LOGO-01.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons'

export default function TopBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
            </button>


            <ul className="navbar-nav ml-auto">

                  <li className="nav-item dropdown no-arrow mx-1">
                          <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                                  <FontAwesomeIcon icon={faBell} />

                          </a>
                  </li>


                  <li className="nav-item dropdown no-arrow mx-1">
                          <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                                  <FontAwesomeIcon icon={faEnvelope} />

                          </a>
                  </li>


                  <div className="topbar-divider d-none d-sm-block"></div>
                  <li className="nav-item dropdown no-arrow">
                          <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">NAHIF</span>
                                          <img className="img-profile rounded-circle" src={image} alt="Nahif" width="60" />
                          </a>
                  </li>

            </ul>

    </nav>
  );
}