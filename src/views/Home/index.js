import { useState, useEffect, useRef } from "react";

import { API_GET_STORE, API_GET_MAIN, API_GET_MENU } from "../../apis";

import { Grid } from "@mui/material";

import Head from "./widgets/head";
import Body from "./widgets/body";
import Edit from "./widgets/edit";
import "./index.css";

async function fetchItem(setItem) {
  const res = await fetch(API_GET_STORE);
  const { data } = await res.json();
  setItem(data);
}

async function fetchMain(setMain) {
  const res = await fetch(API_GET_MAIN);
  const { data } = await res.json();
  setMain(data);
}

async function fetchData(setData) {
  const res = await fetch(API_GET_MENU);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_MENU, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  const [item, setItem] = useState([]);
  const [value, setValue] = useState(0);
  const [main, setMain] = useState([]);
  const [data, setData] = useState([]);
  const submittingTrashs = useRef(false);
  const submittingSetups = useRef(false);

  useEffect(() => {
    fetchItem(setItem);
  }, []);

  useEffect(() => {
    fetchMain(setMain);
  }, []);

  useEffect(() => {
    fetchData(setData);
  }, []);

  useEffect(() => {
    if (!submittingTrashs) return;
    fetchSetData(data).then((data) => (submittingTrashs.current = false));
  }, [data]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Head
          items={item}
          setupData={setItem}
          value={value}
          setValue={setValue}
          submittingStatus={submittingSetups}
        />
      </Grid>
      <Grid item sx={{ marginTop: "1.5rem" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="start"
        >
          <Grid item>
            <Edit addData={setData} submittingStatus={submittingTrashs} />
          </Grid>
          <Grid item>
            <Body
              main={main}
              data={data}
              deleteData={setData}
              submittingStatus={submittingTrashs}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
