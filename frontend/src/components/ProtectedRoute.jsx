import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const storeData = useSelector((store) => store.app);

  if (!storeData) return null;

  const { user, isLoading } = storeData;

  if (isLoading) {
    return <div  className="text-white text-center mt-10">Loading...</div>;
  }

  return user ? children : <Navigate to="/" replace  />;
}
