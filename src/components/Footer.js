import React from "react"

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-inner-main">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <h1 className="header-title">
                  {" "}
                  <a href="#" className="logo-name">
                    Shopy
                  </a>
                </h1>

                <div>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Auctor libero id et, in gravida. Sit diam duis mauris nulla
                    cursus. Erat et lectus vel ut sollicitudin elit at amet.
                  </li>
                </div>
              </div>

              <div className="col-lg-3  col-md-6">
                <h1 className="header-title">About Us</h1>
                <ul>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Our Store</a>
                  </li>
                  <li>
                    <a href="#">Term & Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3  col-md-6">
                <h1 className="header-title">Customer Care</h1>
                <ul>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">How To Buy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3  col-md-6">
                <h1 className="header-title">Contact</h1>
                <ul>
                  <li>Savedi , Ahmednagar</li>
                  <li>Email: swapnilmukhekar1004@gmail.com</li>
                  <li>Phone: +919322868887</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
