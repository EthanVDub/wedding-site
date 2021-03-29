import styled from "styled-components";
import Head from "next/head";
import RSVPButton from "../components/rsvp-button";

import { useRouter } from 'next/router';
import { useState } from "react";

const StyledRsvpResults = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const StyledResult = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 2px solid black;
`;

const Rsvpresults = () => {
    const [data, setData] = useState([]);

    const getResults = async () => {
      const res = await fetch("/api/results-api");
      const json = await res.json();
      setData(json);
    }

    let form = [];
    
    for (let i = 0; i < data.results?.length; i++) {
        let firstname = data.results[i].firstname
        let lastname = data.results[i].lastname
        let response = data.results[i].response
        let kid = data.results[i].kid
        let dietary = data.results[i].dietary
        let email = data.results[i].email
        let party = data.results[i].partysize

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
            <StyledRsvpResults>
            <RSVPButton onClick={() => {
              getResults()
            }}> Get Results </RSVPButton>
            <h1>Number of Responses: {data.results?.length || 0}</h1>
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
