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
        <img src="/daddaologo.svg" alt="Dad DAO logo" class="imagelarge"/>
        <br></br>
        <h1>A Learning Community and DApp Incubator</h1>
        <br></br>
        <a href="https://discord.gg/MBxGXSuGyp">Join the Discord</a>
        <br></br>
        <a href="https://docs.google.com/document/d/1f0jsi-Cu2qfEliEvdbHGi9t957cE1C4tAYgXhRqC1mw/edit">Project Directory</a>
        <br></br>
        <img src="/dadgifsite.gif" alt="Dad NFTs" class="center"/>
        <br></br>
        <br></br>
        <img src="/builtonalgo.svg" alt="Dad DAO Quote" class="center"/>
        <br></br>
      </main>
      <Footer />
    </div>
  )
}