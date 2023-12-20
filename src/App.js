import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="main">
        <header>
            <div className="head">
                <div className="logo">  
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "transparent", color:"whitesmoke", height:"40px", width:"100px", fontSize:"18px", marginTop:"20px"}}>
                        Translate
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">English</a></li>
                        <li><a className="dropdown-item" href="#">Hindi</a></li>
                        <li><a className="dropdown-item" href="#">chindi</a></li>
                    </ul>
                    <button className="sign_in" type="button" style={{backgroundColor: "red", fontSize:"18px", marginTop:"20px"}}>
                        Sign in
                    </button>
                </div>
            </div>
        </header>
    </div>
  );
}

export default App;
