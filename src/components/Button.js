import styled from "styled-components"

const Button = styled.button`
  margin: 0;
  padding: 0.25rem 0.5rem;
  border: 2px solid rebeccapurple;
  border-radius: 3px;
  color: rebeccapurple;
  background: none;
  font-weight: bold;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  }

  &:active {
    color: white;
    background: rebeccapurple;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }
`

export default Button
