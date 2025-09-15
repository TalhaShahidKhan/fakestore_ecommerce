import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Profile from "./components/pages/Profile";
import Shop from "./components/pages/Shop";
import Base from "./components/ui/Base";

export default function App() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Home />} exact />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
