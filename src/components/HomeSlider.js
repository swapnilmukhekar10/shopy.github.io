import React from "react"
import Slider from "react-slick"

function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  }

  const mystyle = {
    display: "none !importan",
  }
  return (
    <div className="">
      <div className="home-slider">
        <div className="container">
          <Slider {...settings}>
            <div className="slide-main">
              <div className="slide-main-l">
                <h1>
                  50% Off For Your First <br />
                  Shopping
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  lobortis consequat eu, quam <br />
                  etiam at quis ut convallis.
                </p>
                <button className=" btn button">Visit Collection</button>
              </div>
              <div className="slide-main-r">
                <img src={"img/apple-watch-0.png"}></img>
              </div>
            </div>

            <div className="slide-main">
              <div className="slide-main-l">
                <h1>
                  50% Off For Your First <br />
                  Shopping
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  lobortis consequat eu, quam <br />
                  etiam at quis ut convallis.
                </p>
                <button className=" btn button">Visit Collection</button>
              </div>
              <div className="slide-main-r">
                <img src={"img/mobile.webp"}></img>
              </div>
            </div>

            <div className="slide-main">
              <div className="slide-main-l">
                <h1>
                  50% Off For Your First <br />
                  Shopping
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  lobortis consequat eu, quam <br />
                  etiam at quis ut convallis.
                </p>
                <button className=" btn button">Visit Collection</button>
              </div>
              <div className="slide-main-r">
                <img src={"img/gitter.webp"}></img>
              </div>
            </div>

            <div className="slide-main">
              <div className="slide-main-l">
                <h1>
                  50% Off For Your First <br />
                  Shopping
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  lobortis consequat eu, quam <br />
                  etiam at quis ut convallis.
                </p>
                <button className=" btn button">Visit Collection</button>
              </div>
              <div className="slide-main-r">
                <img src={"img/bullet.webp"}></img>
              </div>
            </div>

            {/* <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HomeSlider
