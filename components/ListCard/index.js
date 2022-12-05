import {useEffect, useState} from "react";
import axios from "axios";

const ListCard = ({dataUri}) => {
  const [ dataList, setDataList ] = useState([]);
  const [ loading, setLoading ] = useState(false );
  
  useEffect(() => {
    (
      async () => {
        setLoading( true );
        
        try {
          const res = await axios.get( dataUri );
          
          if( res.status !== 200 ) {
            alert( res.statusText );
            setLoading( false );
          }
          
          const { artists } = res.data;
          setDataList( artists );
          setLoading( false );
          
        } catch (e) {
          alert( e.message )
        }
      }
    )()
  },[]);
  
  return(
    <></>
  )
}