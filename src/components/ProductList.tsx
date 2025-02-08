import React from 'react';
import { useFetchProductsQuery, useAddProductMutation } from '../features/api/apiSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import ProductCard from '../custom/ProductCard';
import { Description } from '@headlessui/react';

const ProductList: React.FC = () => {
  const { data: products, error, isLoading } = useFetchProductsQuery();
  const [addProduct] = useAddProductMutation();
  const dispatch = useDispatch();

  const handleAddToCart = (productId: string, description: string, prix: number) => {
    dispatch(addToCart({ id: productId, description: description, prix: prix, quantity: 1 }));
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
        {products?.map((product:any)  => (

          <ProductCard imageUrl={product.imageUrl} description={product.description} prix={product.prix} key={product.id} handleClick={() => handleAddToCart(product.id, product.description, product.prix)}
            reference={''} />

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
