import Underline from "./underline";
import RegistryButton from "./registry-button";

import bed from "../static/bed.png";
import bullseye from "../static/bullseye.png";
import laptop from "../static/laptop.png";

import Link from "next/link";
import styled from "styled-components";


const StyledRegistry = styled.div`
  margin: 3% 10%;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    margin: auto auto 5% auto;
  }
`;

const StyledItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`

const StyledItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
  letter-spacing: 0.2em;
  text-align: center;
  margin-top: 3%;

  h1 {
    color: #333333;
    line-height: 1.2;
    font-weight: 500;
    font-size: 3em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    margin: 0.2em;
    flex-grow: 4;
  }

  h3 {
    color: #333333;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
  }

  h2 {
    line-height: 0.8;
    font-weight: 300;
    font-size: 2em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    color: #f4cf9f;
    margin-bottom: 5%;
    @media (max-width: 768px) {
      margin: 5% auto;
    }
  }

  img {
    height: 3.5em;
  }

  @media (max-width: 768px) {
    padding: 1em 0;
  }
`;

const Registry = () => (
  <StyledRegistry>
    <StyledItem>
        <h1>REGISTRY</h1>
        <Underline color={"#f4cf9f"} />
    </StyledItem>
    <StyledItems>
      <StyledItem>
        <img src={laptop} />
        <h2>AMAZON</h2>
        <Underline color={"#333333"} />
        <Link href="https://www.amazon.com/wedding/delaney-schaffner-ethan-vander-wiel--may-2021/registry/3D1W0YYHM7L3P">
          <RegistryButton> SHOP </RegistryButton>
        </Link>
      </StyledItem>
      <StyledItem>
        <img src={bullseye} />
        <h2>TARGET</h2>
        <Underline color={"#333333"} />
        <Link href="https://www.target.com/gift-registry/giftgiver?registryId=be1cf33fb8d442cd9b1befb24ac56b22&lnk=registry_custom_url">
          <RegistryButton> SHOP </RegistryButton>
        </Link>
      </StyledItem>
      <StyledItem>
        <img src={bed} />
        <h2>BB&B</h2>
        <Underline color={"#333333"} />
        <Link href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549927863?eventType=Wedding">
          <RegistryButton> SHOP </RegistryButton>
        </Link>
      </StyledItem>
    </StyledItems>
  </StyledRegistry>
);

export default Registry;