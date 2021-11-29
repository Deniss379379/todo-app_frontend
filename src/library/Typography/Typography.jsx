import { typography } from "./styles/index.module.scss";


const Typograghy = (props) => {
    const {Tag = "p", className = `${typography}`, ...rest} = props;
    return (
      <Tag
      className = {className}
      {...rest}
      />
    );
};   

export { Typograghy };
