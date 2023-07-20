import React from "react";

class Career extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.jobs[0]}</h1>
        <h1>{this.props.jobs[1]}</h1>
        <h1>{this.props.jobs[2]}</h1>
      </>
    );
  }
}

export default Career;
