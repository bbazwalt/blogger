import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("mytoken");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary-subtle">
      <div className="container">
        <Link
          to={token ? "/articles" : "/"}
          className="navbar-brand text-style"
        >
          Blogger
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {token ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/articles"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/add" className="nav-link">
                    Add Article
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link"
                    onClick={() => localStorage.clear()}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/register" className="nav-link ">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
