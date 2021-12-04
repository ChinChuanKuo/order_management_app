import { PROJECT_COLOR } from "../../config";

import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ColorText = styled(Typography)(({ theme }) => ({
  background: PROJECT_COLOR,
  backgroundClip: "text",
}));
