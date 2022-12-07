const ArtistCard = ({ listeners = 0, playCount = 0, image = 'https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png', artistName = "Unknown Player", theme = 'dark' }) => {
  
  return(
    <>
      <div
        className={`
        flex-col
        ${ theme === 'dark' ? 'text-purple-300' : theme === 'light' ? 'text-purple-700' : '' }
        border
        border-purple-500
        rounded-lg
        ${ theme === 'dark' ? 'bg-gray-900' : theme === 'light' ? 'bg-gray-200' : '' }
        w-80
        box-border
        p-3
        `}>
        <div className="w-full flex items-center">
          <img src={ image } alt='artist-card'/>
        </div>
        <div className="ml-5 flex-1">
          <div>
            <span className="text-purple-400">artist</span>
            <hr className={`h-1 ${ theme === 'dark' ? 'border-purple-500' : theme === 'light' ? 'border-purple-700' : '' }`}/>
            <div className="text-2xl text-purple-700">{ artistName }</div>
          </div>
          <div className="text-xs">
            listeners : <span className="text-xs text-purple-400">{ listeners }</span>
          </div>
          <div className="text-xs">
            play-count: <span className="text-xs text-purple-400">{ playCount }</span>
          </div>
        </div>
      </div>
    </>
  )
};

export default ArtistCard;