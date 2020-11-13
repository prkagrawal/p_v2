import Head from "next/head";
import Layout from "../components/Layout/Layout";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <h1>Welcome</h1>
      </div>
    </Layout>
  );
}