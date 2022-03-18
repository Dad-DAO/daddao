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
        <img src="/daddaowhole.PNG" alt="Dad DAO logo" class="imagelarge"/>
        <br></br>
        <img src="/dadgifsite.gif" alt="Dad NFTs" class="center"/>
        <br></br>
        <img src="/quote.png" alt="Dad DAO Quote" class="imagemedium"/>
        <br></br>
        
        <br></br>
        <a href="https://discord.gg/MBxGXSuGyp">Join the Discord</a>
        <br></br>
        <a href="https://docs.google.com/document/d/1f0jsi-Cu2qfEliEvdbHGi9t957cE1C4tAYgXhRqC1mw/edit">Project Directory</a>
      </main>
      <Footer />
    </div>
  )
}