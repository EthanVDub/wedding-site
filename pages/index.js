import Main from "../components/main";
import Head from "next/head";
import ring from "../static/ring.ico";

const Index = () => (
  <>
    <Head>
      <title>E&D</title>
      <link rel="icon" href={ring} />
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
