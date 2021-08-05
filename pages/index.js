import Head from 'next/head';
import Header from '../Components/Header';
import Jambotron from '../Components/Jambotron'

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone V2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     { /*Header section */ }
     <Header />
     { /*Banner section */ }
     <Jambotron />
     { /*Main section*/ }
     <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-5">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/*pull some data from a server - API endpoints */}

          {exploreData?.map(item => (<h1>{item.location}</h1>))}
        
        </section>
     
     </main>

      
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) =>res.json()
  );

  return {
    props: {
      exploreData
    }
  }
}
