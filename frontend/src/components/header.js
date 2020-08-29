import PropTypes from "prop-types"
import React from "react"
import ContactBox from "./cv/contactBox"
import { graphql, useStaticQuery } from "gatsby"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allContactJson {
        edges {
          node {
            id
            name
            icon
            url
          }
        }
      }
    }
  `)

  console.log(data)

  return (
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
        <p className="subtitle">Student Web Developer</p>
      </div>
      <ContactBox entries={data.allContactJson.edges.map(edge => edge.node)} />
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
