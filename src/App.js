import React from 'react'
import { Route, Routes, BrowserRouter} from "react-router-dom";


// pages
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import Projects from "./pages/Projects";
import Sites from './pages/Sites';
import Project from './pages/custom/Project';
import Settings from "./pages/Settings";
import Signin from "./pages/examples/Signin";
import Signup from "./pages/examples/Signup";
import ForgotPassword from "./pages/examples/ForgotPassword";
import ResetPassword from "./pages/examples/ResetPassword";
import Lock from "./pages/examples/Lock";
import NotFoundPage from "./pages/examples/NotFound";
import ServerError from "./pages/examples/ServerError";

import Template, { BlankPage } from "./pages/Template"
import { NavigationRoutes } from "./routes" 

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route element={<Template/>}>
					<Route path={NavigationRoutes.DashboardOverview.path} element={<DashboardOverview/>}/>
					<Route path={NavigationRoutes.Projects.path} element={<Projects/>}/>
					<Route path={NavigationRoutes.Sites.path} element={<Sites/>}/>
					<Route path={NavigationRoutes.Project.path} element={<Project/>}/>
					<Route path={NavigationRoutes.Settings.path} element={<Settings/>}/>
				</Route>

				<Route element={<BlankPage/>}>
					<Route path={NavigationRoutes.Signin.path} element={<Signin/>}/>
					<Route path={NavigationRoutes.Signup.path} element={<Signup/>}/>
					<Route path={NavigationRoutes.ForgotPassword.path} element={<ForgotPassword/>}/>
					<Route path={NavigationRoutes.ResetPassword.path} element={<ResetPassword/>}/>
					<Route path={NavigationRoutes.Lock.path} element={<Lock/>}/>
					<Route path={NavigationRoutes.NotFound.path} element={<NotFoundPage/>}/>
					<Route path={NavigationRoutes.ServerError.path} element={<ServerError/>}/>
					
				</Route>
				<Route path="*" element={<NotFoundPage/>} />
			</Routes>
		</BrowserRouter>
  )
}

export default App