import styled from "styled-components";
import RSVPButton from "./rsvp-button";
import Link from "next/link";

const StyledPane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30%;
  padding: 3% 0;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 30px;
  h1 {
    margin: 3% auto 0 auto;
    color: #333333;
    line-height: 1.2;
    font-weight: 500;
    font-size: 3em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    letter-spacing: 0.2em;
  }

  .underline {
    margin: 0 auto;
    width: 60px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: #333333;
  }

  @media (max-width: 768px) {
    margin: 3%;
    padding: 0;
  }
`;

const StyledResponseBox = styled.div`
  margin: 5% 10%;
  width: 50%;
  p {
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    color: #333333;
    margin-bottom: 0;
  }

  align-self: center;

  input[type="text"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    width: 75%;
  }
`;

const Pane = () => (
  <StyledPane>
    <h1>RSVP</h1>
    <span className="underline"></span>
    <StyledResponseBox>
      <p>Your email address:</p>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email address.."
      />
      <br />
      <p>Number in your party:</p>
      <select id="party" name="party">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </StyledResponseBox>
    <Link href="https://www.ihg.com/holidayinn/hotels/us/en/cedar-falls/alocf/hoteldetail">
      <RSVPButton> NEXT </RSVPButton>
    </Link>
    <p>This part of the site is not ready for use yet!</p>
  </StyledPane>
);

export default Pane;
