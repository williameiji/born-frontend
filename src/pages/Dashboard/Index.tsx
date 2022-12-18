import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
import TopBar from "../../layouts/TopBar";
import SideBar from "../../layouts/SideBar";
import { PropsWithChildren } from "react";

export default function Home({ children }: PropsWithChildren) {
	return (
		<>
			<TopBar />
			<DashboardLayout>
				<SideBar />
				{children}
			</DashboardLayout>
		</>
	);
}
