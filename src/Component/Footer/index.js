import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Asset/printsLogo.png";
import Locate from "../../Asset/SVG/locate";
import "./style.scss";

const links = [
  { title: "Home", link: "/" },
  { title: "Explore", link: "/explore" },
  { title: "About", link: "/about" },
  { title: "Portals", link: "/portals" },
  { title: "Join us", link: "/signup" },
];

const extras = [
  { title: "Terms & condition", link: "/terms_condition" },
  { title: "Privacy policy", link: "/privacy" },
  { title: "Sponsors", link: "/about" },
  { title: "Explore", link: "/explore" },
];

const Footer = () => {
  return (
    <section className='ft_sx  flex-col flexed-between '>
      <div className='ft_con container flex-row'>
        <div className='contents flex-row card j-space al-start'>
          <div className='logo'>
            <img src={logo} alt='' className='contain' />
          </div>
          <div className='na_gt flex-col al-start'>
            {links.map((link, i) => (
              <Link key={`ft_sublink_${i}`} to={link.link} className='links'>
                {link.title}
              </Link>
            ))}
          </div>
          <div className='na_gt flex-col al-start'>
            {extras.map((link, i) => (
              <Link key={`ft_sublink_${i}`} to={link.link} className='links'>
                {link.title}
              </Link>
            ))}
          </div>
          <div className='cn_us flex-col al-start'>
            <div className='add'>
              18 Saint Andrew Street New Layout Island Lagos State, Nigeria
              12008
              <Locate />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className='rsv flex-row'>
        <p>
          &copy; {new Date().getUTCFullYear()} Copyright. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
