import styled from "styled-components";
import Button from "./button";
import Link from "next/link";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  color: #333333;
  justify-content: space-between;
  padding: 1em 20%;
  background: white;

  h1 {
    margin-right: auto;
    font-family: brandon-grotesque, sans-serif;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledItem = styled.div`
  font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
  letter-spacing: 0.2em;
  :hover {
    color: #ddb263;
  }
`;

const Header = () => (
  <StyledHeader>
    <StyledItem>
      <a href="#details">DETAILS</a>
    </StyledItem>
    <StyledItem>
      <a href="#lodging">LODGING</a>
    </StyledItem>
    <StyledItem>
      <a href="#FAQ">FAQ</a>
    </StyledItem>
    <StyledItem>
      <a href="#RSVP">RSVP</a>
    </StyledItem>
  </StyledHeader>
);

export default Header;
