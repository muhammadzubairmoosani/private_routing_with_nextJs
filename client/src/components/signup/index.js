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

const Signup = () => {
  const classes = useStyles();

  const [values, setValues] = useState({ username: "", password: "" });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <h1>Sign up</h1>

      <InputField onChange={handleChange} />
      <br />
      <PasswordInputField onChange={handleChange} />
      <br />

      <Button>Sgin-up</Button>
      <br />
      <br />
      <Link href="/login">
        <a>Already have an account!</a>
      </Link>
    </Paper>
  );
};

export default Signup;
