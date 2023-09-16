

function Nav({ text, src, handleClick }) {
  
  return (
    <div onClick={handleClick}
    className='hover:bg-rose-700 bg-opacity-10 flex justify-center items-center p-4 gap-5'>
        <img src={src} alt={text} />
        {text}
    </div>
  )
}

export default Nav