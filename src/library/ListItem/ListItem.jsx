import "./ListItem.module.scss"


const ListItem = (props) => {
    const {Tag = "li", className = "listItem",  ...rest} = props;
    return (
      <Tag
      className
      {...rest}
      />

    );
};   

export default ListItem;
