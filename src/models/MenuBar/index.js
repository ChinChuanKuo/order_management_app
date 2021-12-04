import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_GET_BADGE, API_GET_ACCOUNT } from "../../apis";
import { signin } from "../../source/reducer/account";
import { ondevice } from "../../source/reducer/device";

import { AppBar, Grid, Toolbar } from "@mui/material";
import { Box } from "@mui/system";

import Head from "./widgets/head";
import Body from "./widgets/body";
import Foot from "./widgets/foot";
import "./index.css";

async function fetchBadge(setBadge) {
  const res = await fetch(API_GET_BADGE);
  const { data } = await res.json();
  setBadge(data.badge);
}

async function fetchData(dispatch) {
  const res = await fetch(API_GET_ACCOUNT);
  const { data } = await res.json();
  if (Object.keys(data).length > 0) dispatch(signin(data));
}

const MenuBar = () => {
  const dispatch = useDispatch();
  dispatch(ondevice(window.innerWidth));
  const [badge, setBadge] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(ondevice(window.innerWidth));
    });
  }, [dispatch]);

  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  useEffect(() => {
    fetchBadge(setBadge);
  }, []);

  return (
    <Box sx={{ marginBottom: "100px" }}>
      <AppBar
        style={{
          backgroundImage:
            "linear-gradient(to right, #EAA94B, #FA7A2F, #DDB472, #B2C9DC, #B0CAE1)",
        }}
        position="fixed"
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Head />
            </Grid>
            <Grid item xs>
              <Body value={value} setValue={setValue} />
            </Grid>
            <Grid item>
              <Foot badgeContent={badge} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuBar;
