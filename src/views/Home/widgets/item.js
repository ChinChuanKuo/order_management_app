import { SIMPLE_COLOR } from "../../../config";

import { Tab } from "@mui/material";
import { styled } from "@mui/system";

const ColorTab = styled(Tab)(({ theme }) => ({
  borderRadius: "12px",
  "&.Mui-selected": { color: SIMPLE_COLOR },
}));

const Item = ({ id, name, openNote, itemNote }) => {
  function setupItem() {
    itemNote({ id: id, name: name });
    openNote(true);
  }

  return (
    <ColorTab
      key={id}
      label={name}
      aria-label={name}
      onDoubleClick={setupItem}
    />
  );
};

export default Item;
