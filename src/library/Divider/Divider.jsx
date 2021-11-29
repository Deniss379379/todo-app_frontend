import { divider } from "./styles/index.module.scss";

const Divider = (props) => {
  const {className = `${divider}`, ...rest } = props; 
   return (
            <hr
              className = {className}
              {...rest}
            />
  );
}
export { Divider } ;
