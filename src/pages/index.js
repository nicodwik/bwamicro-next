import Head from 'next/head'
import Link from 'next/link'
import axios from "src/configs/axios"
import Circle from 'public/images/circle-accent-1.svg'
import Header from 'src/parts/Header'
import Hero from 'src/parts/Hero'
import Client from 'src/parts/Client'

function Home(props) {
  
  return (
    <>
      <Head>
        <title>BWAMICRO</title>
        <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`} />
      </Head>
      <main>
        <section className="header-clipping pt-10">
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="sunshine"></div>
          <div className="container mx-auto">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>
        <section className='container mx-auto pt-24'>
          <Client></Client>
        </section>
      </main>
    </>
  )
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get('/courses')
    return {data: data.data.data}
  } catch (error) {
    return error
  }
}

export default Home