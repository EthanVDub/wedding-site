import RSVPStepper from "../components/rsvp-stepper";
import Head from "next/head";

const Rsvp = () => (
  <>
    <Head>
      <title>E&D</title>
      <link rel="icon" href="../static/ring.ico" />
    </Head>
    <RSVPStepper>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </RSVPStepper>
  </>
);

export default Rsvp;
