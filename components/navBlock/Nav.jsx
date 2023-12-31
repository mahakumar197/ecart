import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './styles/Navstyle.css';
function Nav() {
  return (
    <div className="App">
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <a class="navbar-brand text-white" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <switch>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                {/* <a class="nav-link text-white" href="#">
                  Home <span class="sr-only">(current)</span>
                </a> */}
                  {/* <Route path="/" exact component={Home} /> */}
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Link
                </a>
              </li>
              {/* <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-white"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item text-white" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li> */}
              <li class="nav-item">
                <a class="nav-link disabled text-white" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            </switch>
            <form class="form-inline my-2 my-lg-0 d-flex">
              <input
                class="form-control search-ip"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
