import {useRouter} from "next/router";
import ListCard from "../../components/ListCard";

const Artist = () => {
  const router = useRouter();
  const { id, name } = router.query;
  
  return(
    <>
      <div className="w-full flex justify-center my-2">
        <h1 className="text-5xl text-white mt-5">{ name }</h1>
      </div>
      <div className="flex gap-5 p-10">
        <ListCard dataType="topalbums" type="album" dataUri= {`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=b53230ab06865d451bea8e5aca7ea5e7&format=json`}/>
        <ListCard dataType="toptracks" type="track" dataUri={`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=b53230ab06865d451bea8e5aca7ea5e7&format=json`}/>
      </div>
    </>
  )
}

export default Artist;