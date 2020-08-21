import styled from "styled-components";
import holiday from "../static/Holiday.jpg";
import Button from "./button";
import Link from "next/link";

const StyledLodging = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  background: #eabf8b;
  padding: 0 10%;
  h1 {
    color: white;
    line-height: 1.2;
    font-weight: 500;
    font-size: 3em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    letter-spacing: 0.2em;
    margin-bottom: 0.3em;
  }
  @media (max-width: 768px) {
    padding: 2em 0;
    flex-direction: column;
    img {
      margin: 0;
    }
  }
`;

const StyledItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;

  margin: auto;
  img {
    width: 55%;
    height: 55%;
    border-radius: 5%;
    margin: 10% 0%;
  }
  .underline {
    display: flex;
    margin: 0 auto;
    width: 60px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: white;
  }
  p {
    margin-top: 0.5em;
    font-size: 1.5em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    color: white;
  }
  @media (max-width: 768px) {
      h1 {
          margin-top: 0;
      }
    img {
      margin: 1em 0;
    }
`;

const Lodging = () => (
  <StyledLodging>
    <StyledItem>
      <img src={holiday} />
    </StyledItem>
    <StyledItem>
      <h1>LODGING</h1>
      <span class="underline"></span>
      <p>
        We reserved rooms from the <br /> Holiday Inn & Suites <br /> that is
        connected
        <br /> to the event center.
        <br /> Simply call ahead and say <br /> you are coming
        <br /> for our wedding!
      </p>
      <Link href="https://www.ihg.com/holidayinn/hotels/us/en/cedar-falls/alocf/hoteldetail">
        <Button> SITE </Button>
      </Link>
    </StyledItem>
  </StyledLodging>
);

export default Lodging;
