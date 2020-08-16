import React from "react";
import s from "./Header.module.css"

const Header=()=>{
  return(
      <header className={s.header}>
          <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Gold%27s_Gym_logo.svg/1200px-Gold%27s_Gym_logo.svg.png" alt=""/>
      </header>
  )

};
export default Header;
