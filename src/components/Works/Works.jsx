import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            
          </span>
          <span>I'M Expert</span>
          <span>Follwing Technologies</span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={"https://angular.io/assets/images/logos/angular/angular.svg"} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={"https://ellipsesolutions.wpcdn-b.com/wp-content/uploads/2019/03/Microsoft-Dynamics-365-Logo-2019-300x132.png"} alt="" />
          </div>{" "}
          <div className="w-secCircle">
          <img src={"https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg"} alt="" />
          
             
          </div>
          <div className="w-secCircle">
          <img src={"https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
