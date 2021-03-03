import RSVPButton from "./rsvp-button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';
import styled from "styled-components";

const StyledPane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 30%;
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

  .between {
    margin 3% auto;
    width: 80%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #333333;
  }

  @media (max-width: 1200px) {
    margin: auto 3%;
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

  @media (max-width: 1200px) {
    width: 75%;
    padding: 0;
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

  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 0 auto;
    p {
      margin: 0;
    }
  }

  input[type="checkbox"] {
    align-self: flex-start;
  }
`;

const StyledLeftSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 5%;

  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 0 auto;
  }

  
`;

const SectionItem = styled.div`
  @media (max-width: 1200px) {
    margin: 10px 0;
  }
`;

const Pane = () => {
  const [email, setEmail] = useState("");
  const [party, setParty] = useState(1);
  const [stepper, setStepper] = useState(0);
  const [firstname, setFirstname] = useState([""]);
  const [lastname, setLastname] = useState([""]);
  const [response, setResponse] = useState(["yes"]);
  const [dietary, setDietary] = useState([""]);
  const [kid, setKid] = useState([false]);

  const [partyResponse, setPartyResponse] = useState([])

  const setArrays = async (number) => {
    setParty(number)
    let firstNameTemp = []
    let lastNameTemp = []
    let responseTemp = []
    let dietary = []
    let kidTemp = []

    for (let index = 0; index < number; index++) {
        firstNameTemp.push("")
        lastNameTemp.push("")
        responseTemp.push("yes")
        dietary.push("")
        kidTemp.push(false)
    }
    
    setFirstname(firstNameTemp)
    setLastname(lastNameTemp)
    setResponse(responseTemp)
    setDietary(dietary)
    setKid(kidTemp)
  }

  const submit = async () => {
    let body = []
    for (let index = 0; index < party; index++) {
        body.push({
          firstname: firstname[index], 
          lastname: lastname[index], 
          response: response[index], 
          dietary: dietary[index], 
          kid: kid[index], 
          email: email, 
          partysize: party
        })
    }
    const results = JSON.stringify(body);
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
                onChange={() => {
                    setArrays(event.target.value)
                  }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </StyledResponseBox>
            <RSVPButton onClick={() => {
              setStepper(1)
            }}> NEXT </RSVPButton>
          </StyledPane>
    );
  } else if (stepper === 1) {
    let form = []
    for (let index = 0; index < party; index++) {
      form.push(
        <StyledForm key={index}>
          <StyledSection>
            <SectionItem>
              <p>First Name</p>
              <input
                type="text"
                id="firstname"
                name="firstname"
                autoComplete="off"
                key={index}
                onChange={() => {
                    let temp = [...firstname]
                    temp[index] = event.target.value
                    setFirstname(temp)
                  }}
              />
            </SectionItem>
            <SectionItem>
              <p>Last Name</p>
              <input
                type="text"
                id="lastname"
                name="lastname"
                key={index}
                autoComplete="off"
                onChange={() => {
                    let temp = [...lastname]
                    temp[index] = event.target.value
                    setLastname(temp)
                  }}
              />
            </SectionItem>
          </StyledSection>
          <StyledLeftSection>
            <SectionItem>
              <p>Are you able to join us?</p>
              <select
                id="response"
                name="response"
                key={index}
                onChange={() => {
                    let temp = [...response]
                    temp[index] = event.target.value
                    setResponse(temp)
                  }}
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
                key={index}
                onChange={() => {
                    let temp = [...dietary]
                    temp[index] = event.target.value
                    setDietary(temp)
                  }}
              />
            </SectionItem>
            <SectionItem>
              <p>Kid's Meal</p>
              <input
                type="checkbox"
                id="kid"
                name="kid"
                key={index}
                onChange={() => {
                    let temp = [...kid]
                    temp[index] = !temp[index]
                    setKid(temp)
                  }}
              />
            </SectionItem>
          </StyledSection>
          <span className="between"></span>
          </StyledForm>
      )
    }
    return (
      
          <StyledPane>
            <h1>RSVP</h1>
            <span className="underline"></span>
              {form}
              <RSVPButton onClick={() => submit()}> DONE </RSVPButton>
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
} 

export default Pane;