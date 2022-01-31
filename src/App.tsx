import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Trade } from "./pages/trade";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./store/user.context";
import { useState } from "react";
import { createTheme, MuiThemeProvider } from "@material-ui/core";

const queryClient = new QueryClient();

const theme = createTheme({ 
  palette: { 
    primary : { main: "#000000", contrastText:"#ffffff" }, secondary: { main: "#ffffff", contrastText:"#000000" } } });

function App() {
  const [user, setUser] = useState<any>({
    user: null,
    setUser: (credentials: any) => {
      setUser({ ...user, user: credentials });
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <UserProvider value={user}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Home />} path="/home" />
              <Route element={<Trade />} path="/trade" />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </UserProvider>
    </MuiThemeProvider>
  );
}

export default App;
