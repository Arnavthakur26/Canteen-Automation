import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const MenuItem = ({ name, price, imageURL }) => {
  const [item, setItem] = useState({
    name: name,
    price: price,
  });

  const addToCart = () => {
    let cart = JSON.parse(
      localStorage.getItem("cart") ? localStorage.getItem("cart") : "[]"
    );
    console.log(cart);

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <Card sx={{ minWidth: 280, maxWidth: 300, paddingBottom: 2 }}>
      <CardMedia component="img" height="190" image={imageURL} alt={name} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          Rs. {price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="medium" variant="outlined" onClick={addToCart}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default MenuItem;
