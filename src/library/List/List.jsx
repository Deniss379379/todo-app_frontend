import styles from "./styles/index.module.scss"

const { listItem } = styles;

const List = (props) => {
  const {Tag = 'ul', className = listItem, ...rest} = props;
  return (
    <Tag
    className = {className}
    {...rest}
    />
  );
};

export default List;
