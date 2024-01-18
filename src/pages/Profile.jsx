import React, { useContext } from "react";
import { Context } from "../index";
import Loader from "../components/Loader";

const Profile = () => {
  const { loading, isAuthenticated, user } = useContext(Context);

  console.log(user);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
