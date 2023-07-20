import React from "react";

class Career extends React.Component {
  render() {
    return (
      <>
        <h3>{this.props.jobs[0]}</h3>
        <h3>{this.props.jobs[1]}</h3>
        <h3>{this.props.jobs[2]}</h3>
      </>
    );
  }
}

export default Career;
