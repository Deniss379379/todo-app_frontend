import { box } from "./styles/index.module.scss"

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
