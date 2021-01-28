import { Paper, makeStyles } from "@material-ui/core";
import { PasswordInputField, InputField, Button } from "../../shared";
import { useState } from "react";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
  },
}));

const Login = () => {
  const classes = useStyles();

  const [values, setValues] = useState({ username: "", password: "" });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <h1>Login</h1>

      <InputField onChange={handleChange} />
      <br />
      <PasswordInputField onChange={handleChange} />
      <br />

      <Button>Login</Button>
      <br />
      <br />
      <Link href="/signup">
        <a>Create an account now!</a>
      </Link>
    </Paper>
  );
};

export default Login;
