import {useEffect, useState} from "react";
import axios from "axios";
import ArtistCard from "../components/ArtistCard";
import Loading from "../components/Loading";
import Link from "next/link";

export default function Home() {
  const [ artistsData, setArtistsData ] = useState( null );
  const [ loading, setLoading ] = useState( false );
  
  useEffect(() => {
    (
      async () => {
        setLoading( true );
        
        try {
          const res = await axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=b53230ab06865d451bea8e5aca7ea5e7&format=json');
          
          if( res.status !== 200 ) {
            alert( res.statusText );
            setLoading( false );
          }
          
          const { artists } = res.data;
          setArtistsData( artists );
          setLoading( false );
          
        } catch (e) {
          alert( e.message )
        }
      }
    )()
  },[]);
  
  return (
      <div className="w-11/12 mx-auto flex flex-wrap gap-5 justify-center px-10">
        { artistsData?.artist.map( ( artist, index ) => {
          return loading ?
            <Loading/> : artist.mbid ?
              <Link href={{
                pathname : `/artist/${ artist.mbid }`,
                query: {
                  id: artist.mbid,
                  name: artist.name
                }
              }}>
                <ArtistCard
                  key={ index }
                  artistName={ artist.name }
                  image={ artist.image[2]['#text'] }
                  listeners= { artist.listeners }
                  playCount= { artist.playcount }
                />
              </Link>
              : ''
        }) }
      </div>
  )
}