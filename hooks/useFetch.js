import {useCallback, useEffect, useState} from "react";
import axios from "axios";

function useFetch( limit, page ){
  const [ loading,setLoading ] = useState( true );
  const [ error,setError ] = useState( false );
  const [ list, setList ] = useState( [] );
  
  const fetchArtist = useCallback( async limit => {
    setLoading( true )
    try {
      await setError( false );
      const res = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=b53230ab06865d451bea8e5aca7ea5e7&limit=${limit}&format=json`);
      await setList( prevState => res.data );
      setLoading( false );
      
    } catch ( error ) {
      setError( error );
    }
    
  },[ limit ]);
  
  useEffect( () => {
    fetchArtist( limit );
  }, [ limit, fetchArtist ]);
  
  return { loading, error, list };
  
}

export default useFetch;