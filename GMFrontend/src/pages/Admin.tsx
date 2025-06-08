import { useState } from "react";
import Footer from "../components/footer/Footer";
import Title from "../components/form/Title";
import ErrorMessage from "../components/messages/ErrorMessage";
import InfoMessage from "../components/messages/InfoMessage";
import Nav from "../components/navbar/Nav";
import { useGetAllUsers } from "../hooks/adminHooks/useGetAllUsers";

import UserList from "../components/userList/UserList";

const Admin = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data: userDtos, error, isLoading } = useGetAllUsers(pageNo - 1);

  return (
    <>
      <Nav />

      <div className="max-w-[1150px] px-[1rem] mx-auto">
        <div className=" flex justify-between items-baseline">
          <div className="flex items-baseline">
            <Title title="Admin Dashboard" styles="text-[3rem]" />
          </div>
        </div>
        {isLoading && (
          <div className="flex justify-center items-center min-h-[6rem]">
            <InfoMessage fontSize="[2rem]" message="Loading users..." />
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center min-h-[6rem]">
            <ErrorMessage message={error.message} fontSize="[2rem]" />
          </div>
        )}
        {userDtos && userDtos?.data ? (
          <div className="text-text">
            <p className="text-text">
              Total Users: {userDtos?.data.totalElements}
            </p>
            <UserList userDtos={userDtos.data.content} />
          </div>
        ) : (
          !isLoading &&
          !error && <InfoMessage message="No users to show" fontSize="[2rem]" />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Admin;
