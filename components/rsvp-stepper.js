import styled from "styled-components";
import bw from "../static/Bwcute.jpg";
import Pane from "./pane";

const StyledRSVPStepper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${bw});

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 100vh;
`;

const StyledItem = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RSVPStepper = () => (
  <StyledRSVPStepper>
    <StyledItem>
      <Pane />
    </StyledItem>
  </StyledRSVPStepper>
);

export default RSVPStepper;
