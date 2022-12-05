import {useRouter} from "next/router";
import {useEffect} from "react";
import axios from "axios";

const Artist = () => {
  const router = useRouter();
  
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
  
  return(
    <>Detaill</>
  )
}

export default Artist;