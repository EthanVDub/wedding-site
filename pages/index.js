import Main from "../components/main";
import Head from "next/head";

const Index = () => (
  <>
    <Head>
      <title>E&D</title>
      <link rel="icon" href="/ring.ico" />
    </Head>
    <Main>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </Main>
  </>
);

export default Index;
