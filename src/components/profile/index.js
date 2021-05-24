import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { Button } from "../../shared";

const Profile = () => {
  const { push } = useRouter();

  const _singOut = () => {
    localStorage.setItem("isLoggedIn", false);
    push("/login");
  };

  return (
    <Fragment>
      <h1>Welcome to the profile page</h1>
      <Button onClick={() => push("/")}>Go to home</Button>
      Or
      <Button onClick={_singOut}>Sign out</Button>
    </Fragment>
  );
};

export default Profile;
