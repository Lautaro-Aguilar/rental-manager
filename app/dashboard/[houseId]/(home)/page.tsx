import Example from "../_components/areachart";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 px-3 max-h-72">
        <div className="col-span-2 h-full">
          <WelcomeBackCard />
        </div>
        <div className="col-span-2">
          <Example />
        </div>
        {/* Add your other cards here */}
      </div>
    </div>
  );
};
export default DashboardPage;
