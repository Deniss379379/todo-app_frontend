import React from 'react';
import styles from "./styles/index.module.scss";

const { textField } = styles;

const InputField = (props) => {
  const { type =  "text", className = `${textField}`, ...rest } = props; 
   return (
            <input
              type = { type }
              className = {className}
              {...rest}
            />
  );
}
export { InputField };
