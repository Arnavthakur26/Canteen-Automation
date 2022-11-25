import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Container, Typography, Link } from "@mui/material";
import { useState } from "react";

function ViewCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [cartArr, setCartArr] = useState(cart);
  let price = 0;

  return (
    <Box>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Button
          sx={{ marginBottom: "20px" }}
          variant="outlined"
          onClick={() => {
            setCartArr(cartArr);
          }}
        >
          Refresh
        </Button>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "700" }}>S. No.</TableCell>
                <TableCell sx={{ fontWeight: "700" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "700" }}>Price</TableCell>
                <TableCell sx={{ fontWeight: "700" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartArr != null ? (
                cartArr.map(
                  (item, index) =>
                    item.name != "" && (
                      <TableRow
                        key={item.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>
                          <Link
                            color="error"
                            onClick={() => {
                              setCartArr(
                                cartArr.filter(
                                  (itemToRemove) =>
                                    item.name != itemToRemove.name
                                )
                              );
                              localStorage.setItem(
                                "cart",
                                JSON.stringify(cartArr)
                              );
                            }}
                          >
                            Remove
                          </Link>
                        </TableCell>
                      </TableRow>
                    )
                )
              ) : (
                <Typography variant="body1" padding={2} textAlign="center">
                  {" "}
                  No items available. Please Add more Items.
                </Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h3" color="Highlight" sx={{ marginTop: 4 }}>
          Total Price ={" "}
          {cartArr != null &&
            cartArr.map((item) => {
              price += Number(item.price);
            })}
          Rs. {price}
        </Typography>
        <Button size="large" variant="contained" sx={{ marginTop: 3 }}>
          Pay Now
        </Button>
      </Container>
    </Box>
  );
}

export default ViewCart;
