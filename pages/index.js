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
        <img src="/dadgifsite.png" alt="Dad NFTs" class="center"/>
        <p className="description">
        Get started by joining the <a href="https://discord.gg/MBxGXSuGyp">Discord</a>
        </p>

        <h1>Core Team</h1>
        <img src="/dee.png" alt="Dee" class="coreteam"/>
        <img src="/corey.png" alt="Corey" class="coreteam"/>
        <img src="/broke.png" alt="Broke" class="coreteam"/>
      </main>

      <Footer />
    </div>
  )
}
