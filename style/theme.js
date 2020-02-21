import { createMuiTheme } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8bc34a",
      contrastText: "#fafafa"
    },
    secondary: {
      main: "#f9fbe7",
      dark: "#99d066",
      contrastText: "#000000"
    }
  }
});

export default theme;
