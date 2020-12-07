import Head from "next/head";
import Layout from "../components/Layout/Layout";
// import styles from '../styles/Home.module.css'

import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

export default function Index() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Prince Agrawal - Full Stack Web Developer</title>
        </Head>

        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}
