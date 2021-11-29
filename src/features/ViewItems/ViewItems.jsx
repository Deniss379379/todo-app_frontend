import {Grid }  from "@mui/material"
import { useSelector } from "react-redux"
import { TodoListItem } from "./Item"




const ViewItems = () => {
  const todos = useSelector((state) => state.items);
  


const renderListItem = todos.map((todo) => {
  return <TodoListItem key={todo._id} item = {todo}  />
  })

  return (
  <Grid>
  {renderListItem}
  </Grid>
  
  );

 };
export { ViewItems };


