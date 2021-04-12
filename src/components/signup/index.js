import { Paper, makeStyles } from "@material-ui/core";
import { PasswordInputField, InputField, Button } from "../../shared";

import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
  },
}));

const Signup = () => {
  const { push } = useRouter();
  const classes = useStyles();

  const _onSubmit = (event) => {
    event.preventDefault();

    let username = event.target.elements.username.value;
    let password = event.target.elements.password.value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("isLoggedIn", false);

    push("/login");
    console.log("sign-up success");
  };

  return (
    <form onSubmit={_onSubmit}>
      <Paper className={classes.paper} elevation={3}>
        <h1>Sign up</h1>

        <InputField name="username" />
        <br />
        <PasswordInputField name="password" />
        <br />

        <Button>Sgin-up</Button>
        <br />
        <br />
        <Link href="/login">
          Already have an account!
        </Link>
      </Paper>
    </form>
  );
};

export default Signup;