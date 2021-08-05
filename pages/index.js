import Head from 'next/head';
import Header from '../Components/Header';
import Jambotron from '../Components/Jambotron';
import SmallCard from '../Components/SmallCard';

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
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {/*pull some data from a server - API endpoints */}

              {exploreData?.map(({img, distance, location}) => (
                <SmallCard
                key={img} 
                img={img}
                distance={distance}
                location={location}
                />
                ))
              }
          
          </div>      
        </section>
     </main>  
    </div>
  );
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
