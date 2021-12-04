import { useState } from "react";
import { useSelector } from "react-redux";

import { SIMPLE_COLOR } from "../../../config";
import { ColorButton, ColorText } from "../../../widgets/widgets";

import { Grid, TextField, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { v4 } from "uuid";

const ColorField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: SIMPLE_COLOR,
  },
  "& .Mui-focused:after": {
    borderBottomColor: SIMPLE_COLOR,
  },
}));

const Edit = ({ addData, submittingStatus }) => {
  const device = useSelector((state) => state.device.data);
  const width = device.tablet ? 300 : device.width - 80;

  const [name, setName] = useState("");
  function nameChange(event) {
    setName(event.target.value);
  }

  const [price, setPrice] = useState(0);
  function priceChange(event) {
    setPrice(event.target.value);
  }

  function addItem() {
    submittingStatus.current = true;
    addData(function (prevData) {
      return [
        {
          id: v4(),
          name,
          price,
          quantity: 0,
        },
        ...prevData,
      ];
    });
  }

  return (
    <Box
      sx={{
        width: width,
        padding: "0px 2rem",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item sx={{ padding: "0.75rem 0px" }}>
          <Typography variant="h6" color="#FA7A2F">
            新增餐點
          </Typography>
        </Grid>
        <Grid item sx={{ paddingBottom: "0.75rem" }}>
          <ColorField
            variant="standard"
            label="Name"
            margin="normal"
            fullWidth
            value={name}
            onChange={nameChange}
          />
        </Grid>
        <Grid item sx={{ paddingBottom: "1rem" }}>
          <ColorField
            variant="standard"
            type="number"
            label="Price"
            margin="normal"
            fullWidth
            value={price}
            onChange={priceChange}
          />
        </Grid>
        <Grid item sx={{ padding: "1.5rem 0px" }}>
          <ColorButton fullWidth onClick={addItem}>
            <ColorText>Add</ColorText>
          </ColorButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Edit;
