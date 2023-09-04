import React from "react";

class ExerciseClassComponent extends React.Component {
  render() {
    console.log("PROPS", this.props);
    return (
      <div style={{ backgroundColor: "aquamarine", border: "4px solid red", marginTop: "3rem" }}>
        <h1 style={{ fontSize: "40px", color: "red" }}>{this.props.imgTitle}</h1>
        <img style={{ width: "50%" }} src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}

export default ExerciseClassComponent;
