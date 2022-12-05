const Button = ({size, children, url }) => {
  return(
    <button
      onClick={ () => window.open(url , '_blank') }
      className={` bg-purple-200 rounded-xl font-bold text-white px-3 ${size} `}
    >
    {children}
  </button>)
}

export default Button;