import styled from "styled-components";
import Head from "next/head";

import { useRouter } from 'next/router';



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

export async function getStaticProps(context) {
  const res = await fetch(process.env.BASE_URL + "/api/results-api");
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}

const Rsvpresults = ({data}) => {
    let form = []
    
    for (let i = 0; i < data.results.length; i++) {
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
            <h1>Number of Responses: {data.results.length}</h1>
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
