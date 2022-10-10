import React from "react"

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.img} alt="img" className="img-fluid card-img" />
        <div className="d-flex justify-content-between">
          <div>
            <h3>{props.title}</h3>
            <h3 className="h3-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="url(#star-0.30037353969890446)"
                stroke="#FFCD4E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <defs>
                  <linearGradient id="star-0.30037353969890446">
                    <stop offset="0" stop-color="#FFCD4E"></stop>
                    <stop
                      offset="0"
                      stop-color="#FFFFFF"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="url(#star-0.30037353969890446)"
                stroke="#FFCD4E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <defs>
                  <linearGradient id="star-0.30037353969890446">
                    <stop offset="0" stop-color="#FFCD4E"></stop>
                    <stop
                      offset="0"
                      stop-color="#FFFFFF"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="url(#star-0.30037353969890446)"
                stroke="#FFCD4E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star"
              >
                <defs>
                  <linearGradient id="star-0.30037353969890446">
                    <stop offset="0" stop-color="#FFCD4E"></stop>
                    <stop
                      offset="0"
                      stop-color="#FFFFFF"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </h3>
            <span>{props.prize}</span>
            <span className="main-prize"> {props.mainPrize}</span>

            <small>{props.offer}</small>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Card
