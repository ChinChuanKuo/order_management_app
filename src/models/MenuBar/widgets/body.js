import { useSelector } from "react-redux";

import { RestaurantMenu } from "@material-ui/icons";
import { Tabs, Tab, tabsClasses } from "@mui/material";
import { Box, styled } from "@mui/system";

const ColorTab = styled(Tab)(({ theme }) => ({
  borderRadius: "12px",
  color: "rgba(255, 255, 255, 1)",
  "&.Mui-selected": { color: "#727272" },
}));

const Body = ({ value, setValue }) => {
  const device = useSelector((state) => state.device.data);
  const width = device.desktop ? 600 : device.tablet ? 480 : device.width - 500;
  const margin = device.desktop ? "0 auto" : "0px";

  function itemChange(event, value) {
    setValue(value);
  }
  /*to="/" component={Link} */

  return (
    <Box sx={{ width: width, margin: margin }}>
      <Tabs
        value={value}
        onChange={itemChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="barable"
        sx={{
          [`& .${tabsClasses.indicator}`]: {
            backgroundColor: "transparent",
          },
        }}
      >
        <ColorTab icon={<RestaurantMenu />} aria-label="home" />
        <ColorTab icon={<RestaurantMenu />} aria-label="home" />
        <ColorTab icon={<RestaurantMenu />} aria-label="home" />
        <ColorTab icon={<RestaurantMenu />} aria-label="home" />
        <ColorTab icon={<RestaurantMenu />} aria-label="home" />
      </Tabs>
    </Box>
  );
};

export default Body;
