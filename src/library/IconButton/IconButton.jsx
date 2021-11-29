import React from 'react';
import styles from "./styles/index.module.scss"
import { PlusCircleOutline } from "../assets";
 

const { iconButton } = styles;

const Button = (props) => {
  const { src = `${PlusCircleOutline}`, classname,  alt = "plus", ...other } = props;
  return (
    <>
    <img
          src = {src}
          alt = { alt }
         className = {classname}
         
         {...other}
    />
    </>
    );
};

export { Button };
