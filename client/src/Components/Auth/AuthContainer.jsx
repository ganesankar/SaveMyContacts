import React, { Fragment, useEffect, useContext } from "react";
import AuthContext from "../Context/Auth/AuthContext";
import Paper from "@material-ui/core/Paper";
import MyTabs from "./Tabs";
import Grid from "@material-ui/core/Grid";

const SignContainer = props => {
  const { isAuthenticated, token, loadUser } = useContext(AuthContext);
  useEffect(() => {
    if (token !== null) {
      loadUser();
      if (isAuthenticated) {
        props.history.push("/contacts");
      }
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  return (
    <Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Grid item xs={10} sm={8} md={6} lg={4} xl={4} className="AuthCont">
          <Paper className="paper" elevation={3}>
            <MyTabs />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SignContainer;
