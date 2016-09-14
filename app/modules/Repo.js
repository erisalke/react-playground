import React from "react";


export default React.createClass({
  render: function() {
    return(
      <div>
        <h2>{this.props.params.userName}-{this.props.params.repoName}</h2>
      </div>
    )
  }
})
