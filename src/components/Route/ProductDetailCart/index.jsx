import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import styles from '../../../styles/style';
import {
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineMessage,
    AiOutlineShoppingCart,
} from 'react-icons/ai';

function ProductDetailCart({ setOpen, data }) {
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);

    const handleMessageSubmit = () => {};

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    const addToCartHandler = () => {};

    return (
        <div className="bg-[#fff] ">
            {data && (
                <div className="fixed w-full h-screen top-0 left-0  z-40 flex items-center justify-center">
                    <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 8oopx:h-[75px] bg-white rounded-md shadow-sm relative p-4">
                        <RxCross1
                            size={30}
                            className="absolute right-3 top-3 z-50"
                            onClick={() => setOpen(false)}
                        />
                        <div className="block w-full 800px:flex">
                            <div className="w-full 800px:[50%]">
                                <img src={`${data.image_Url[0].url}`} alt="" />
                                <div className="flex">
                                    <img
                                        src={`${data.shop.shop_avatar.url}`}
                                        alt=""
                                        className="w-[50px] h-[50px] rounded-full mr-2"
                                    />
                                    <div>
                                        <h3 className={styles.shop_name}>
                                            {data.shop.name}
                                        </h3>
                                        <h4 className="pb-3 text-[15px]">
                                            {data.shop.ratings} Ratings
                                        </h4>
                                    </div>
                                </div>
                                <div
                                    className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`}
                                    onClick={handleMessageSubmit}>
                                    <span className="text-[#fff] flex items-center ">
                                        Send Message <AiOutlineMessage />
                                    </span>
                                </div>
                            </div>
                            <div className="w-full 800px:[50%] pt-5 pl-[5px] pr-[5px]">
                                <h1
                                    className={`${styles.productTitle} text-[20px]`}>
                                    {data.name}
                                </h1>
                                <p>{data.description}</p>
                                <div className="flex pt-3">
                                    <h3 className={styles.productDiscountPrice}>
                                        {data.discount_price}$
                                    </h3>
                                    <h4 className={styles.price}>
                                        {data.price ? data.price + '$' : null}
                                    </h4>
                                </div>
                                <div className="flex items-center mt-12 justify-between pr-3">
                                    <div>
                                        <button
                                            className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                                            onClick={decrementCount}>
                                            -
                                        </button>
                                        <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[10px]">
                                            {count}
                                        </span>
                                        <button
                                            className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                                            onClick={incrementCount}>
                                            +
                                        </button>
                                    </div>
                                    <div>
                                        {click ? (
                                            <AiFillHeart
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => setClick(!click)}
                                                color={click ? 'red' : '#333'}
                                                title="Remove from wishlist"
                                            />
                                        ) : (
                                            <AiOutlineHeart
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => setClick(!click)}
                                                title="Add to wishlist"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}
                                    onClick={() => addToCartHandler(data._id)}>
                                    <span className="text-[#fff] flex items-center">
                                        Add to cart
                                        <AiOutlineShoppingCart className="ml-1" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetailCart;
