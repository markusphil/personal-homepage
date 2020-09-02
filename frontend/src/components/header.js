import PropTypes from "prop-types"
import React from "react"
import ContactBox from "./cv/contactBox"
import { graphql, useStaticQuery } from "gatsby"

import { Row, Col } from "./styled/general"
import { colors } from "./styled/variables"
import styled from "styled-components"

const Title = styled(Col)`
  h1 {
    color: ${colors.TEXT};
    font-weight: 200;
    font-size: 3rem;
    margin: 0;
  }
  p {
    color: ${colors.TEXT_LIGHT};
    font-weight: 100;
    font-size: 1.5rem;
  }
`

const StyledHeader = styled.header`
  max-width: 1200px;
  margin: auto;
  padding: 3rem 2rem;
`

const Header = ({ siteTitle, siteSubTitle }) => {
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

  return (
    <StyledHeader>
      <Row alignItems="center">
        <Title shrinks grows widthMd="50%">
          <h1>{siteTitle}</h1>
          <p>{siteSubTitle}</p>
        </Title>
        <Col width="auto" widthLg="25%">
          <ContactBox
            entries={data.allContactJson.edges.map(edge => edge.node)}
          />
        </Col>
      </Row>
    </StyledHeader>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
