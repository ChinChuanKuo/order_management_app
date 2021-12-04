import { useState } from "react";
import { useSelector } from "react-redux";

import { SIMPLE_COLOR } from "../../../config";

import { Tabs, tabsClasses } from "@mui/material";
import { Box } from "@mui/system";

import Item from "./item";
import Setup from "./setup";

const Head = ({ items, setupData, value, setValue, submittingStatus }) => {
  const device = useSelector((state) => state.device.data);
  const width = device.desktop ? 1200 : device.width;
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});

  function itemChange(event, value) {
    setValue(value);
  }

  return (
    <>
      <Box sx={{ width: width }}>
        <Tabs
          value={value}
          onChange={itemChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
            [`& .${tabsClasses.indicator}`]: {
              backgroundColor: SIMPLE_COLOR,
            },
          }}
        >
          {items.map((item) => {
            const { id, name } = item;
            return (
              <Item
                key={id}
                id={id}
                name={name}
                openNote={setOpen}
                itemNote={setItem}
              />
            );
          })}
        </Tabs>
      </Box>
      <Setup
        open={open}
        openNote={setOpen}
        id={item.id}
        name={item.name}
        setupData={setupData}
        submittingStatus={submittingStatus}
      />
    </>
  );
};

export default Head;
