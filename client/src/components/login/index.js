import { Paper, makeStyles } from "@material-ui/core";
import { PasswordInputField, InputField, Button } from "../../shared";
import { useState } from "react";
import Link from "next/link";
import useAxios from "axios-hooks";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = useState({ username: "", password: "" });

  const [{ loading }, login] = useAxios(
    { url: "/login", method: "POST" },
    { manual: true }
  );

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const _onSubmit = () => {
    if (values.username && values.password) {
      // login({ data: { username: values.username, password: values.password } })
      fetch("http://localhost:4000/login", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((user) => console.log("user", user))
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Paper className={classes.paper} elevation={3}>
        <h1>Login</h1>

        <InputField onChange={handleChange} />
        <br />
        <PasswordInputField onChange={handleChange} />
        <br />

        <Button onClick={_onSubmit} loading={loading}>
          Login
        </Button>
        <br />
        <br />
        <Link href="/signup">
          <a>Create an account now!</a>
        </Link>
      </Paper>
    </form>
  );
};

export default Login;
