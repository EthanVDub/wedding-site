import styled from "styled-components";
import Button from "./button";
import Link from "next/link";
import cute from "../static/Vertical.jpg";

const StyledIntro = styled.div`
  display: flex;
  flex-direction: row;

  h1 {
    display: flex;
    justify-content: center;
    color: #333333;
    line-height: 1.2;
    font-weight: 500;
    font-family: "Surveyor Display", "Surveyor Display A", "Surveyor Display B",
      serif;
  }

  img {
    height: auto;
    border-radius: 1%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: static;
  }
`;

const StyledImage = styled.div``;

const StyledInfo = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  img {
    width: 100%;
  }

  font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
  letter-spacing: 0.2em;

  text-align: center;

  h1 {
    color: #333333;
    line-height: 1.2;
    font-weight: 500;
    font-size: 7em;
    font-family: "Surveyor Display", "Surveyor Display A", "Surveyor Display B",
      serif;
  }

  @media (max-width: 1100px) {
    h1 {
      margin: auto;
    }
  }

  @media (max-width: 768px) {
    display: block;

    img {
      display: none;
    }
  }
`;

const Intro = () => (
  <StyledIntro>
    <StyledInfo>
      <h1>
        ethan <br />&<br /> delaney
      </h1>
      <p className="byline"> MAY 22, 2021 </p>
    </StyledInfo>
    <StyledInfo>
      <img src={cute} />
    </StyledInfo>
  </StyledIntro>
);

export default Intro;
