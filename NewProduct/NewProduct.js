const React = require('react');
const { useState } = require('react');

function NewProduct() {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setProductData({
      ...productData,
      photo: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('description', productData.description);
    formData.append('category', productData.category);
    formData.append('quantity', productData.quantity);
    formData.append('price', productData.price);
    formData.append('photo', productData.photo);

    fetch('/api/product/create', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted with data:', data);
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
      });
  };

  const handleCancel = () => {
    setProductData({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
      photo: null,
    });
  };

  return (
    React.createElement('div', null,
      React.createElement('h1', null, 'New Product'),
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('label', { htmlFor: 'name' }, 'Name:'),
        React.createElement('input', {
          type: 'text',
          id: 'name',
          name: 'name',
          value: productData.name,
          onChange: handleInputChange,
          required: true
        }),

        React.createElement('label', { htmlFor: 'description' }, 'Description:'),
        React.createElement('textarea', {
          id: 'description',
          name: 'description',
          value: productData.description,
          onChange: handleInputChange,
          required: true
        }),

        React.createElement('label', { htmlFor: 'category' }, 'Category:'),
        React.createElement('input', {
          type: 'text',
          id: 'category',
          name: 'category',
          value: productData.category,
          onChange: handleInputChange,
          required: true
        }),

        React.createElement('label', { htmlFor: 'quantity' }, 'Quantity:'),
        React.createElement('input', {
          type: 'number',
          id: 'quantity',
          name: 'quantity',
          value: productData.quantity,
          onChange: handleInputChange,
          required: true
        }),

        React.createElement('label', { htmlFor: 'price' }, 'Price:'),
        React.createElement('input', {
          type: 'number',
          id: 'price',
          name: 'price',
          value: productData.price,
          onChange: handleInputChange,
          required: true
        }),

        React.createElement('label', { htmlFor: 'photo' }, 'Photo:'),
        React.createElement('input', {
          type: 'file',
          id: 'photo',
          name: 'photo',
          accept: 'image/*',
          onChange: handlePhotoUpload,
          required: true
        }),

        React.createElement('button', { type: 'submit' }, 'Submit'),
        React.createElement('button', { type: 'button', onClick: handleCancel }, 'Cancel')
      )
    )
  );
}

module.exports = NewProduct;
