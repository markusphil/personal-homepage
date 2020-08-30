import styled from "styled-components"

export const Row = styled.div`
  display: flex;
  margin: 0 -0.5rem;
  flex-wrap: wrap;
  align-items: ${props => props.alignItems || "flex-start"};
  justify-content: ${props => props.justifyContent || "space-between"};
`

export const Col = styled.div`
  flex: ${props => (props.isFixed ? "0 0" : "1 1")}
    ${props => props.width || "auto"};
  padding: 0 0.5rem;

  ${props =>
    (props.widthMd && !props.width) ||
    (props.width !== props.widthMd &&
      `@media screen and (min-width: 700px) {
           flex: 1 1 ${props => props.widthMd};
         }`)}

  ${props =>
    (props.widthLg && !props.width) ||
    (props.width !== props.widthLg &&
      `@media screen and (min-width: 1000px) {
            flex: 1 1 ${props => props.widthLg};
            }`)}
`
export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
`
