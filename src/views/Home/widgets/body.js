import { useState } from "react";
import { useSelector } from "react-redux";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";

import Rows from "./rows";
import Trash from "./trash";

const Body = ({ main, data, deleteData, submittingStatus }) => {
  const device = useSelector((state) => state.device.data);
  const width = device.desktop
    ? 800
    : device.tablet
    ? device.width - 400
    : device.width - 80;
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});

  return (
    <>
      <TableContainer sx={{ width: width, padding: "0px 1rem" }}>
        <Table stickyHeader aria-label="table">
          <TableHead>
            <TableRow>
              {main.map((item) => {
                const { id, name, align, width } = item;
                return (
                  <TableCell key={id} align={align} width={width}>
                    <Typography variant="subtitle1">{name}</Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => {
              const { id, name, price, quantity } = item;
              return (
                <Rows
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  quantity={quantity}
                  openNote={setOpen}
                  itemNote={setItem}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Trash
        open={open}
        openNote={setOpen}
        id={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        deleteData={deleteData}
        submittingStatus={submittingStatus}
      />
    </>
  );
};

export default Body;
