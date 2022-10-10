import React from "react"

function Header() {
  return (
    <>
      <div className="header-main-main  sticky-top">
        <div className="container">
          <div className="header-main">
            <div>
              <a href="#" className="logo-name">
                Shopy
              </a>
            </div>

            <div>
              <div className="search-main">
                <div className="search-main-m">
                  <input type="text" placeholder="Search..."></input>
                </div>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>

            <div className="user-m">
              <i class="fa-solid fa-user"></i>

              <i class="fa-brands fa-shopify"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
