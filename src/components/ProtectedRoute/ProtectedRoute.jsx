import { Navigate, useLocation } from "react-router-dom";
import useAuth from "@store/useAuth/useAuth.js";

function ProtectedRoute({ children }) {
  const location = useLocation();

  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{
 from: location 
}} />;
  }

  return children;
}

export default ProtectedRoute;
