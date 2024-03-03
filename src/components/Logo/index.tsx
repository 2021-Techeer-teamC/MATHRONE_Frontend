import * as React from "react";
import { Link } from "react-router-dom";
//import "../../assets/styles/components.css";
import "./style.css";

// 로고 파일 css 분리작업해야함, 회원가입 로고 넣어야함
function Logo() {
  return (
    <div className="logo-div">
      <Link to="/" style={{ textDecoration: "none", color: "#151515" }}>
        MATHRONE
        <span style={{ color: "#315C72", fontSize: "40px" }}>
          <strong>.</strong>
        </span>
      </Link>
    </div>
  );
}

export default Logo;
