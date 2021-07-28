import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
const [show, handleShow] = useState(false);


  useEffect(() => {
window.addEventListener("scroll", () => {
  if(window.scrollY > 100) {
    handleShow(true);
  } else handleShow(false);
})
return() => {
  window.removeEventListener("scroll");
};
  },[]);

  return (
    <div className={`nav ${show && "nav__black"}`}>
<img className="nav__logo"
 src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png"
 alt="neflix_logo"
  />

    </div>
  )
}

export default Nav;