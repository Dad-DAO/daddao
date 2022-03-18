import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DAD DAO</title>
        <link rel="icon" href="/santahat.ico" />
      </Head>
      <main>
        <Header title="DAD DAO" />
        <h3>Community Learning and DApp Incubation</h3>
        <h5>Built on Algorand</h5>
        <img src="/dadgifsite.gif" alt="Dad NFTs" class="center"/>
        <br></br>
        <a href="https://discord.gg/MBxGXSuGyp">Join the Discord</a>
        <br></br>
        <a href="https://docs.google.com/document/d/1f0jsi-Cu2qfEliEvdbHGi9t957cE1C4tAYgXhRqC1mw/edit">Project Directory</a>
      </main>
      <Footer />
    </div>
  )
}
