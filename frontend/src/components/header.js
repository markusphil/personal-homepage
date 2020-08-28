import PropTypes from "prop-types"
import React from "react"
import ContactBox from "./cv/contactBox"

import contactData from "../jsonDataSource/contact.json"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      display: `flex`,
      justifyContent: `space-between`,
    }}
  >
    <div>
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      <p class="subtitle">Student Web Developer</p>
    </div>
    <ContactBox entries={contactData} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
