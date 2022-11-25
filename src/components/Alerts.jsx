import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Alerts({ alert, alertOpen }) {
  const [open, setOpen] = React.useState(true);

  setTimeout(() => {
    setOpen(false);
  }, 2000);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    alert.severity && (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={alertOpen}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={alert.severity}
            sx={{ width: "100%" }}
          >
            {alert.alertText}
          </Alert>
        </Snackbar>
      </Stack>
    )
  );
}
