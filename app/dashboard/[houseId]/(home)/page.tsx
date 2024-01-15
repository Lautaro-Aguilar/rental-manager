import Example from "../_components/areachart";
import { columns } from "../_components/columns";
import { DataTable } from "../_components/data-table";
import { Resumes } from "../_components/resumes";
import { WelcomeBackCard } from "../_components/welcome-back";
import { format } from "date-fns";

interface DashboardPageProps {
  params: {
    houseId: string;
  };
}

const blockedUsers = [
  {
    id: "1",
    blocked: {
      id: "1",
      imageUrl:
        "https://images.unsplash.com/photo-1556742042-ec1d3b7c3e0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      username: "Lauta",
      createdAt: "2021-07-06T21:24:19.000Z",
    },
  },
  {
    id: "2",
    blocked: {
      id: "2",
      imageUrl:
        "https://images.unsplash.com/photo-1556742042-ec1d3b7c3e0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      username: "John Doe",
      createdAt: "2021-07-06T21:24:19.000Z",
    },
  },
  {
    id: "3",
    blocked: {
      id: "3",
      imageUrl:
        "https://images.unsplash.com/photo-1556742042-ec1d3b7c3e0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      username: "John Doe",
      createdAt: "2021-07-06T21:24:19.000Z",
    },
  },
  {
    id: "4",
    blocked: {
      id: "3",
      imageUrl:
        "https://images.unsplash.com/photo-1556742042-ec1d3b7c3e0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      username: "John Doe",
      createdAt: "2021-07-06T21:24:19.000Z",
    },
  },
];

const DashboardPage = ({ params }: DashboardPageProps) => {
  const formattedData = blockedUsers.map((block) => ({
    ...block,
    userId: block.blocked.id,
    imageUrl: block.blocked.imageUrl,
    username: block.blocked.username,
    createdAt: format(new Date(block.blocked.createdAt), "dd/MM/yyyy"),
  }));

  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Resumes />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 ml-2">
        <div className="col-span-2 h-full">
          <WelcomeBackCard />
        </div>
        <div className="col-span-2">
          <Example />
        </div>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
};
export default DashboardPage;
