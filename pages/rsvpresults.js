import styled from "styled-components";
import Head from "next/head";
import RSVPResultsButton from "../components/rsvpresultsbutton";

import { useRouter } from 'next/router';
import { useState } from "react";


const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2% 5%;
`;

const StyledRsvpResults = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const StyledResult = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 29%;
    justify-content: space-around;
    margin: 2%;
    padding: 5%;
    border: 2px solid #333333;
    border-radius: 10%;
`;

const Rsvpresults = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [filterTypes, setFilterTypes] = useState([false, false, false, false]); //yes, no, kid, dietary

    const getResults = async () => {
      const res = await fetch("/api/results-api");
      const json = await res.json();
      setData(json?.results);
      setFilter(json?.results);
    }

    const filterResults = (yes, no, kid, dietary) => {
      let temp = [...data]

      if(yes) {
       temp = temp.filter((res) => {
         return res.response == "yes"
       }) 
      }

      if(no) {
       temp = temp.filter((res) => {
         return res.response == "no"
       }) 
      }

      if(kid) {
       temp = temp.filter((res) => {
         return res.kid == true
       }) 
      }

      if(dietary) {
       temp = temp.filter((res) => {
         return res.dietary != ""
       }) 
      }

      setFilter(temp);
    }

    let form = [];
    for (let i = 0; i < filter?.length; i++) {
        
        let firstname = filter[i].firstname
        let lastname = filter[i].lastname
        let response = filter[i].response
        let kid = filter[i].kid
        let dietary = filter[i].dietary
        let email = filter[i].email
        let party = filter[i].partysize

      form.push(
          <StyledResult key={i}>
            <h1>{firstname} {lastname}</h1>
            <h2>Coming: {response}</h2>
            <p>Dietary: {dietary}</p>
            <p>Kid: { kid ? "yes" : "no"}</p>
            <p>Group email: {email}</p>
            <p>Group size: {party}</p>
          </StyledResult>
      )
    }
    return(
        <>
            <Head>
            <title>E&D</title>
            <link rel="icon" href="../static/ring.ico" />
            </Head>
            
            <StyledIntro>
              <h1>Number of Responses: {filter?.length || 0}</h1>
              <RSVPResultsButton onClick={() => {
                getResults()
              }}> Get Results </RSVPResultsButton>
              <label for="yesfilter">Responded yes:</label>
              <input
                type="checkbox"
                id="yesfilter"
                name="yesfilter"
                autoComplete="off"
                onChange={() => { 
                  filterResults(!filterTypes[0], filterTypes[1], filterTypes[2], filterTypes[3])
                  setFilterTypes([!filterTypes[0], filterTypes[1], filterTypes[2], filterTypes[3]])
                }}
              />
              <label for="nofilter">Responded no:</label>
              <input
                type="checkbox"
                id="nofilter"
                name="nofilter"
                autoComplete="off"
                onChange={() => { 
                  filterResults(filterTypes[0], !filterTypes[1], filterTypes[2], filterTypes[3])
                  setFilterTypes([filterTypes[0], !filterTypes[1], filterTypes[2], filterTypes[3]])
                }}
              />
              <label for="kidfilter">Is a kid:</label>
              <input
                type="checkbox"
                id="kidfilter"
                name="kidfilter"
                autoComplete="off"
                onChange={() => { 
                  filterResults(filterTypes[0], filterTypes[1], !filterTypes[2], filterTypes[3])
                  setFilterTypes([filterTypes[0], filterTypes[1], !filterTypes[2], filterTypes[3]])
                }}
              />
              <label for="dietary">Has dietary restrictions:</label>
              <input
                type="checkbox"
                id="dietary"
                name="dietary"
                autoComplete="off"
                onChange={() => { 
                  filterResults(filterTypes[0], filterTypes[1], filterTypes[2], !filterTypes[3])
                  setFilterTypes([filterTypes[0], filterTypes[1], filterTypes[2], !filterTypes[3]])
                }}
              />
            </StyledIntro>
            <StyledRsvpResults>
              
              <style jsx global>{`
                  body {
                  margin: 0;
                  }
              `}</style>
              
              {form}
            </StyledRsvpResults>
        </>
    );
}

export default Rsvpresults;
