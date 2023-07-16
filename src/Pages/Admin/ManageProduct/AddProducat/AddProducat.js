import './AddProducat.css'

import React, { useState } from 'react';

const AdminPanel = () => {
  const [titleArabic, setTitleArabic] = useState('');
  const [titleEnglish, setTitleEnglish] = useState('');
  const [picture, setPicture] = useState('');
  const [price, setPrice] = useState('');
  const [width, setWidth] = useState('');
  const [weight, setWeight] = useState('');
  const [content, setContent] = useState('');

  const handleTitleArabicChange = (e) => {
    setTitleArabic(e.target.value);
  };

  const handleTitleEnglishChange = (e) => {
    setTitleEnglish(e.target.value);
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend server for further processing
    const formData = {
      titleArabic,
      titleEnglish,
      picture,
      price,
      width,
      weight,
      content,
    };

    // Make an API request to save the product
    // Example: fetch('/api/products', { method: 'POST', body: JSON.stringify(formData) })
    // Handle success/error cases accordingly
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titleArabic">Title (Arabic):</label>
        <input
          type="text"
          id="titleArabic"
          value={titleArabic}
          onChange={handleTitleArabicChange}
        />

        <label htmlFor="titleEnglish">Title (English):</label>
        <input
          type="text"
          id="titleEnglish"
          value={titleEnglish}
          onChange={handleTitleEnglishChange}
        />

        <label htmlFor="picture">Picture:</label>
        <input
          type="text"
          id="picture"
          value={picture}
          onChange={handlePictureChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={handlePriceChange}
        />

        <label htmlFor="width">Width:</label>
        <input
          type="text"
          id="width"
          value={width}
          onChange={handleWidthChange}
        />

        <label htmlFor="weight">Weight:</label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
        ></textarea>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminPanel;
