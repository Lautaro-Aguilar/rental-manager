import { Container } from "@/components/container";
import Sidebar from "@/components/sidebar";

interface DashboardProps {
  params: { username: string };
  children: React.ReactNode;
}

const Dashboard = async ({ children, params }: DashboardProps) => {
  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};
export default Dashboard;
