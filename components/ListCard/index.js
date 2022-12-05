import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "../Loading";
import AlbumListItem from "../AlbumListItem";
import TrackListItem from "../TrackListItem";

const ListCard = ({ dataUri, listTitle, theme, dataType, type }) => {
  const [ dataList, setDataList ] = useState([]);
  const [ loading, setLoading ] = useState(false );
  
  useEffect(() => {
    dataUri && (
      (
        async () => {
          setLoading( true );
      
          try {
            const res = await axios.get( dataUri );
        
            if( res.status !== 200 ) {
              alert( res.statusText );
              setLoading( false );
            }
        
            const dataObj = res.data;
            setDataList( dataObj[dataType][type] );
            setLoading( false );
        
          } catch (e) {
            alert( e.message )
          }
        }
      )()
    )
  },[]);
  
  const getRender = (data,index) => type === 'album' ? <AlbumListItem listData={data} index={index}/> : <TrackListItem listData={data} index={index}/>;
  
  return(
    <div className="border border-purple-500 w-full md:w-1/2 p-5">
      <h2 className={`${theme === 'dark' ? 'text-purple-500' : theme === 'light' ? 'text-purple-700' : '' } text-3xl mb-2`}>{ listTitle }</h2>
      <ul className="bg-white rounded p-3">
        {
          loading ?
            <Loading/> : (
              <>
                {
                  dataList.map( (data,index) => getRender( data, index ) )
                }
              </>
            )
        }
      </ul>
    </div>
  )
}

export default ListCard;