import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import Alerts from "./Alerts";

const AddItem = () => {
  var expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  const [alert, setAlert] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);

  const showAlert = (alertText, severity) => {
    setAlert({ alertText: alertText, severity: severity });
    setTimeout(() => {
      setAlertOpen(false);
    }, 2000);
  };
  const [item, setItem] = useState({
    id: "",
    name: "",
    price: "",
    imageURL: "",
  });
  let menuData = JSON.parse(
    localStorage.getItem("menu") ? localStorage.getItem("menu") : "[]"
  );
  const handlleAddItem = () => {
    let url = item.imageURL;
    if (
      item.id != "" &&
      item.name != "" &&
      item.price != "" &&
      item.imageURL != ""
    ) {
      menuData.push(item);
      localStorage.setItem("menu", JSON.stringify(menuData));
      setAlertOpen(true);
      showAlert("Item Added!", "success");
    } else {
      setAlertOpen(true);
      showAlert("No field can be empty!", "error");
    }
  };

  return (
    <Box mt={6}>
      <Container maxWidth="sm">
        <Alerts alert={alert} alertOpen={alertOpen} />
        <Grid container alignItems="center" alignContent="center" spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1" color="initial">
              Item ID:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="itemName"
              label="ID"
              type="number"
              autoComplete="off"
              name="id"
              value={item.id}
              onChange={(e) => {
                setItem({ ...item, [e.target.name]: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" color="initial">
              Item Name:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="itemName"
              label="Name"
              name="name"
              autoComplete="off"
              value={item.name}
              onChange={(e) => {
                setItem({ ...item, [e.target.name]: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" color="initial">
              Item Price:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="itemPrice"
              label="Price"
              name="price"
              type="number"
              value={item.price}
              onChange={(e) => {
                setItem({ ...item, [e.target.name]: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" color="initial">
              Item Image URL:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="itemImage"
              label="URL"
              name="imageURL"
              type="url"
              value={item.imageURL}
              onChange={(e) => {
                setItem({ ...item, [e.target.name]: e.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" onClick={handlleAddItem}>
              Add Item
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AddItem;
