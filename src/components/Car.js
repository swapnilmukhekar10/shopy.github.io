import React from "react"
import Card from "./Cards"

function Car() {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <Card
                img="img/xor2017.webp"
                title="Xorsche 2018
              "
                prize="$150.00"
                mainPrize="$250.00"
                offer="50%"
              />
            </div>
            <div className="col-lg-3 col-md-6">
              <Card
                img="img/budi2017.webp"
                title="Budi 2018
              "
                prize="$180.00"
                mainPrize="$350.00"
                offer="30%"
              />
            </div>
            <div className="col-lg-3 col-md-6">
              <Card
                img="img/Resla2015.webp"
                title="Resla 2015
              "
                prize="$120.00"
                mainPrize="$210.00"
                offer="43%"
              />
            </div>
            <div className="col-lg-3 col-md-6">
              <Card
                img="img/lord2020.webp"
                title="Lord 2020
              "
                prize="$250.00"
                mainPrize="$450.00"
                offer="50%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Car
