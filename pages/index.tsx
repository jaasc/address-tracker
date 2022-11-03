import dynamic from 'next/dynamic';
import Head from 'next/head';
import Search from "../components/search";

const geoKey = process.env.NEXT_PUBLIC_GEO_KEY

export default function Home({detail, ip}:any) {
  const MapWithNoSSR = dynamic(() => import("../components/map"), {
    ssr: false
  });

  console.log(ip)

  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
      </Head>
      <main className="font-rubik">
        <Search detail={detail}/>
        <div id="map" className="h-[80vh] w-full z-0 relative">
          <MapWithNoSSR/>
        </div>
      </main>
    </>
  )
}

Home.getInitialProps = async ({ req }: any) => {
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${geoKey}&ip=${ip}`)
  const data =  await res.json()

  return { ip, detail: data };
};

