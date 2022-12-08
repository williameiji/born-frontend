import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
import TopBar from "../../layouts/TopBar/TopBar";
import SideBar from "../../layouts/SideBar/SideBar";

export default function Home(props) {
	return (
		<>
			<TopBar />
			<DashboardLayout>
				<SideBar />
				{props.children}
			</DashboardLayout>
		</>
	);
}
