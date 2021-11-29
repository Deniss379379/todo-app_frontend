import { button } from "./styles/index.module.scss"

const Button = (props) => {
  const { type = "submit", classname = `${button}`, ...other } = props;
  return (
    <button
         type = { type } 
         className = {classname}
         {...other}
    />
    );
};

export { Button };
