import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { Link as RouteLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerts from "./Alerts";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <RouteLink as={Link}>
        <Link>Canteen Automaion</Link>
      </RouteLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [alert, setAlert] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);

  const showAlert = (alertText, severity) => {
    setAlert({ alertText: alertText, severity: severity });
    setTimeout(() => {
      setAlertOpen(false);
    }, 2000);
  };

  const navigate = useNavigate();
  const [input, setInput] = useState({
    regNo: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem(input.regNo));
    if (loggedUser) {
      if (
        input.regNo != "" &&
        input.password != "" &&
        input.regNo === loggedUser.regNo &&
        input.password === loggedUser.password
      ) {
        showAlert("Login Succesful", "success");
        setAlertOpen(true);
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("loggedUser", input.regNo);
        if (loggedUser.role === "Admin") {
          setTimeout(() => {
            navigate("/dashboard");
          }, 2100);
        } else if (loggedUser.role === "User") {
          setTimeout(() => {
            navigate("/shop");
          }, 2100);
        }
      } else {
        showAlert("Wrong Credentials!", "error");
        setAlertOpen(true);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Alerts alert={alert} alertOpen={alertOpen} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="regNo"
              value={input.regNo}
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
              }}
              label="Registration No."
              autoComplete="off"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={input.password}
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
              }}
              label="Password"
              type="password"
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <RouteLink as={Link}>
                  <Link>Forgot password?</Link>
                </RouteLink>
              </Grid>
              <Grid item>
                <RouteLink as={Link} to="/signup">
                  <Link>Don't have an account? Sign Up</Link>
                </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
