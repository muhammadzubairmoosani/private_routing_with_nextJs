import { Paper, makeStyles } from "@material-ui/core";
import { PasswordInputField, InputField, Button } from "../../shared";

import Link from "next/link";
import { useRouter } from "next/router";

const getUser = () => {
  if (typeof window !== "undefined") {
    const name = localStorage.getItem("username");
    const pass = localStorage.getItem("password");
    return { name, pass };
  }
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
  },
}));

const Login = () => {
  const classes = useStyles();
  const { push } = useRouter()

  const _onSubmit = (event) => {
    event.preventDefault();

    const user = getUser();

    let username = event.target.elements.username.value;
    let password = event.target.elements.password.value;

    if (user) {
      if (username === user?.name && password === user?.pass) {

        localStorage.setItem("isLoggedIn", true);
        console.log("login success");
        // debugger

        push('/profile')

      } else {
        console.log("username or password is wrong");
      }
    } else {
      console.log("sign-up first");
    }
  };

  return (
    <form onSubmit={_onSubmit}>
      <Paper className={classes.paper} elevation={3}>
        <h1>Login</h1>

        <InputField name="username" />
        <br />
        <PasswordInputField name="password" />
        <br />

        <Button>Login</Button>
        <br />
        <br />
        <Link href="/signup">
          Create an account now!
        </Link>
      </Paper>
    </form>
  );
};

export default Login;
