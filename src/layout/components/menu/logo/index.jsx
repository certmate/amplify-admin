import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import logoSmall from "../../../../assets/images/logo/logo-small.svg";
import logoSmallDark from "../../../../assets/images/logo/logo-small-dark.svg";
import logoDark from "../../../../assets/images/logo/logo-dark.svg";
import logoRTL from "../../../../assets/images/logo/logo-rtl.svg";
import logoRTLDark from "../../../../assets/images/logo/logo-rtl-dark.svg";
import { version } from "../../../../settings";
import logo from '../../../../assets/logo.png';


export default function MenuLogo(props) {

  return (
    <div className="hp-header-logo hp-d-flex hp-align-items-center">
      <Link
        to="/"
        onClick={props.onClose}
        className="hp-position-relative hp-d-flex"
      >

        <div className="hp-position-absolute-top-left hp-bg-black-20 hp-bg-dark-90 hp-border-1 hp-border-color-black-0 hp-border-color-dark-90 hp-border-radius-round hp-d-flex-full-center" style={{ width: 18, height: 18, top: -5, left: 21, }}>
          <img className="hp-logo" src={logo} alt="logo" />
        </div>
      </Link>
      
    </div>
  );
};