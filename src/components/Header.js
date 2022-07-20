import logo from "../assets/images/logo.svg"

function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="header-left">
          <img src={logo} alt="" />
          <p className="header-title">MemeGenerator</p>
        </div>
        <div>
          <p className="font-medium">React Course - Project 3</p>
        </div>
      </div>
    </header>
  )
}

export default Header
