import styled from "styled-components";
import Button from "./button";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const StyledFaq = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  background: #f4c1bc;
  padding: 5% 5%;
  color: white;
  h1 {
    color: #333333;
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
    border-bottom-color: #ddb263;
  }
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin: 0 1em;

  @media (max-width: 768px) {
    margin: 1em;
  }

  p {
    font-size: 1em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    color: #333333;
  }

  .underline {
    align-self: center;
    width: 60px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: white;
  }

  h2 {
    line-height: 1.2;
    font-weight: 500;
    font-size: 1.5em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    color: #333333;
    border-bottom: 1px solid white;
  }
`;

const Faq = () => {
  const classes = useStyles();
  return (
    <StyledFaq>
      <h1>FAQ</h1>
      <span class="underline"></span>
      <StyledItem>
        <StyledSection>
          <StyledItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h2>What questions should go in these spots?</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </AccordionDetails>
            </Accordion>
          </StyledItem>
          <StyledItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h2>How do you get to the hotel from Ames?</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </AccordionDetails>
            </Accordion>
          </StyledItem>
          <StyledItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <h2>What is the name of the Bride and Groom?</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p>Seriously?</p>
              </AccordionDetails>
            </Accordion>
          </StyledItem>
        </StyledSection>
        <StyledSection>
          <StyledItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h2>What questions should go in these spots?</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </AccordionDetails>
            </Accordion>
          </StyledItem>
          <StyledItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h2>What questions should go in these spots?</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </AccordionDetails>
            </Accordion>
          </StyledItem>
          <StyledItem>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h2>What questions should go in these spots?</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </p>
              </AccordionDetails>
            </Accordion>
          </StyledItem>
        </StyledSection>
      </StyledItem>
    </StyledFaq>
  );
};

export default Faq;
