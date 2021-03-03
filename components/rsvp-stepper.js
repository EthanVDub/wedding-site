import styled from "styled-components";
import bw from "../static/bw.jpg";
import Pane from "./pane";

const StyledRSVPStepper = styled.div`
  display: flex;
  flex-direction: column;

  background-image: url(${bw});
  background-attachment: fixed;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;

  height: 100vh;
  overflow-y: scroll;
  padding: 5% 0;
`;

 const RSVPStepper = () => (
  <StyledRSVPStepper>
    <Pane />
  </StyledRSVPStepper>
);

export default RSVPStepper;
