import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    width: "50%",
  },
}));

const CommonButton = ({ children, onClick }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      fullWidth
      onClick={onClick}
      variant="contained"
      color="primary"
      size="large"
    >
      {children}
    </Button>
  );
};

export default CommonButton;
