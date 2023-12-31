import React from 'react';
import styles from '../../styles/style';
import { Link } from 'react-router-dom';
import CountDown from './CountDown';

function EventCard({ data, active }) {
    const addToCartHandler = () => {};
    return (
        <div
            className={`w-full block bg-white rounded-lg ${
                active ? 'unset' : 'mb-12'
            } lg:flex p-2`}>
            <div className="w-full lg:-w[50%] m-auto">
                <img src={`${data.image_Url[0]?.url}`} alt="" />
            </div>
            <div className="w-full lg:[w-50%] flex flex-col justify-center">
                <h2 className={`${styles.productTitle}`}>{data.name}</h2>
                <p>{data.description}</p>
                <div className="flex py-2 justify-between">
                    <div className="flex">
                        <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
                            {data.discount_price}$
                        </h5>
                        <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
                            {data.price}$
                        </h5>
                    </div>
                    <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
                        {data.total_sell} sold
                    </span>
                </div>
                <CountDown data={data} />
                <br />
                <div className="flex items-center">
                    <Link to={`/product/${data.id}?isEvent=true`}>
                        <div className={`${styles.button} text-[#fff]`}>
                            See Details
                        </div>
                    </Link>
                    <div
                        className={`${styles.button} text-[#fff] ml-5`}
                        onClick={() => addToCartHandler(data)}>
                        Add to cart
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;
