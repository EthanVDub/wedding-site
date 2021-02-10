import Header from "./header";
import Intro from "./intro";
import Details from "./details";
import Lodging from "./lodging";
import Faq from "./faq";
import RSVP from "./rsvp";
import Registry from "./registry";
import styled from "styled-components";
import Contact from "./contact";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = () => (
  <StyledMain>
    <Header />
    <Intro />
    <section id="details">
      <Details />
    </section>
    <section id="lodging">
      <Lodging />
    </section>
    <section id="FAQ">
      <Faq />
    </section>
    <section id="registry">
      <Registry />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <section id="RSVP">
      <RSVP />
    </section>
  </StyledMain>
);

export default Main;
