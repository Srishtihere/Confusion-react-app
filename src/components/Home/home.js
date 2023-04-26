import car1 from "./Frame1.png";
import car2 from "./image_bigOffer_2.png";
import car3 from "./scroll.png";
import "./home.css";
import instalogo from "./instagram.svg";
import fblogo from "./facebook.svg";
import twtlogo from "./twitter.svg";
import ldnlogo from "./linkedin.svg";
import favDishList from "./populardishlist";

const Home = () => (
  <>
    {/* the carousal */}
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={car1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <button
              className="btn btn-danger"
              type="button"
              style={{
                width: "150px",
                height: "35px",
                borderRadius: "10px",
              }}
            >
              <b>ORDER NOW</b>
            </button>
            <p style={{ color: "black" }}>$5.08</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={car2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={car3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <button
              className="btn btn-danger"
              type="button"
              style={{
                width: "150px",
                height: "35px",
                borderRadius: "10px",
              }}
            >
              <b>ORDER NOW</b>
            </button>
            <p style={{ color: "black" }}>$5.08</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    {/* Social media links */}
    <div style={{ width: "100%", height: "43px" }}>
      <ul className="socialmedia">
        <li>
          <b>Follow us to know more:--</b>
        </li>
        <li className="m-2">
          <a href="#">
            <img src={instalogo} />
          </a>
        </li>
        <li className="m-2">
          <a href="#">
            <img src={fblogo} />
          </a>
        </li>
        <li className="m-2">
          <a href="#">
            <img src={twtlogo} />
          </a>
        </li>
        <li className="m-2">
          <a href="#">
            <img src={ldnlogo} />
          </a>
        </li>
      </ul>
    </div>

    {/* div block for spacing */}
    <div
      style={{ width: "100%", height: "40px", backgroundColor: "#FFF8EE" }}
    ></div>

    {/* Popular dishes */}
    <div className="populardish">
      <h3 style={{ marginBottom: "0", color: "#2A435D" }}>Food Items</h3>
      <h1 style={{ color: "#CC3333" }}>Popular Dishes</h1>
      <br />
      <div className="popularDishesCorousal">
        {favDishList.length > 0 &&
          favDishList.map((data) => (
            <div className="card mx-2" key={data.id} style={{ width: "18rem" }}>
              <img src={`${data.FavDishimg}`} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{data.dishName}</h5>
                <p className="card-text">$ {data.Price}</p>
                <button
                  className="btn btn-danger"
                  type="button"
                  style={{
                    width: "130px",
                    height: "35px",
                    borderRadius: "10px",
                  }}
                >
                  <b>ORDER NOW</b>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>

    {/* div block for spacing */}
    <div
      style={{ width: "100%", height: "40px", backgroundColor: "#FFF8EE" }}
    ></div>

    {/* Rich&healthy */}
    <div className="rich&healthy">
      
    </div>
  </>
);

export default Home;
