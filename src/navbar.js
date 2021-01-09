import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
 // const [isOpen, setOpen] = useState(false);
  return (
  <>
            <NavLink  to="/"> Home</NavLink> 
 <NavLink to="/about" > Your tracks </NavLink>
          </>
       );
}; 

export default Navbar;