import { textField } from "./styles/index.module.scss";

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
