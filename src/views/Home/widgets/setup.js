import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Setup = ({ open, openNote, id, name, setupData, submittingStatus }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  function closeNote() {
    openNote(false);
  }

  function sureNote() {
    submittingStatus.current = true;
    setupData(function name(prev) {});
    openNote(false);
  }

  return (
    <Dialog open={open} onClose={closeNote} fullWidth fullScreen={fullScreen}>
      <DialogTitle>設定營業時間</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid item>{`餐點名稱：${name}`}</Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={sureNote}>Sure</Button>
        <Button onClick={closeNote}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Setup;
