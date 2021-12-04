import { PROJECT_COLOR } from "../../config";

import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ColorButton = styled(Button)(({ theme }) => ({
  borderRadius: "35px",
  color: "transparent",
  border: "solid 2px transparent",
  background: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), ${PROJECT_COLOR}`,
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",
  boxShadow: "2px 1000px 1px #fff inset",
  textTransform: "inherit",
  minWidth: "6rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  "&:hover": {
    border: "solid 2px transparent",
    background: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), ${PROJECT_COLOR}`,
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
    boxShadow: "2px 1000px 1px #fff inset",
  },
  "&.Mui-disabled": {
    border: "solid 2px #BCBCBC",
    color: "#BCBCBC",
  },
}));
