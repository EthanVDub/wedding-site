import styled from "styled-components";
import RSVPButton from "./rsvp-button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';

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

const StyledForm = styled.div`
  p {
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    color: #333333;
    margin-bottom: 0;
  }

  margin: 0 5%;

  display: flex;
  flex-direction: column;

  input[type="text"],
  select {
    font-family: brandon-grotesque, "Brandon Grotesque", Futura, sans-serif;
    color: #333333;
    padding: 12px 20px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 15px auto;
  }

  input[type="checkbox"] {
    align-self: flex-start;
  }
`;

const StyledLeftSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 15px auto;
  }

  
`;

const SectionItem = styled.div`
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const Pane = () => {
  const [email, setEmail] = useState("");
  const [party, setParty] = useState(1);
  const [stepper, setStepper] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [response, setResponse] = useState("yes");
  const [dietary, setDietary] = useState("");
  const [kid, setKid] = useState(false);

  const submit = async () => {
    const results = JSON.stringify(
      {
        firstname: firstname, 
        lastname: lastname, 
        response: response, 
        dietary: dietary, 
        kid: kid, 
        email: email, 
        partysize: party
      });
    const res = await fetch('/api/rsvp-api', {
      method: 'post',
      body: results
    });
    setStepper(2);
  }

  if (stepper === 0) {
    return (
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
            onChange={() => setEmail(event.target.value)}
          />
          <br />
          <p>Number in your party:</p>
          <select
            id="party"
            name="party"
            onChange={() => setParty(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </StyledResponseBox>
        <RSVPButton onClick={() => setStepper(1)}> NEXT </RSVPButton>
      </StyledPane>
    );
  } else if (stepper === 1) {
    return (
      <StyledPane>
        <h1>RSVP</h1>
        <span className="underline"></span>
        <StyledForm>
          <StyledSection>
            <SectionItem>
              <p>First Name</p>
              <input
                type="text"
                id="firstname"
                name="firstname"
                autoComplete="off"
                onChange={() => setFirstname(event.target.value)}
              />
            </SectionItem>
            <SectionItem>
              <p>Last Name</p>
              <input
                type="text"
                id="lastname"
                name="lastname"
                autoComplete="off"
                onChange={() => setLastname(event.target.value)}
              />
            </SectionItem>
          </StyledSection>
          <StyledLeftSection>
            <SectionItem>
              <p>Are you able to join us?</p>
              <select
                id="response"
                name="response"
                onChange={() => setResponse(event.target.value)}
              >
                <option value="yes">See you there!</option>
                <option value="no">Unfortunately Not</option>
              </select>
            </SectionItem>
          </StyledLeftSection>
          <StyledSection>
            <SectionItem>
              <p>Dietary Restrictions</p>
              <input
                type="text"
                id="dietary"
                name="dietary"
                autoComplete="off"
                onChange={() => setDietary(event.target.value)}
              />
            </SectionItem>
            <SectionItem>
              <p>Kid's Meal</p>
              <input
                type="checkbox"
                id="kid"
                name="kid"
                onChange={() => setKid(!kid)}
              />
            </SectionItem>
          </StyledSection>
          <RSVPButton onClick={() => submit()}> DONE </RSVPButton>
        </StyledForm>
      </StyledPane>
    );
  } else {
    return (
      <StyledPane>
        <h1>RSVP</h1>
        <span className="underline"></span>
        <h1>SUCCESS</h1>
      </StyledPane>
    );
  }
};

export default Pane;
