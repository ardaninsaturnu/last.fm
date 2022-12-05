import {useRouter} from "next/router";
import {useEffect} from "react";
import axios from "axios";
import ListCard from "../../components/ListCard";

const Artist = () => {
  const router = useRouter();
  const { id, name } = router.query;
  
  useEffect(() => {
    
    console.log(router)
    
  },[])
  
  return(
    <>
      <div className="w-full flex justify-center my-2">
        <h1 className="text-5xl text-white">{ name }</h1>
      </div>
      <div className="flex gap-5 p-10">
        <ListCard dataUri= {`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=b53230ab06865d451bea8e5aca7ea5e7&format=json`}/>
        <ListCard/>
      </div>
    </>
  )
}

export default Artist;