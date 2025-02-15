import Head from "next/head";
import Layout from "../Components/Layout";
import Hero from "../Components/Hero";
import css from '../styles/Home.module.css'
import Skills from "../Components/Skills";
import {client} from '../lib/client'
import Menu from "../Components/Menu";

export default function Home({pizzas}) {

  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>PIZO</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        <main>
        <Hero/>
        <Skills/>
        <Menu pizzas={pizzas}/>
        </main>
      </div>
      </Layout>
  );
}

export const getServerSideProps= async()=>{
  const query='*[_type == "pizza"]';
  const pizzas= await client.fetch(query);
  return{
    props: {
      pizzas
    },
  }
}

