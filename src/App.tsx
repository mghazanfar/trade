import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Trade } from "./pages/trade";
import { QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient()


function App() {
  return (
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route element={<Home />} path="/"/>
              <Route element={<Home />} path="/home"/>
              <Route element={<Trade />} path="/trade" />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
  );
}

export default App;
