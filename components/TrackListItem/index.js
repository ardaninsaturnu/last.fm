import Button from "../Button";

const TrackListItem = ({ listData, index }) => {
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
            <span className="text-lg font-medium">{ listData?.name }</span>
            <span className="flex gap-2">
                <span className="text-xs">playcount :{ listData?.playcount }</span>
                <span className="text-xs">listeners :{ listData?.listeners }</span>
            </span>
        </span>
      </div>
      <Button url={listData?.url}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </Button>
    </li>
  )
}

export default TrackListItem;