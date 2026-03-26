import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
import MovieDialog from "./components/MovieDialog";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "./redux/userSlice";
import { API_END_POINT } from "../utils/constant";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
        dispatch(setLoading(true));
      try {
        const res = await axios.get(`${API_END_POINT}/profile`, {
          withCredentials: true, // 🔥 IMPORTANT
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        console.log("PROFILE RESPONSE:", res.data); // 🔥 DEBUG
        if (res.data && res.data.user) {
          dispatch(setUser(res.data.user));
        } else {
          dispatch(setUser(null));
        }
      } catch (error) {
        console.log("PROFILE ERROR:", error);
        dispatch(setUser(null));
      } finally {
        dispatch(setLoading(false)); // 🔥 MUST
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Body />
      <Toaster />
      <MovieDialog />
    </div>
  );
}

export default App;
