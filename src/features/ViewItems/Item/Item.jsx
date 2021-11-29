import {Paper, Grid, Typography, Divider, IconButton} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux"
import {deleteItem} from "../../../reducers/items.js"
import { styles } from "./styles.jsx";
import {Box} from "../../../library/Box";

const TodoListItem = ({item}) => {
  const dispatch = useDispatch();
  return(
      <Box
      >
        <Typography>
          {item.title}
        </Typography>
        <Divider
          style = {styles.Divider}
          orientation= "vertical"
        />
        <IconButton
          color = "primary"
          edge = "end"
          onClick={() => dispatch(deleteItem(item._id))}
          style = {styles.IconButton}
          aria-label = "delete"
        >
          <DeleteIcon
          />
        </IconButton>
      </Box>
)
};


export { TodoListItem};
