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
        
        <img src="/dadgifsite.gif" alt="Dad NFTs" class="center"/>
        <p className="description">
        <h5>A Multi-chain Community</h5>
        Join the <a href="https://discord.gg/MBxGXSuGyp">Discord</a>
        </p>
      </main>
      <Footer />
    </div>
  )
}
