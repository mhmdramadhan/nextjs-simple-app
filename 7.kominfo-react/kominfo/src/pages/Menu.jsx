import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faEnvelope,
  faFilePdf,
  faNewspaper,
  faRss,
  faTreeCity,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

// css
import '../assets/css/animate.css';
import '../assets/css/bootstrap.css';
import '../assets/css/color.css';
import '../assets/css/flaticon.css';
import '../assets/css/font-awesome-all.css';
import '../assets/css/jquery.fancybox.min.css';
import '../assets/css/nice-select.css';
import '../assets/css/owl.css';
import '../assets/css/responsive.css';
import '../assets/css/rtl.css';
import '../assets/css/style.css';
import './Menu.css';
// end css

import background1 from '../assets/images/shape/shape-1.png';
import background2 from '../assets/images/shape/shape-2.png';
import { useState } from 'react';
import Modals from '../components/Modal';

const Menu = () => {
  const [modalPelayanan, setModalPelayanan] = useState(false);

  return (
    <section className="category-section centred sec-pad" id="category">
      <div className="auto-container">
        <div className="sec-title">
          <h2 style={{ color: '#253c68' }}>DISKOMINFO KOTA BOGOR</h2>
        </div>
        <div className="inner-content clearfix">
          <div className="row d-flex align-items-center justify-content-center">
            <div
              className="category-block-one wow fadeInDown animated animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <Link to="https://tnd.kotabogor.go.id/" target="_blank">
                <div className="inner-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{ backgroundImage: `url(${background1})` }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{ backgroundImage: `url(${background2})` }}
                    ></div>
                  </div>
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <h5>TND</h5>
                </div>
              </Link>
            </div>
            <div
              className="category-block-one wow fadeInDown animated animated"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <a onClick={() => setModalPelayanan(true)}>
                <div className="inner-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{ backgroundImage: `url(${background1})` }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{ backgroundImage: `url(${background2})` }}
                    ></div>
                  </div>
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faUserGroup} />
                  </div>
                  <h5>LAYANAN</h5>
                </div>
              </a>
            </div>
            <div
              className="category-block-one wow fadeInDown animated animated"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link to="https://smartcity.kotabogor.go.id/" target="_blank">
                <div className="inner-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{ backgroundImage: `url(${background1})` }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{ backgroundImage: `url(${background2})` }}
                    ></div>
                  </div>
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faTreeCity} />
                  </div>
                  <h5>SMART CITY</h5>
                </div>
              </Link>
            </div>
            <div
              className="category-block-one wow fadeInDown animated animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <Link to="">
                <div className="inner-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{ backgroundImage: `url(${background1})` }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{ backgroundImage: `url(${background2})` }}
                    ></div>
                  </div>
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faFilePdf} />
                  </div>
                  <h5>CEK KEASLIAN TANDA TANGAN ELEKTRONIK</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="collapse row mt-2 mb-4" id="collapseExample">
            <div className="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div
              className="category-block-one wow fadeInDown animated animated"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <Link to="">
                <div className="inner-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{ backgroundImage: `url(${background1})` }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{ backgroundImage: `url(${background2})` }}
                    ></div>
                  </div>
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faFilePdf} />
                  </div>
                  <h5>DOKUMEN</h5>
                </div>
              </Link>
            </div>
            <div
              className="category-block-one wow fadeInUp animated animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <Link to="">
                <div className="inner-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{ backgroundImage: `url(${background1})` }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{ backgroundImage: `url(${background2})` }}
                    ></div>
                  </div>
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faNewspaper} />
                  </div>
                  <h5>BERITA</h5>
                </div>
              </Link>
            </div>
            <div
              className="category-block-one wow fadeInUp animated animated"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <Link to="" target="_blank">
                <div className="inner-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{ backgroundImage: `url(${background1})` }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{ backgroundImage: `url(${background2})` }}
                    ></div>
                  </div>
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faRss} />
                  </div>
                  <h5>MEDSOS</h5>
                </div>
              </Link>
            </div>
            <div
              className="category-block-one wow fadeInUp animated animated"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link to="" target="_blank">
                <div className="inner-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{ backgroundImage: `url(${background1})` }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{ backgroundImage: `url(${background2})` }}
                    ></div>
                  </div>
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faAddressBook} />
                  </div>
                  <h5>KONTAK KAMI</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-12" id="mains">
            <div className="more-btn">
              <Link to="/beranda" className="theme-btn-one">
                Tampilan Penuh
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modals show={modalPelayanan} onHide={() => setModalPelayanan(false)} />
    </section>
  );
};

export default Menu;
