import  React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { IconButton} from "@mui/material"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { createItem } from "../../reducers/items";
import { Button } from "../../library/Button";
import { Form } from "../../library/Form";
import { InputField } from "../../library/InputField";
import { Divider } from "../../library/Divider";



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
        <Divider />
        <Button
          aria-label = "add"
        >
        Add
        </Button>
    </Form>
  

    
  );
};

export { AddItem };
