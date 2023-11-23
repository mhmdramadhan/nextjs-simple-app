import Modal from 'react-bootstrap/Modal';
import CollapseLayanan from './CollapseLayanan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faList,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Modals = (props) => {
  const [openLayanan, setOpenLayanan] = useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="content-box">
          <div className="title d-flex">
            <div className="icon-box my-auto">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                style={{ fontSize: '45px' }}
                className="text-black"
              />
            </div>
            <h3 className="my-auto ml-2">
              <b>Menu Layanan</b>
            </h3>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div id="accordion">
              <div className="d-flex mb-2">
                <FontAwesomeIcon
                  icon={faList}
                  className="my-auto"
                  style={{ fontSize: '20px' }}
                />
                <Link
                  style={{ fontSize: '20px' }}
                  className="ml-2 my-auto"
                  onClick={() => setOpenLayanan(!openLayanan)}
                  aria-controls="example-collapse-text"
                  aria-expanded={openLayanan}
                >
                  Layanan
                </Link>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className=" my-auto"
                  style={{ fontSize: '20px' }}
                />
              </div>
              <CollapseLayanan openLayanan={openLayanan} />
            </div>
            <div className="d-flex mb-2">
              <FontAwesomeIcon
                icon={faList}
                className="my-auto"
                style={{ fontSize: '20px' }}
              />
              <Link to="https://presensimeeting.kotabogor.go.id/" style={{ fontSize: '20px' }} className="ml-2 my-auto">
                Presensi Meeting
              </Link>
            </div>
            <div className="d-flex mb-2">
              <FontAwesomeIcon
                icon={faList}
                className="my-auto"
                style={{ fontSize: '20px' }}
              />
              <Link to="https://mail.kotabogor.go.id/mail/" style={{ fontSize: '20px' }} className="ml-2 my-auto">
                Mail Kota Bogor
              </Link>
            </div>
            <div className="d-flex mb-2">
              <FontAwesomeIcon
                icon={faList}
                className="my-auto"
                style={{ fontSize: '20px' }}
              />
              <Link to="https://ppid.kotabogor.go.id/" style={{ fontSize: '20px' }} className="ml-2 my-auto">
                PPID
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex mb-2">
              <FontAwesomeIcon
                icon={faList}
                className="my-auto"
                style={{ fontSize: '20px' }}
              />
              <Link to="https://sibadra.kotabogor.go.id/report" style={{ fontSize: '20px' }} className="ml-2 my-auto">
                Sibadra
              </Link>
            </div>
            <div className="d-flex mb-2">
              <FontAwesomeIcon
                icon={faList}
                className="my-auto"
                style={{ fontSize: '20px' }}
              />
              <Link to="https://data.kotabogor.go.id/" style={{ fontSize: '20px' }} className="ml-2 my-auto">
                Portal Data
              </Link>
            </div>
            <div className="d-flex mb-2">
              <FontAwesomeIcon
                icon={faList}
                className="my-auto"
                style={{ fontSize: '20px' }}
              />
              <Link to="https://manajemenpengetahuan.kotabogor.go.id/index.php/Main_Page" style={{ fontSize: '20px' }} className="ml-2 my-auto">
                Manajemen Pengetahuan
              </Link>
            </div>
            <div className="d-flex mb-2">
              <FontAwesomeIcon
                icon={faList}
                className="my-auto"
                style={{ fontSize: '20px' }}
              />
              <Link to="http://skm.kotabogor.go.id/" style={{ fontSize: '20px' }} className="ml-2 my-auto">
                SKM survey Kepuasan Masyarakat
              </Link>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Modals;
