import { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";
import { useFileHandler, useInputValidation } from "6pp";
import { usernamevalidator } from "../utils/validators";

const Login = () => {
  const [islogin, setislogin] = useState(true);
const name =useInputValidation("",)
const username =useInputValidation("",usernamevalidator)
// const password =useStrongPassword()
const password =useInputValidation("",)
const bio =useInputValidation("",)

const avatar =useFileHandler("single")

const handleLogin =(e)=>{
    e.preventDefault();
}
const handleSignup =(e)=>{
    e.preventDefault();
}

  return (
   <div style={{backgroundImage:"linear-gradient(rgba(30,10,220,0.5),rgba(290,200,2000.5))"}} > <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {islogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleLogin}>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {
                username.error && (
                    <Typography color="error" variant="caption">{username.error}</Typography>
                )
              }

              <TextField
                required
                fullWidth
                label="Password"
                type="Password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

{/* {
                password.error && (
                    <Typography color="error" variant="caption">{password.error}</Typography>
                )
              } */}
              <Button
                sx={{ marginTop: "1rem" }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={() => setislogin((prev) => !prev)}
              >
                Sign up instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign up</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSignup}>
              {/* avatar details */}
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
src={avatar.preview}

                />

{
                avatar.error && (
                    <Typography color="error" variant="caption">{avator.error}</Typography>
                )
              }

                <IconButton
                  sx={{ position: "absolute", bottom: "0", right: "0", color:"white",bgcolor:"rgba(0,0,0,0.7)",":hover":{
                    bgcolor:"rgba(0,0,0,0.7)",
                  }, }}
                //   componentlabel to open the camera (file explorer)
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type="file"  onChange={avatar.changeHandler}/>
                  </>
                </IconButton>
              </Stack>

              <TextField
                required
                fullWidth
                label="Name"
                value={name.value}
                onChange={name.changeHandler}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
 {
                username.error && (
                    <Typography color="error" variant="caption">{username.error}</Typography>
                )
              }
              <TextField
                required
                fullWidth
                label="Password"
                type="Password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
{/* {
                password.error && (
                    <Typography color="error" variant="caption">{password.error}</Typography>
                )
              } */}
              <Button
                sx={{ marginTop: "1rem" }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign up
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={() => setislogin((prev) => !prev)}
              >
                Login instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
};

export default Login;
