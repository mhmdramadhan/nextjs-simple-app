import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="top-bar-info list-inline-item pl-0 mb-0">
                <li className="list-inline-item">
                  <h3 className="text-white">DISKOMINFO KOTA BOGOR</h3>
                </li>
                <li className="list-inline-item">
                  <i className="icofont-location-pin mr-2"></i>Address Jl. Ir.
                  H. Juanda No 10 Bogor{' '}
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                <a href="tel:+23-345-67890">
                  <span>20022</span>
                  <br />
                  <span className="h4">Time in Here</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navigation"
        id="navbar"
        style={{ background: '#255eb1' }}
      >
        <div className="container">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarmain"
            aria-controls="navbarmain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="">
                  Beranda
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white dropdown-toggle"
                  href="#"
                  id="dropdown02"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Profil <i className="icofont-thin-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="{{ route('profile', $profile['category_id']) }}"
                    >
                      Nav1
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="">
                  Perencanaan
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white dropdown-toggle"
                  href="#"
                  id="dropdown02"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Konten <i className="icofont-thin-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                  <li>
                    <Link className="dropdown-item" to="">
                      Nav1
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="">
                  Dokumen
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white dropdown-toggle"
                  href="#"
                  id="dropdown03"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Galeri <i className="icofont-thin-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                  <li>
                    <Link className="dropdown-item" to="">
                      Foto Kegiatan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="">
                      Video
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="">
                  kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
