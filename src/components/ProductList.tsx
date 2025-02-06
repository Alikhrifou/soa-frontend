import React from 'react';
import { useFetchProductsQuery, useAddProductMutation } from '../features/api/apiSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import ProductCard from '../custom/ProductCard';

const ProductList: React.FC = () => {
  const { data: products, error, isLoading } = useFetchProductsQuery();
  const [addProduct] = useAddProductMutation();
  const dispatch = useDispatch();

  const handleAddToCart = (productId: string, productName: string, productPrice: number) => {
    dispatch(addToCart({ id: productId, title: productName, price: productPrice, quantity: 1 }));
  };

  let content;

  console.log(products)

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error loading products</div>;
  } else {
    content = (
      <section style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px" }}>
        {products?.map(product => (

          <ProductCard image={product.image} description={product.title} price={product.price} key={product.id} handleClick={() => handleAddToCart(product.id, product.title, product.price)}
            productName={''} />

        ))}
      </section>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Products</h2>
      {content}
    </div>
  );
};

export default ProductList;
