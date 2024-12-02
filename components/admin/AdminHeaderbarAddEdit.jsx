import { useRouter } from "next/router";

const AdminHeaderbarAddEdit = ({ title, apiEndpoint }) => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <div className="flex bg-white justify-between items-center p-6 mb-6 border-b shadow-sm">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => handleNavigation(apiEndpoint)}
          className="border border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white font-semibold px-6 py-3 rounded-lg"
        >
          cancel
        </button>
        <button className="bg-blue-600 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
          create
        </button>
      </div>
    </div>
  );
};

export default AdminHeaderbarAddEdit;
