import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const NavBar = (props) => {
const navigate = useNavigate()
  const logout = async () => {
  try {
    const res = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include"
    }); 
    if (!res.status === 200) { 
      const error = new Error(res.error);
      throw error;
    }else{
      navigate('/')
      props.setUser(false);
    }
  } catch (err) {
    console.log(err);
  }
};
  function handleCountry(e) {
    navigate('/'); 
    props.setCountry(e.target.value);
  } 
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MediaMave
          </Link>
          <button
            className="navbar-toggler" 
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business" disable>
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" disable>
                  Entertainment
                </Link>
              </li>
              {/* <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <div className="country">
              
              <select
                class="form-control form-control-sm bg-dark outline-white text-light"
                defaultValue={'in'}
                onChange={handleCountry}
              >
                <option value="in">india</option>
                <option value="us">united States</option>
                <option value="fr">France</option>
                <option value="cn">canada</option>
                <option value="nz">New Zealand</option>
                <option value="ru">Russia</option>
                <option value="ae">UAE</option>
                
              </select> 
            </div>
            <div className="d-flex">
              

              {props.user?
             
              <Link className="nav-link" to={"/logout"}>
              <button
                className="btn btn-outline-success mx-2 btn-outline-light"
                type="submit"
                onClick={logout}

              >
                Logout
              </button>
            </Link> :
            <Link className="nav-link" to={"/login"}>
            <button
              className="btn btn-outline-success mx-2 btn-outline-light"
              type="submit"
            > 
              Login
            </button>
          </Link>
              }
              
              <Link className="nav-link" to={"/register"}>
                <button
                  className="btn btn-outline-success mx-2 btn-outline-light"
                  type="submit"
                >
                  Register
                </button>
              </Link>
    
              
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
