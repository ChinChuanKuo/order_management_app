import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Trash = ({
  open,
  openNote,
  id,
  name,
  price,
  quantity,
  deleteData,
  submittingStatus,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  function closeNote() {
    openNote(false);
  }

  function sureNote() {
    submittingStatus.current = true;
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
    openNote(false);
  }

  return (
    <Dialog open={open} onClose={closeNote} fullWidth fullScreen={fullScreen}>
      <DialogTitle>是否要刪除此餐點？</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid item>{`餐點名稱：${name}`}</Grid>
            <Grid item>{`餐點費用：${price}`}</Grid>
            <Grid item>{`餐點數量：${quantity}`}</Grid>
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

export default Trash;
