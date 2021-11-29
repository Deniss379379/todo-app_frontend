import  React, { useState, } from "react"
import { useDispatch } from "react-redux"
import { IconButton } from "@mui/material"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { createItem } from "../../reducers/items";
import { Form } from "../../library/Form";
import { InputField } from "../../library/InputField";



const AddItem = () =>  {
  const [itemData, setItemData] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    dispatch(createItem(itemData));
    setItemData("");
  }
    
  const handleChange = (e) => {
    setItemData({title: e.target.value})
  }

  return (
    <Form
      noValidate
      onSubmit = {handleSubmit}
    >
      <InputField
        placeholder = "create todo"
        aria-label = 'create todo'
        onChange = {handleChange} 
      />
      <IconButton
        color = "primary"
        type = "submit"
        className = "iconButton"
        aria-label = "add"
      >
        <ControlPointIcon />
      </IconButton>
    </Form>
  );
};

export { AddItem };
