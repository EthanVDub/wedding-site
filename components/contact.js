import styled from "styled-components";
import calendar from "../static/Calendar.png";
import location from "../static/Location.png";

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  background: #333333;
  padding-top: 0;
  color: white;
  h1 {
    color: white;
    line-height: 1.2;
    font-weight: 500;
    font-size: 3em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    margin-bottom: 0.2em;
  }
  .underline {
    align-self: center;
    width: 60px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: #eabf8b;
  }
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1em 10% 0 10%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: auto;
  }
`;

const StyledItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin: 0 1em;

  @media (max-width: 768px) {
    margin: 1em;
  }

  .contacts {
    margin-top: 3%;
    margin-bottom: 27%;
  }

  p {
    font-size: 1em;
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    color: #ffffff;
    margin: 0.1em;
  }

  h1 {
    margin: 0;
  }

  .underline {
    display: flex;
    width: 60px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: #eabf8b;
    margin: auto;
  }
`;

const Contact = () => (
  <StyledContact>
    <h1>CONTACT</h1>
    <span className="underline"></span>
    <StyledSection>
      <StyledItem>
        <h1>Bride</h1>
        <span className="underline"></span>
        <div className="contacts">
          <p>Delaney Schaffner</p>
          <p>309-738-8106</p>
          <p>delaney.schaffner@gmail.com</p>
          <br />
          <p>Heather Schaffner</p>
          <p>309-738-6053</p>
          <p>hschfnr@yahoo.com</p>
        </div>
      </StyledItem>
      <StyledItem>
        <h1>Groom</h1>
        <span className="underline"></span>
        <div className="contacts">
          <p>Ethan Vander Wiel</p>
          <p>319-429-4908</p>
          <p>ethanvdub64@gmail.com</p>
          <br />
          <p>Kara Vander Wiel</p>
          <p>319-429-4908</p>
          <p>karavw@cfu.net</p>
        </div>
      </StyledItem>
    </StyledSection>
  </StyledContact>
);

export default Contact;
