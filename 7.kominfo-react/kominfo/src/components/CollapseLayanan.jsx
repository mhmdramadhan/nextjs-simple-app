import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';

const CollapseLayanan = (props) => {
  const check = props.openLayanan;

  let content;
  if (check) {
    content = (
      <Collapse in={props.openLayanan} className="collapse">
        <div className="d-flex mb-2 ml-2" id="example-collapse-text">
          <i
            className="icofont-square-down  my-auto"
            style={{ fontSize: '25px' }}
          ></i>
          <Link
            to="/layanan-tte"
            style={{ fontSize: '20px' }}
            className="ml-3 my-auto"
          >
            Layanan TTE
          </Link>
        </div>
      </Collapse>
    );
  }

  return content;
};

export default CollapseLayanan;
