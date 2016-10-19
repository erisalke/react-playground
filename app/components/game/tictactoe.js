import React from 'react';

const TTT = React.createClass({

  render: function() {
    var board = [0,0,0,
                 0,0,0,
                 0,0,0]
    return (
      <div className = 'main-containerX'>
        <div className = 'boardX'>
          {
            board.map((tile, i) =>
                  <div key={i} className='cellX' data-indx = {i} > {i} </div>
            )
          }
        </div>
      </div>
    );
  }
});

export default TTT;
