import { box } from "./styles/index.module.scss"


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
