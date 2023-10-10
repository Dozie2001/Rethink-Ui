import './App.css';

function App() {
  return (
    <div className="parent">
      <nav className="sideBar">
        <div className="sideBar-1">
          <div className="logo">

          </div>
          <div className="home"></div>
          <div className="toggle"></div>
        </div>
        <div className="sideBar-2">
          <div className="settings"></div>
          <div className="log-out"></div>
        </div>

      </nav>
      <div className="main">
        <div className='header'></div>
        <div className="body">
          <div className="body-header"></div>
          <div className="body-header-sub"></div>
          <div className="body-paragraph"></div>
        </div>        
      </div>
    </div>
  );
}

export default App;
