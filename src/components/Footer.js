import styled from "styled-components"

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rebeccapurple;
  color: white;
  text-align: center;
  padding: 0.5rem;

  & p {
    margin: 0;
  }

  & a {
    color: white;
  }
`

export default Footer
