function Nav() {


  return (
    <>
      <nav
        aria-label="Primary Navigation"
        className="bg-black w-screen mx-auto flex items-center justify-between px-20 py-5"
      >
        <div className="w-full flex items-center justify-center space-x-10">
          <a className="flex-shrink-0" href="#">
            <img
              alt="FERMATA logo in black Montserrat font"
              className="block w-40 h-20 rounded-full object-cover"
              height="30"
              src="http://localhost:5173/logo.jpg"
              width="140"
            />
          </a>

          {/* Nav Items */}
          <ul className='flex flex-row gap-10 fontt-semibold'>
            <li><a href="/" >Home</a></li>
            <li><a href="/about" >About</a></li>
            <li><a href="/detect" >Detect</a></li>
            <li><a href="/login" >Login</a></li>
            <li><a href="/signup" >Signup</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
