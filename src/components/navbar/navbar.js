import "./navbar.css";
import clocklogo from "./clock.svg";
import telelogo from "./telephone-fill.svg";
import logo from "./logo.png";
import food1 from "./food1.png";
import cart from "./cart.png";

const Navbar = () => (
  <>
    <div>
      <ul className="nav nav1">
        <li className="nav-item w-25 d-flex justify-content-end">
          <a className="nav-link" href="#">
            <img src={clocklogo} /> 7.30 AM - 9.30 PM
          </a>
        </li>
        <li className="nav-item w-25">
          <a className="nav-link" href="#">
            <img src={telelogo} /> +880 1630 225 015
          </a>
        </li>
        <li className="nav-item w-50 d-flex justify-content-end">
          <a className="nav-link reg-link" href="#">
            REGISTER
          </a>
        </li>
      </ul>

      <nav className="navbar navbar-expand-lg px-5">
        <div className="container-fluid w-100">
          <div className="w-25 d-flex align-navbar">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                width="95"
                height="65"
              />
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
          </div>

          <div
            className="collapse navbar-collapse d-flex justify-content-evenly w-75"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-lg-0 d-flex justify-content-evenly">
              <li className="nav-item">
                <a className="nav-link txt-deco" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link txt-deco" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link txt-deco"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  ITEMS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link txt-deco" href="#">
                  PAGES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link txt-deco" href="#">
                  CONTACT
                </a>
              </li>
            </ul>

            <img src={cart} />

            <div>
              <span style={{ color: "#2A435D" }}>
                <b>Delivery Order</b>
                <br />
                +880 1630 225 015
              </span>
            </div>

            <img src={food1} />

            <form role="login">
              <button
                className="btn btn-danger"
                type="button"
                style={{
                  width: "90px",
                  height: "35px",
                  borderRadius: "10px",
                }}
              >
                <b>LOGIN</b>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </>
);

export default Navbar;
