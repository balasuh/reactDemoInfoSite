import reactIconLarge from '../assets/react-icon-large.png'

function Main() {
    return (
      <>
        <main className="content-section">  
          <h2 className="content-header">
            Fun facts about Street Science
          </h2>
          <img class="react-large-image" src={reactIconLarge} alt="A large react icon"/>
          <ul className="content-unordered-list">
            <li class="li"><span className="list-span">Was first released in 2013</span></li>
            <li class="li"><span className="list-span">Was originally created by Jordan Walke</span></li>
            <li class="li"><span className="list-span">Has well over 100K stars on Github</span></li>
            <li class="li"><span className="list-span">Is maintained by Facebook</span></li>
            <li class="li"><span className="list-span">Powers thousands of enterprise apps, including mobile apps</span></li>
          </ul>
        </main>
    </>
    )
  }

  export default Main;