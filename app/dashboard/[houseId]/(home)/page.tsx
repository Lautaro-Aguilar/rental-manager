import { Resumes } from "../_components/resumes";
import { WelcomeBackCard } from "../_components/welcome-back";

interface DashboardPageProps {
  params: {
    houseId: string;
  };
}

const DashboardPage = ({ params }: DashboardPageProps) => {
  console.log(params.houseId);
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Resumes />
      <div className="flex py-6 px-3 gap-4 items-center">
        <WelcomeBackCard />
      </div>
    </div>
  );
};
export default DashboardPage;
