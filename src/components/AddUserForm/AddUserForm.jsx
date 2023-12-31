import { useEffect, useState } from "react";
import { useCreateUserMutation } from "../../services/API/apiSlice";
import toast from "react-hot-toast";

const AddUserForm = () => {
  const [addUser, { isLoading, isSuccess, isError }] = useCreateUserMutation();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    about: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: name === "phone" ? String(value) : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access your values here from the inputValues object

    addUser(userData);
    setUserData({
      name: "",
      email: "",
      phone: "",
      address: "",
      about: "",
    });
  };

  // --- handle toast ---
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading ...", { id: "users" });
    }
    if (isSuccess) {
      toast.success("Successfully add user ", { id: "users" });
    }

    if (!isLoading && !isSuccess && isError) {
      toast.error("User not add..", { id: "users" });
    }
  }, [isLoading, isSuccess, isError]);

  return (
    <div className="p-5 dark:text-white">
      <h1>--- ADD USER ---</h1>
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <div className="flex-none items-center justify-between gap-5 sm:flex">
            <div className="mb-3 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="name"
                required
              />
            </div>
            <div className="mb-3 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                type="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="email"
                required
              />
            </div>
          </div>

          <div className="flex-none items-center justify-between gap-5 sm:flex">
            <div className="mb-3 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="phone"
                required
              />
            </div>

            <div className="mb-3 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                name="address"
                value={userData.address}
                onChange={handleInputChange}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="address"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your message
            </label>
            <textarea
              name="about"
              value={userData.about}
              onChange={handleInputChange}
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="about your self..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
