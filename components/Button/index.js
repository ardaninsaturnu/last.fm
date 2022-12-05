const Button = ({size, children, url }) => {
  return(
    <button
      onClick={ () => window.open(url , '_blank') }
      className={` bg-red-400 font-bold text-white px-6 py-2 ${size} `}
    >
    {children}
  </button>)
}

export default Button;