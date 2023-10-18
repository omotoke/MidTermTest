const React = require('react');
const NewShop = require('./NewShop');

function App() {
  const handleSubmit = (shopData) => {
    // Handle form submission, e.g., send data to an API.
    console.log('Form submitted with data:', shopData);
  };

  const handleCancel = () => {
    // Handle cancellation or form reset if needed.
    // Optionally, you can reset the form state here.
    console.log('Form cancelled');
  };

  return (
    <div>
      <NewShop onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}

module.exports = App;
