import { BrowserRouter, Routes, Route } from "react-router-dom";
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

import { UserProvider } from "./contexts/UserContext";
import { ModalProvider } from "./contexts/ModalContext";

export default function App() {
	const [renderFinds, setRenderFinds] = useState([]);
	const [editInformation, setEditInformation] = useState(null);

	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<BrowserRouter>
				<UserProvider>
					<ModalProvider>
						<Routes>
							<Route path="/" element={<Initial />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route
								path="/students"
								element={
									<SearchStudent
										setRenderFinds={setRenderFinds}
										renderFinds={renderFinds}
									/>
								}
							/>
							<Route
								path="/newstudent"
								element={<NewStudentsScreen setRenderFinds={setRenderFinds} />}
							/>
							<Route
								path="/studentinfo/:id"
								element={
									<MenuScreen
										renderFinds={renderFinds}
										setEditInformation={setEditInformation}
										setRenderFinds={setRenderFinds}
									/>
								}
							/>
							<Route
								path="/edit"
								element={
									<EditStudentInformation
										editInformation={editInformation}
										setEditInformation={setEditInformation}
										setRenderFinds={setRenderFinds}
									/>
								}
							/>
							<Route path="/receipt" element={<Receipt />} />
							<Route path="/declaration" element={<Declaration />} />
							<Route path="/payment" element={<PaymentScreen />} />
						</Routes>
					</ModalProvider>
				</UserProvider>
			</BrowserRouter>
		</>
	);
}
