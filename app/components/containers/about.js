import React from 'react';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>About me</h1>
        <p>
          My name is...
          This is just a pet project to play around with React.
          And now comes with crunchy continous deployment to AWS! :)
        </p>
      </div>
    );
  }
});

export default Home;
