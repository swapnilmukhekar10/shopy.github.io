import React from "react"

function SectionTitle(props) {
  return (
    <>
      <div className="section-title-main">
        <div className="container">
          <h4>
            {" "}
            <i class="fa-solid fa-bolt"></i>
            {props.section_title_name}
          </h4>
        </div>
      </div>
    </>
  )
}

export default SectionTitle
