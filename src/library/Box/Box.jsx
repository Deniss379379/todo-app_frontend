import React from 'react';
import styles from "./styles/index.module.scss"
const {box} = styles;


const Box = (props) => {
  const { Tag = "div", classname = `${box}`, ...other } = props;
  return (
    <Tag
         className = {classname}
         {...other}
    />
    );
};


export { Box } ;
