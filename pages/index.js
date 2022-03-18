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
        <img src="/daddaologo.svg" alt="Dad DAO logo" class="logo"/>
        <h3 class="slogan">A NFT-Gated Learning Community and DApp Incubator</h3>
        <img src="/builtonalgo.svg" alt="Dad DAO Quote" class="imagesmall"/>
        <br></br>
        <a href="https://discord.gg/MBxGXSuGyp">Join the Discord</a>
        <br></br>
        <a href="https://docs.google.com/document/d/1f0jsi-Cu2qfEliEvdbHGi9t957cE1C4tAYgXhRqC1mw/edit">Project Directory</a>
        <br></br>
        <img src="/newdadgif.gif" alt="Dad NFTs" class="imagemedium"/>
      </main>
      <Footer />
    </div>
  )
}