import styled from "styled-components";
import holiday from "../static/Holiday.jpg";
import Button from "./button";
import Link from "next/link";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
    margin-bottom: 0.2em;
  }
  @media (max-width: 1100px) {
    padding: 2em 0;
    flex-direction: column;
    img {
      margin: 0;
    }
  }
`;

const StyledDropDown = styled.div`
  margin: 5% 15%;
`;

const StyledItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;

  margin: auto;
  img {
    width: 60%;
    height: 60%;
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

  ul {
    list-style: none;
    text-align: left;
    font-size: 1em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    color: #eabf8b;
    padding: 0;
  }

  .details {
    color: #eabf8b;
  }
  @media (max-width: 1100px) {
      h1 {
          margin-top: 0;
      }
    img {
      width: 55%;
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
      <span className="underline"></span>
      <p>
        We have a block of rooms at the Holiday Inn & Suites that is connected
        to the event center. Simply use the link below or call ahead and say
        you're coming to the Vander Wiel wedding!
        <StyledDropDown>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#eabf8b" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              color="#eabf8b"
            >
              <div className="details">Hotel Room Details</div>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>
                  <b>Room Types:</b> Two Queen Beds or King with Sofa
                </li>
                <li>
                  <b>Rental Dates:</b> 5/20, 5/21, 5/22
                </li>
                <li>
                  <b>Cost:</b> $125/night
                </li>
                <li>
                  <b>Hotel Number:</b> (319)-260-2600
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </StyledDropDown>
      </p>
      <Link href="https://www.ihg.com/holidayinn/hotels/us/en/cedar-falls/alocf/hoteldetail?fromRedirect=true&qSrt=sBR&qIta=99801505&icdv=99801505&qSlH=ALOCF&qGrpCd=VAN&setPMCookies=true&qSHBrC=HI&qDest=7400%20Hudson%20Road,%20Cedar%20Falls,%20IA,%20US&srb_u=1">
        <Button> RESERVE </Button>
      </Link>
    </StyledItem>
  </StyledLodging>
);

export default Lodging;
