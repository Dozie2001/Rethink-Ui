import './App.css';
import './index.css'
function App() {
  return (
    
    <div className="parent">
      <nav className="sideBar">
        <div className="sideBar-close">
          <div className="sideBar-1">
            <div className="logo">
              <img src="../images/side-bar/logo.png" alt="Logo" />
            </div>
            <div className="home">
              <object data='../images/side-bar/home.svg'></object>
            </div>
            <div className="toggle">
              <object data='../images/side-bar/Contentview.svg'></object>
            </div>
          </div>
          <div className="sideBar-2">
            <div className="settings">
              <object data='../images/side-bar/settings.svg'></object>
            </div>
            <div className="log-out">
              <object data='../images/side-bar/log-out.svg'></object>
            </div>
            </div>
        </div>
      </nav>
      <div className="main">
        <div className='header'>
          <div className="search">
            <div className="search-Bar">
              <input type="text" placeholder="Search for templates, projects, etc"></input>
            </div>
            <div className="top-buttons">
              <button>Create Content</button>
              <button className="coin">

                <span>20</span>
              </button>
            </div>
          </div>
          <div className="profile">
            <span className="profile-Inner"><button>Calendaar</button></span>
            <span className="profile-Inner"><button>Notification</button></span>
            <span className="profile-Inner"><button>avatarProfile Page</button></span>
          </div>
        </div>
        <div className="body">
          <div className="body-header">
            <div className="body-header-1">
              <h1><b>Hey James!</b></h1>
              <p>Lets create something awesome today ✨💫</p>
              <button>Start Creating</button>
            </div>
            <div className="body-header-2">
            <p>Zara Ventures</p>
              <div>
               <p>You should have more engagement by 6pm today, try posting then.  📆</p>
               <p>Try our SEO optimization tool to increase engagement by 40% 🔥</p>
              </div>
            </div>
          </div>
          <div className="body-header-sub"></div>
          <h3>Most Popular Tools</h3>
          <p>Explore the trending tools to create your copies fast</p>
          <div className="body-paragraph">
            <p><b>Social media</b></p>
            <div classname="social-media">
              <div>
                <div></div>
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                 <p></p>
                  <p></p>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <p><b>Social media</b></p>
            <div className="social-media social-media-1">
              
              <div>
                <div></div>
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>

          </div>
        </div>        
      </div>
    </div>
  );
}

export default App;
