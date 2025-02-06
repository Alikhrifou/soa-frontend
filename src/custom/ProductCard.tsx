import React from 'react'

interface IProduct {
    image: any,
    price: any,
    productName: string,
    description: string
    handleClick: () => void
}

function ProductCard({image,price,productName,description,handleClick}: IProduct) {
    return (
        <div>
            <a href="#" className="group relative block overflow-hidden">
                <button
                    className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                >
                        
                </button>

                <img
                    src={image}
                    alt=""
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 p-10 "
                />

                <div className="relative border border-gray-100 bg-white p-6">
                    <p className="text-gray-700">
                    {price}
                        <span className="text-gray-400 line-through">{price}</span>
                    </p>

                    <h3 className="mt-1.5 text-lg font-medium text-gray-900">{productName}</h3>

                    <p className="mt-1.5 line-clamp-3 text-gray-700">
                        {description}
                    </p>

                    <form className="mt-4 flex gap-4">
                        <button onClick={handleClick} type='button'
                            className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
                        >
                            Add to Cart
                        </button>

                        <button
                            type="button"
                            className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                        >
                            Buy Now
                        </button>
                    </form>
                </div>
            </a>
        </div>
    )
}

export default ProductCard