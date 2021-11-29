import React from 'react';
import styles from "./styles/index.module.scss"

const {box} = styles;

const Form = (props) => {
    const { action = '#',
            autoComplete = "off", 
            className = `${box}`, 
            ...rest } = props;
    return (
    <form
      action = { action }
      autoComplete = {autoComplete }
      className = { className }
      {...rest}
    />
    );
}   

export { Form };
