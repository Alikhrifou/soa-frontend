import React, { useState } from 'react';
import { useAddProductMutation } from '../features/api/apiSlice';

const AddProductForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [addProduct] = useAddProductMutation();

  const handleAddProduct = async () => {
    await addProduct({ title, price: parseFloat(price) });
    setTitle('');
    setPrice('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Add Product</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Product Name"
        className="border p-2 mb-4"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
        className="border p-2 mb-4"
      />
      <button onClick={handleAddProduct} className="bg-blue-500 text-white p-2">
        Add Product
      </button>
    </div>
  );
};

export default AddProductForm;
