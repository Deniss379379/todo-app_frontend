import styles from "./styles/index.module.scss"

const { button } = styles;
const container_ = container.toString();


const MyGrid = (props) => {
  const { classname = container_, ...other } = props;
  return (
    <div
         className = {classname}
         {...other}
    />
    );
};

export default MyGrid;
