import styled from "styled-components";

const StyledRSVP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: #white;
  padding: 5% 5%;
  color: #333333;
  h1 {
    color: #ddb263;
    line-height: 1.2;
    font-weight: 500;
    font-size: 3em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    margin: 0.2em;
  }
  .underline {
    align-self: center;
    width: 60px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: black;
  }

  p {
    font-size: 1.5em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    color: #333333;
  }
`;

const RSVP = () => (
  <StyledRSVP>
    <h1>RSVP</h1>
    <span class="underline"></span>
    <p>You will be able to RSVP through this site once we are ready!</p>
    <p class="byline"> Site designed and created by the Groom </p>
  </StyledRSVP>
);

export default RSVP;
