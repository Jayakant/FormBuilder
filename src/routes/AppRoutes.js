
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/a0_login/Login";
import ForgotPassword from "../pages/a0_login/ForgotPassword";
import HomeScreen from "../pages/a0_login/HomeScreen";
import AppNavBar from "../components/common/AppNavBar";
import EmptyTemplate from "../components/common/EmptyTemplate";
import NotFound from "../pages/404NotFound/NotFound";
import UnauthAccess from "../pages/404NotFound/UnauthAccess";
import DemoPage from "../pages/a0_login/DemoPage";
import UserManagement from "../pages/a0_user_management/UserManagement"
import CreateUser from "../pages/a0_user_management/CreateUser"
import FormMainPage from "../pages/FormMainPage";
import AddFormPage from "../pages/AddFormPage";
import EditFormPage from "../pages/EditFormPage";
import DeleteFormPage from "../pages/DeleteFormPage";
import Register from "../pages/a0_user_management/Register"
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
              <Route path="" element={<UserManagement />} />
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
