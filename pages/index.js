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
        <h3>A~ Multi-chain Community Incubator</h3>
        <h5>"A pension for Dads."</h5>
        <h7>Built on Algorand</h7>
        <img src="/dadgifsite.gif" alt="Dad NFTs" class="center"/>
        <p className="description">
        Join the <a href="https://discord.gg/MBxGXSuGyp">Discord</a>
        </p>
      </main>
      <Footer />
    </div>
  )
}
