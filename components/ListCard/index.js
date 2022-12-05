import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "../Loading";
import Button from "../Button";

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
                      <li className={`${ index !== 0 && 'border-t' } border-purple-300 py-2 flex justify-between`}>
                        <div className="flex items-center">
                          <span className="mx-2 w-10">
                            <img src={ data.image[0]['#text'] ? data.image[0]['#text'] : 'https://i.pinimg.com/736x/d7/29/af/d729afcf9e6f850c1db1a60222978a2f--chi-chi-small-dogs.jpg'}/>
                          </span>
                          <span className="flex flex-col">
                            <span className="text-lg">{ data.name }</span>
                            <span className="text-xs">playcount :{ data.playcount }</span>
                        </span>
                        </div>
                        <Button url={data.url}></Button>
                      </li>
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