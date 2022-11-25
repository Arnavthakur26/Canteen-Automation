import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import AddItem from "./AddItem";
import MenuItem from "./MenuItem";
import { useState } from "react";
import ViewCart from "./ViewCart";

// variables
const user = localStorage.getItem("loggedUser");
const userData = JSON.parse(localStorage.getItem(user));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Shop = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const menu = JSON.parse(localStorage.getItem("menu"));
  const [menuArr, setMenuArr] = useState(menu);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Container
        maxWidth="xl"
        sx={{
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          boxShadow: "0px 12px 20px -20px",
          textAlign: "center",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3" color="initial">
          Welcome,{userData.fname}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            localStorage.setItem("loggedIn", false);
            navigate("/");
          }}
        >
          Logout{" "}
        </Button>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          boxShadow: "0px -12px 20px -20px",
        }}
      >
        <Box sx={{ width: "100%" }} mt={8} divider>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
              >
                <Tab label="View Menu" {...a11yProps(0)} />
                <Tab label="View Cart" {...a11yProps(1)} />
                <Tab label="Update Profile" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Container
                maxWidth="xl"
                sx={{
                  display: "flex",
                  gap: 4,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {menuArr ? (
                  menuArr.map((item) => (
                    <MenuItem
                      name={item.name}
                      price={item.price}
                      imageURL={item.imageURL}
                      key={item.id}
                    />
                  ))
                ) : (
                  <Typography variant="body1" color="initial">
                    No Items Available.
                  </Typography>
                )}
              </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ViewCart />
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Shop;
