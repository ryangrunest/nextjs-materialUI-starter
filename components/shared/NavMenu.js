import { Component } from "react";
import Link from "next/link";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../style/theme";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import EmailIcon from "@material-ui/icons/Email";

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Drawer
          id="NavMenu"
          anchor="top"
          open={this.state.navOpen}
          onClose={this.toggleNav}
        >
          <List>
            <Link href="/">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Divider />
            <Link href="/">
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
            <Divider />
            <Link href="/">
              <ListItem button>
                <ListItemIcon>
                  <EmailIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <IconButton
          onClick={this.toggleNav}
          variant="contained"
          color="primary"
          id="NavToggle"
        >
          {this.state.navOpen ? <CloseIcon /> : <DehazeIcon />}
        </IconButton>
      </ThemeProvider>
    );
  }
}

export default NavMenu;
