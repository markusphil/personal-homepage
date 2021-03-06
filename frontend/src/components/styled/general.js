import styled, { css } from "styled-components"
import { colors, fontSizes } from "./variables"

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: ${props => props.alignItems || "flex-start"};
  justify-content: ${props => props.justifyContent || "space-between"};
  ${props => props.margin && `margin: 2rem -1.5rem 1rem`}
`

export const Col = styled.div`
  flex-grow: ${props => (props.grows ? "1" : "0")};
  flex-shrink: ${props => (props.shrinks ? "1" : "0")};
  flex-basis: ${props => props.width || "100%"};

  ${props =>
    props.widthMd &&
    css`
      @media screen and (min-width: 600px) {
        flex-basis: ${props => props.widthMd};
      }
    `}

  ${props =>
    props.widthLg &&
    css`
      @media screen and (min-width: 1000px) {
        flex-basis: ${props => props.widthLg};
      }
    `}
`
export const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 0 2rem;
`
export const Headline3 = styled.h3`
  padding: 0.5rem 0;
  margin: 0 0 2rem 0;
  font-size: ${fontSizes.H3};
  font-weight: 100;
`

export const Headline2 = styled.h2`
  padding: 0.5rem 0;
  margin: ${props => (props.margin ? "0 0 2rem 0" : "0")};
  font-size: ${fontSizes.H2};
  font-weight: 100;
`

export const List = styled.ul`
  padding-left: 1rem;

  li {
    margin-bottom: 0.25rem;
    position: relative;
    &::before {
      content: "";
      width: 0.5rem;
      height: 1px;
      position: absolute;
      top: 0.6rem;
      left: -1rem;
      background-color: ${colors.TEXT};
    }
  }
`

export const TextCenter = styled.p`
  text-align: center;
`
