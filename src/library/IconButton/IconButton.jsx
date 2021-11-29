import React from 'react';
import styles from "./styles/index.module.scss"

const { iconButton } = styles;

const Button = (props) => {
  const { type, img = "../assets/delete.svg", classname = `${iconButton}`, ...other } = props;
  return (
    <button
         type = { type } 
         className = {classname}
         img = {img}
         {...other}
    />
    );
};

export { Button };
