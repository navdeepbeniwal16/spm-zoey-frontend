    import React, { useState, useEffect, useRef } from 'react'

    const Navbar = () => {

        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const login = () => {
            console.log('Login button pressed');
            setIsLoggedIn(() => true);
        };
        const logout = () => {
            console.log('Logout button pressed');
            setIsLoggedIn(() => false)
        }

    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <strong>ZOEY</strong>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>

              <div className="d-flex">
                {isLoggedIn && (
                  <div>
                    <a
                      className="nav-link dropdown-toggle fs-3"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-person-circle" width="32" height="32"></i>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end text-right"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Manage Posts
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider"></hr>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" onClick={logout}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
                {!isLoggedIn && (
                  <div>
                    <button
                      type="button"
                      onClick={login}
                      class="btn btn-primary m-2"
                    >
                      Login
                    </button>
                    <button type="button" class="btn btn-outline-primary m-2">
                      Signup
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
    }

    export default Navbar