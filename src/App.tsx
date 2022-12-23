import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import GlobalResetStyle from "./assets/css/GlobalResetStyle.css";
import GlobalStyle from "./assets/css/GlobalStyle";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Initial from "./pages/InitalScreen";
import { getToken } from "./shared/getToken";
import Loading from "./shared/Loading";

import { UserProvider } from "./contexts/UserContext";
import { ModalProvider } from "./contexts/ModalContext";
import { EditProvider } from "./contexts/EditInformationContext";
import { InformationProvider } from "./contexts/InformationContext";

const SearchStudent = lazy(() => import("./pages/Dashboard/SearchStudent"));
const NewStudentsScreen = lazy(
	() => import("./pages/Dashboard/NewStudentsScreen")
);
const MenuScreen = lazy(() => import("./pages/Dashboard/MenuScreen"));
const EditStudentInformation = lazy(
	() => import("./pages/Dashboard/EditStudentInformation")
);
const Declaration = lazy(() => import("./pages/Dashboard/Declaration"));
const Receipt = lazy(() => import("./pages/Dashboard/Receipt"));
const PaymentScreen = lazy(() => import("./pages/Dashboard/PaymentScreen"));

export default function App() {
	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
				<UserProvider>
					<EditProvider>
						<ModalProvider>
							<InformationProvider>
								<Routes>
									<Route path="/" element={<Initial />} />
									<Route path="/login" element={<Login />} />
									<Route path="/signup" element={<Signup />} />

									<Route
										path="/students"
										element={
											<ProtectedRouteGuard>
												<SearchStudent />
											</ProtectedRouteGuard>
										}
									/>
									<Route
										path="/newstudent"
										element={
											<Suspense fallback={<Loading />}>
												<ProtectedRouteGuard>
													<NewStudentsScreen />
												</ProtectedRouteGuard>
											</Suspense>
										}
									/>
									<Route
										path="/studentinfo/:id"
										element={
											<Suspense fallback={<Loading />}>
												<ProtectedRouteGuard>
													<MenuScreen />
												</ProtectedRouteGuard>
											</Suspense>
										}
									/>
									<Route
										path="/edit"
										element={
											<Suspense fallback={<Loading />}>
												<ProtectedRouteGuard>
													<EditStudentInformation />
												</ProtectedRouteGuard>
											</Suspense>
										}
									/>
									<Route
										path="/receipt"
										element={
											<Suspense fallback={<Loading />}>
												<ProtectedRouteGuard>
													<Receipt />
												</ProtectedRouteGuard>
											</Suspense>
										}
									/>
									<Route
										path="/declaration"
										element={
											<Suspense fallback={<Loading />}>
												<ProtectedRouteGuard>
													<Declaration />
												</ProtectedRouteGuard>
											</Suspense>
										}
									/>
									<Route
										path="/payment"
										element={
											<Suspense fallback={<Loading />}>
												<ProtectedRouteGuard>
													<PaymentScreen />
												</ProtectedRouteGuard>
											</Suspense>
										}
									/>
								</Routes>
							</InformationProvider>
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
