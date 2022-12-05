import Button from "../Button";

const AlbumListItem = ({ listData, index }) => {
  return(
    <li className={`${ index !== 0 && 'border-t' } border-purple-300 py-2 flex justify-between`}>
      <div className="flex items-center">
        <span className="mx-2 w-10">
          <img
            src={ listData?.image[0]['#text'] ? listData?.image[0]['#text'] : 'https://i.pinimg.com/736x/d7/29/af/d729afcf9e6f850c1db1a60222978a2f--chi-chi-small-dogs.jpg'}
            alt="artist list last fm"
          />
        </span>
        <span className="flex flex-col">
            <span className="text-lg">{ listData?.name }</span>
            <span className="text-xs">playcount :{ listData?.playcount }</span>
        </span>
      </div>
      <Button url={listData?.url}></Button>
    </li>
  )
}

export default AlbumListItem;