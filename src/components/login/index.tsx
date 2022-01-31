import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Avatar, Box, IconButton } from "@material-ui/core";
import { UserConsumer } from "../../store/user.context";
import { ExitToApp } from "@material-ui/icons";

export default function LoginWithDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  return (
    <UserConsumer>
      {({ user, setUser }) => {
        const isLoggedIn = user && user.name;
        return (
          <Box>
            {isLoggedIn ? (
              <Box display={"flex"} alignItems={"center"}>
                <IconButton onClick={() => setUser(null)}>
                  <ExitToApp />
                </IconButton>
                <Box ml={2}>
                  <Avatar src={user.avatar} alt={user.name} />
                </Box>
              </Box>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                Login
              </Button>
            )}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Login</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Username"
                  type="username"
                  fullWidth
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Password"
                  type="password"
                  fullWidth
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                />
                <Box my={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    disabled={
                      credentials.username.length < 5 ||
                      credentials.password.length < 5
                    }
                    onClick={() => {
                      setUser({
                        name: "Ali",
                        avatar: "https://v4.mui.com/static/images/avatar/1.jpg",
                      });
                      setOpen(false);
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>
          </Box>
        );
      }}
    </UserConsumer>
  );
}
