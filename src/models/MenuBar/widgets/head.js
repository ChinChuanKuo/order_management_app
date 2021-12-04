import { Typography } from "@mui/material";

import { PROJECT_TITLE } from "../../../config";

const Head = () => {
  return (
    <Typography variant="h6" fontWeight="bolder">
      {PROJECT_TITLE}
    </Typography>
  );
};

export default Head;
