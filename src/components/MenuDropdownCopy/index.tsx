import * as React from "react";

import "./scss/index.scss";

class MenuDropdown extends React.Component<
  {
    head: React.ReactElement<{}>;
    content: React.ReactElement<{}>;
  },
  { active: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  render() {
    return (
      <li className="list-inline-item dropdown" 
        data-testid="user-btn"
        onMouseOver={() => this.setState({ active: true })}
      >
        {this.props.head}

        <div
          className={`dropdown-menu${
            this.state.active ? "dropdown-menu--visible" : ""
          }`}
        >
          {this.props.content}
        </div>
      </li>
    );
  }
}

export default MenuDropdown;
