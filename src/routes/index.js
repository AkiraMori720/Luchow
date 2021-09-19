import Create from "../pages/Create";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Detail from "../pages/Detail";
import Home from "../pages/Home";


export default [
  { path: "/create", component: Create },
  { path: "/profile", component: Profile },
  { path: "/edit_profile", component: EditProfile },
  { path: "/detail", component: Detail },
  { path: "/", component: Home }
];
