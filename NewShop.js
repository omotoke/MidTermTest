const React = require('react');
const { useState } = require('react');

function NewShop({ onSubmit, onCancel }) {
  const [shopData, setShopData] = useState({
    name: '',
    description: '',
    logo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShopData({
      ...shopData,
      [name]: value,
    });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setShopData({
      ...shopData,
      logo: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(shopData);
  };

  return (
    <div>
      <h1>New Shop</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={shopData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={shopData.description}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="logo">Logo:</label>
        <input
          type="file"
          id="logo"
          name="logo"
          accept="image/*"
          onChange={handleLogoUpload}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

module.exports = NewShop;
