import { Component } from "react";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import theme from "../style/theme";
import Container from "@material-ui/core/Container";
import Layout from "../components/shared/Layout.js";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const styles = theme => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  }
});

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Layout page="Home">
        <ThemeProvider theme={theme}>
          <section className={classes.root}>
            <Container maxWidth="lg">
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Paper color="primary">
                    <Typography variant="h1" component="h2" gutterBottom>
                      h1. Heading
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper color="primary">
                    <Typography variant="subtitle1">Subtitle 1</Typography>
                    <Typography variant="h2" gutterBottom>
                      h2. Heading
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                      h3. Heading
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                      h4. Heading
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      h5. Heading
                    </Typography>
                    <Typography variant="h6">h6. Heading</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      subtitle1. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      subtitle2. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      body1. Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Quos blanditiis tenetur unde suscipit, quam beatae
                      rerum inventore consectetur, neque doloribus, cupiditate
                      numquam dignissimos laborum fugiat deleniti? Eum quasi
                      quidem quibusdam.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Quos blanditiis tenetur unde suscipit, quam beatae
                      rerum inventore consectetur, neque doloribus, cupiditate
                      numquam dignissimos laborum fugiat deleniti? Eum quasi
                      quidem quibusdam.
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom>
                      button text
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      caption text
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                      overline text
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={7}>
                  <Card>
                    <Typography variant="body1">
                      body1. Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Quos blanditiis tenetur unde suscipit, quam beatae
                      rerum inventore consectetur, neque doloribus, cupiditate
                      numquam dignissimos laborum fugiat deleniti? Eum quasi
                      quidem quibusdam.
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </section>
        </ThemeProvider>
      </Layout>
    );
  }
}

export default withStyles(styles)(Index);
