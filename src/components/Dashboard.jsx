import { Box, Typography, Container, Button } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import AddItem from "./AddItem";
import ViewItem from "./ViewItem";
import RemoveItem from "./RemoveItem";
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

const Dashboard = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

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
                <Tab label="View Item" {...a11yProps(0)} />
                <Tab label="Add Item" {...a11yProps(1)} />
                <Tab label="Remove Item" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <ViewItem />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <AddItem />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <RemoveItem />
            </TabPanel>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
