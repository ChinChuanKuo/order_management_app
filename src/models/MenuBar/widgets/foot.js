import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { API_GET_NOTICE } from "../../../apis";

import { Avatar, Badge, Grid, IconButton, Typography } from "@mui/material";
import { Notifications, Person } from "@material-ui/icons";
import { usePopupState, bindTrigger } from "material-ui-popup-state/hooks";

import Note from "./note";

async function fetchData(setData) {
  const res = await fetch(API_GET_NOTICE);
  const { data } = await res.json();
  setData(data);
}

const Foot = ({ badgeContent }) => {
  const account = useSelector((state) => state.account.data);
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item sx={{ paddingRight: "8px" }}>
        <IconButton aria-label="notice" {...bindTrigger(popupState)}>
          <Badge badgeContent={badgeContent} sx={{ color: "white" }}>
            <Notifications sx={{ color: "white" }} />
          </Badge>
        </IconButton>
        <Note popupState={popupState} notes={data} />
      </Grid>
      <Grid item>
        <Avatar sx={{ bgcolor: "transparent" }}>
          <Person />
        </Avatar>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" fontWeight="400">
          {account.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Foot;
