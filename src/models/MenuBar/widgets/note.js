import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { bindMenu } from "material-ui-popup-state/hooks";

const NoteMenu = styled(Menu)(({ theme }) => ({
  "& .css-6hp17o-MuiList-root-MuiMenu-list": {
    paddingTop: "1.2rem",
    paddingBottom: "1.2rem",
  },
}));

const Note = ({ popupState, notes }) => {
  return (
    <NoteMenu
      {...bindMenu(popupState)}
      PaperProps={{ style: { maxWidth: 400, maxHeight: 642 } }}
    >
      {notes.map((item) => {
        const { id, url, name, subname, timeago } = item;
        return (
          <MenuItem key={id} sx={{ borderRadius: "12px" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="itemAvatar" src={url} />
              </ListItemAvatar>
              <ListItemText
                primary={name}
                secondary={
                  <>
                    <Typography variant="body2">{subname}</Typography>
                    {timeago}
                  </>
                }
              />
            </ListItem>
          </MenuItem>
        );
      })}
    </NoteMenu>
  );
};

export default Note;
