import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Card from "./Cards"

function Slidern() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="container">
        <Slider {...settings}>
          <div className="container">
            <Card
              img="img/watch.webp"
              title="Lord 2019"
              prize="$250.00"
              mainPrize="$350.00"
              offer="50%"
            />
          </div>
          <div className="container">
            <Card
              img="img/mobile2.webp"
              title="Lord 2019"
              prize="$250.00"
              mainPrize="$350.00"
              offer="50%"
            />
          </div>

          <div className="container">
            <Card
              img="img/watch2.webp"
              title="Lord 2019"
              prize="$250.00"
              mainPrize="$350.00"
              offer="50%"
            />
          </div>

          <div className="container">
            <Card
              img="img/shoes.webp"
              title="Lord 2019"
              prize="$250.00"
              mainPrize="$350.00"
              offer="50%"
            />
          </div>
          <div className="container">
            <Card
              img="img/1.webp"
              title="Lord 2019"
              prize="$250.00"
              mainPrize="$350.00"
              offer="50%"
            />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Slidern
