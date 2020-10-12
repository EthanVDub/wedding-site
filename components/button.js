import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid white;
  color: white;
  margin: 0 40% 10% 40%;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  max-height: 50px;
  font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
  :hover {
    background: white;
    color: #ddb263;
  }
`;
export default Button;
