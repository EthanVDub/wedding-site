import styled from "styled-components";
import calendar from "../static/Calendar.png";
import location from "../static/Location.png";

const StyledDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 8% 10%;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const StyledItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
  letter-spacing: 0.2em;
  text-align: center;
  h1 {
    color: #ddb263;
    line-height: 1.2;
    font-weight: 500;
    font-size: 3em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    letter-spacing: 0.2em;
    margin: 0.2em;
  }

  h3 {
    color: #333333;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
  }

  h2 {
    font-size: 1.5em;
    color: #333333;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
  }

  img {
    height: 3.5em;
  }

  .underline {
    display: flex;
    margin: auto;
    width: 60px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: #333;
  }

  @media (max-width: 768px) {
    padding: 1em 0;
  }
`;

const Details = () => (
  <StyledDetails>
    <StyledItem>
      <img src={calendar} />
      <h1>WHEN</h1>
      <span className="underline"></span>
      <h3>MAY 22, 2021</h3>
      <h2>A SATURDAY</h2>
    </StyledItem>
    <StyledItem>
      <img src={location} />
      <h1>WHERE</h1>
      <span className="underline"></span>
      <h3>Cedar Falls, IA</h3>
      <h2>BIEN VENU EVENT CENTER</h2>
    </StyledItem>
  </StyledDetails>
);

export default Details;
