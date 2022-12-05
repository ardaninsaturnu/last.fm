import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "../Loading";
import Button from "../Button";
import AlbumListItem from "../AlbumListItem";

const ListCard = ({ dataUri, listTitle, theme }) => {
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
        
            const { topalbums } = res.data;
            setDataList( topalbums.album );
            console.log(topalbums, topalbums.album )
            setLoading( false );
        
          } catch (e) {
            alert( e.message )
          }
        }
      )()
    )
  },[]);
  
  return(
    <div className="border border-purple-500 w-full md:w-1/2 p-5">
      <h2 className={`${theme === 'dark' ? 'text-purple-500' : theme === 'light' ? 'text-purple-700' : '' } text-3xl mb-2`}>{ listTitle }</h2>
      <ul className="bg-white rounded p-3">
        {
          loading ?
            <Loading/> : (
              <>
                {
                  dataList.map( ( data, index ) => {
                    return(
                      <AlbumListItem key={index} listData={data} index={index}/>
                    )
                  })
                }
              </>
            )
        }
      </ul>
    </div>
  )
}

export default ListCard;