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

const Signup = () => {
  const classes = useStyles();
  const [values, setValues] = useState({ username: "", password: "" });

  const [{ loading }, signup] = useAxios(
    { url: "/signup", method: "POST" },
    { manual: true }
  );

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const _onSubmit = () => {
    if (values.username && values.password) {
      // signup({ data: { username: values.username, password: values.password } })
      fetch("http://localhost:4000/signup", {
        method: "POST",
        mode: "cors",
        credentials: "include",
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
        <h1>Sign up</h1>

        <InputField onChange={handleChange} />
        <br />
        <PasswordInputField onChange={handleChange} />
        <br />

        <Button onClick={_onSubmit} loading={loading}>
          Sgin-up
        </Button>
        <br />
        <br />
        <Link href="/login">
          <a>Already have an account!</a>
        </Link>
      </Paper>
    </form>
  );
};

export default Signup;
