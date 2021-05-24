import React, { Fragment } from 'react'
import { Icon } from "@material-ui/core";
import { Button } from "../../shared";
import Link from "next/link";
import { getUser } from "../../functions";

const Home = () => {
  return (
    <Fragment>
      <h1>Authenticated route example with NextJs</h1>
      <h2>Welcome to the Home page</h2>

      <Button
        endIcon={<Icon>send</Icon>}
      >
        <Link href={getUser()?.isLoggedIn ? "/profile" : "/login"}>
          {getUser()?.isLoggedIn ? "Profile" : "Login"}
        </Link>
      </Button>
    </Fragment>
  );
};

export default Home;
