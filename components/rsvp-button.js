import styled from "styled-components";

const RSVPButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #333333;
  color: #333333;
  margin: 0 40% 0 40%;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  max-height: 50px;
  font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
  :hover {
    background: #333333;
    color: white;
  }

  @media (max-width: 1200px) {
    margin-bottom: 5%;
    padding: 0.5em 0.5em;
  }
`;
export default RSVPButton;
