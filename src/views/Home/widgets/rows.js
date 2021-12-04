import { Delete } from "@material-ui/icons";
import { TableRow, TableCell, IconButton } from "@mui/material";

const Rows = ({ id, name, price, quantity, openNote, itemNote }) => {
  function deleteItem() {
    itemNote({ id: id, name: name, price: price, quantity: quantity });
    openNote(true);
  }

  return (
    <TableRow hover>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">{quantity}</TableCell>
      <TableCell align="right">
        <IconButton aria-label="delete" onClick={deleteItem}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Rows;
