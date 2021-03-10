import Underline from "./underline";

import styled from "styled-components";
import RSVPSectionButton from "./rsvp-section-button";
import Link from "next/link";

const StyledRSVP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: #white;
  padding: 1% 5%;
  color: #333333;
  
  h1 {
    color: #f4cf9f;
    line-height: 1.2;
    font-weight: 500;
    font-size: 3em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    margin: 0.2em;
  }

  p {
    font-size: 1.5em;
    margin-bottom: 0;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    color: #333333;
  }
`;

const RSVP = () => (
  <StyledRSVP>
    <h1>RSVP</h1>
    <Underline color={"#333333"} />
    <p>Click here to RSVP!</p>
    <Link href="/rsvp">
      <RSVPSectionButton> RSVP </RSVPSectionButton>
    </Link>
    <p className="byline"> Site designed and created by the Groom </p>
  </StyledRSVP>
);

export default RSVP;
