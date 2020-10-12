import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    const { value, typeClassName, display } = this.props;

    let onChangeData = (event) => {
      const data = event.target.value;
      this.props.onChangeData(data);
    };

    return (
      <div>
        <input
          value={value}
          className={typeClassName}
          placeholder={display}
          onChange={onChangeData}
        ></input>
      </div>
    );
  }
}

export default Input;
