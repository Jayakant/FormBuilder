
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/home/Login";
import ForgotPassword from "../pages/home/ForgotPassword";
import HomeScreen from "../pages/home/HomeScreen";
import AppNavBar from "../components/common/AppNavBar";
import EmptyTemplate from "../components/common/EmptyTemplate";
import NotFound from "../pages/404NotFound/NotFound";
import UnauthAccess from "../pages/404NotFound/UnauthAccess";
import DemoPage from "../pages/home/DemoPage";
// import UserManagement from "../pages/a0_user_management/UserManagement"
import CreateUser from "../pages/login_signup/CreateUser"
import FormMainPage from "../pages/FormMainPage";
import AddFormPage from "../pages/AddFormPage";
import EditFormPage from "../pages/EditFormPage";
import DeleteFormPage from "../pages/DeleteFormPage";
import Register from "../pages/login_signup/Register"
import Application from "../pages/Application";


export default function AppRoutes() {
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>

            <Route path="" element={<EmptyTemplate />}>
              <Route path="" element={<Login />} />
              <Route path="home" element={<HomeScreen />} />
              <Route path="forgot_password" element={<ForgotPassword />} />
              <Route path="register" element={<Register />} />
            </Route>

            <Route path="*" element={<NotFound />} />

            <Route path="/unauthorized_access" element={<UnauthAccess />} />

            <Route path="demo" element={<AppNavBar />}>
              <Route path="empty_page" element={<DemoPage />} />
            </Route>

            <Route path="user_management" element={<AppNavBar />}>
              {/* <Route path="" element={<UserManagement />} /> */}
              <Route path="create_user" element={<CreateUser />} />
            </Route>

            <Route path="main" element={<AppNavBar />}>
              <Route path="formPage" element={<FormMainPage />} />
              <Route path="addFormPage" element={<AddFormPage />} />
              <Route path="editForm/:type/:label" element={<EditFormPage />} />
              <Route path="deleteForm/:type/:label" element={<DeleteFormPage />} />
              <Route path="app" element={<Application />} />

            </Route>

          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}
