import { iconButton } from "./styles/index.module.scss"



const Button = (props) => {
  const { type, classname = `${iconButton}`, ...other } = props;
  return (
    <button
         type = { type } 
         className = {classname}
         {...other}
    />
    );
};

export default Button ;
//export { Button };
