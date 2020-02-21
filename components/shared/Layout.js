import { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import LayoutHead from "./Head";
import NavMenu from "./NavMenu";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <CssBaseline />
        <LayoutHead page={this.props.page} />
        <div id="Layout">
          {/* header */}
          <NavMenu />
          {this.props.children}
          {/* footer */}
          {/* scripts */}
        </div>
      </>
    );
  }
}

export default Layout;
