import {useCallback, useEffect, useRef, useState} from "react";
import ArtistCard from "../components/ArtistCard";
import Loading from "../components/Loading";
import Link from "next/link";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const [ limit, setLimit ] = useState( 0 );
  const { loading, error, list } = useFetch( limit );
  const [ lazy, setLazy ] = useState( loading )
  const loader = useRef( null );
  
  const handleObserver = useCallback( (entries) => {
    setLazy(true)
    setLimit( prevState => prevState + 10 )
    setLazy(false)
  },[ ] )
  
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
  
    const observer = new IntersectionObserver( handleObserver, option );
    console.log(loader.current)
    if ( loader.current ) observer.observe( loader.current );
  }, [ handleObserver ]);
  
  return (
    <>
      <h1 className="text-center my-5 text-white text-5xl">Last Fm best artists list</h1>
      <div className="w-11/12 mx-auto flex flex-wrap gap-5 justify-center px-10">
        {  list?.artists?.artist?.map( ( artists, index ) => {
            return(
          lazy ?
            <Loading/> : artists.mbid ?
              <Link href={{
                pathname : `/artist/${ artists.mbid }`,
                query: {
                  id: artists.mbid,
                  name: artists.name
                }
              }}>
                <ArtistCard
                  key={ index }
                  artistName={ artists.name }
                  image={ artists.image[4]['#text'] }
                  listeners= { artists.listeners }
                  playCount= { artists.playcount }
                />
              </Link>
              : ''
        )
        } )}
      </div>
      { error && <p>Error!</p> }
      <div ref={ loader } />
    </>
  )
};