import React from 'react';
import '../../styles/index.css';



const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: 'white' }}> Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" style={{ flexDirection: 'row-reverse' }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default NavBar;