import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "./store/useAuthStore"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage"; 

const queryClient = new QueryClient();

const App = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
          <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <Register />} />
          <Route path="/home" element={isAuthenticated ? <Homepage /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
