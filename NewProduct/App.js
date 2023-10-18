const React = require('react');
const NewProduct = require('./NewProduct'); 

function App() {
  return (
    React.createElement('div', null,
      React.createElement('h1', null, 'New Shop'),
      React.createElement(NewProduct)
    )
  );
}

module.exports = App;
