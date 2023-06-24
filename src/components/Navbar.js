import streetScienceLogo from '../assets/streetScienceLogo.png'

function Navbar() {
    return (
      <nav className="navbar">
        <div className="nav-item logo">
          <img src={streetScienceLogo} className="App-logo-2" alt="logo" />
          <h1 className="title">Street Science Facts</h1>
        </div>
        <div className="nav-item header">
          <h2>React Project - 1</h2>
        </div>
      </nav>
    )
  }
  
  export default Navbar;