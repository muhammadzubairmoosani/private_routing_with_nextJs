import { Button, Icon } from "@material-ui/core";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Welcome to Home page</h1>

      <Button
        variant="contained"
        color="primary"
        size="large"
        endIcon={<Icon>send</Icon>}
      >
        <Link href="/login">
          Login
        </Link>
      </Button>
    </>
  );
};

export default Home;
