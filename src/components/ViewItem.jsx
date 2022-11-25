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

function ViewItem() {
  const menu = JSON.parse(localStorage.getItem("menu"));
  const [menuArr, setMenuArr] = useState(menu);
  return (
    <Box>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Button
          sx={{ marginBottom: "20px" }}
          variant="outlined"
          onClick={() => {
            setMenuArr(menu);
          }}
        >
          Refresh
        </Button>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "700" }}>Item ID</TableCell>
                <TableCell sx={{ fontWeight: "700" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "700" }}>Price</TableCell>
                <TableCell sx={{ fontWeight: "700" }}>Image URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menuArr != null ? (
                menuArr.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.id}
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      <Link href={item.imageURL} target="_blank">
                        {item.name}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <Typography variant="body1" padding={2} textAlign="center">
                  {" "}
                  No items available. Please Add more Items.
                </Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default ViewItem;
