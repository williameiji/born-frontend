import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import GlobalResetStyle from "./assets/css/GlobalResetStyle.css";
import GlobalStyle from "./assets/css/GlobalStyle";
import Login from "./pages/Login";
import SearchStudent from "./pages/Dashboard/SearchStudent";
import NewStudentsScreen from "./pages/Dashboard/NewStudentsScreen";
import EditStudentInformation from "./pages/Dashboard/EditStudentInformation";
import Receipt from "./pages/Dashboard/Receipt";
import Signup from "./pages/Signup";
import Declaration from "./pages/Dashboard/Declaration";
import MenuScreen from "./pages/Dashboard/MenuScreen";
import PaymentScreen from "./pages/Dashboard/PaymentScreen";
import Initial from "./pages/InitalScreen";
import { getToken } from "./shared/getToken";

import { UserProvider } from "./contexts/UserContext";
import { ModalProvider } from "./contexts/ModalContext";
import { EditProvider } from "./contexts/EditInformationContext";

export default function App() {
	const [renderFinds, setRenderFinds] = useState<[]>([]);

	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
				<UserProvider>
					<EditProvider>
						<ModalProvider>
							<Routes>
								<Route path="/" element={<Initial />} />
								<Route path="/login" element={<Login />} />
								<Route path="/signup" element={<Signup />} />
								<Route
									path="/students"
									element={
										<ProtectedRouteGuard>
											<SearchStudent
												setRenderFinds={setRenderFinds}
												renderFinds={renderFinds}
											/>
										</ProtectedRouteGuard>
									}
								/>
								<Route
									path="/newstudent"
									element={
										<ProtectedRouteGuard>
											<NewStudentsScreen setRenderFinds={setRenderFinds} />
										</ProtectedRouteGuard>
									}
								/>
								<Route
									path="/studentinfo/:id"
									element={
										<ProtectedRouteGuard>
											<MenuScreen
												renderFinds={renderFinds}
												setRenderFinds={setRenderFinds}
											/>
										</ProtectedRouteGuard>
									}
								/>
								<Route
									path="/edit"
									element={
										<ProtectedRouteGuard>
											<EditStudentInformation setRenderFinds={setRenderFinds} />
										</ProtectedRouteGuard>
									}
								/>
								<Route
									path="/receipt"
									element={
										<ProtectedRouteGuard>
											<Receipt />
										</ProtectedRouteGuard>
									}
								/>
								<Route
									path="/declaration"
									element={
										<ProtectedRouteGuard>
											<Declaration />
										</ProtectedRouteGuard>
									}
								/>
								<Route
									path="/payment"
									element={
										<ProtectedRouteGuard>
											<PaymentScreen />
										</ProtectedRouteGuard>
									}
								/>
							</Routes>
						</ModalProvider>
					</EditProvider>
				</UserProvider>
			</BrowserRouter>
		</>
	);
}

function ProtectedRouteGuard(props: React.PropsWithChildren) {
	const token = getToken();

	if (!token) {
		return <Navigate to="/login" />;
	}

	return <>{props.children}</>;
}
