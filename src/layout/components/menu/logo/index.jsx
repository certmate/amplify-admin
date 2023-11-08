import { Link } from "react-router-dom";
import logo from '../../../../assets/logo.png';

export default function MenuLogo(props) {

  return (
    <div className="hp-header-logo hp-d-flex hp-align-items-center">
      <Link
        to="/"
        onClick={props.onClose}
        className="hp-position-relative hp-d-flex"
      >

        <div className="hp-position-absolute-top-left hp-bg-black-20 hp-bg-dark-90 hp-border-1 hp-border-color-black-0 hp-border-color-dark-90 hp-border-radius-round hp-d-flex-full-center" style={{ width: 64, height: 64, top: -32, left: -9, }}>
          <img className="hp-logo" src={logo} alt="logo" />
        </div>
      </Link>
      
    </div>
  );
};