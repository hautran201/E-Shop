import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AiOutlineHeart,
    AiOutlineSearch,
    AiOutlineShoppingCart,
} from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { BiMenuAltLeft } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { RxCross1 } from 'react-icons/rx';

import Dropdown from './DropDown';
import Navbar from './Navbar';
import styles from '../../styles/style';
import { productData, categoriesData } from '../../static/data';

function Header({ activeHeading }) {
    const isAuthenticated = false;

    const [searchTerm, setSearchTerm] = useState('');
    const [searchData, setSearchData] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [active, setActive] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openWishlist, setOpenWishlist] = useState(false);
    const [open, setOpen] = useState(false);

    const handleSearchChange = (e) => {
        let term = e.target.value;
        setSearchTerm(term);

        const fillterProduct =
            productData &&
            productData.filter((product) =>
                product.name.toLowerCase().includes(term.toLowerCase()),
            );

        console.log(fillterProduct);
        setSearchData(fillterProduct);
    };

    window.addEventListener('scroll', () => {
        if (window.scrollY > 70) {
            setActive(true);
        } else {
            setActive(false);
        }
    });

    return (
        <>
            <div className={`${styles.section}`}>
                <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
                    <div>
                        <Link to="/">
                            <img
                                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                                alt=""
                            />
                        </Link>
                    </div>
                    {/* search box */}
                    <div className="w-[50%] relative">
                        <input
                            type="text"
                            placeholder="Search Product..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                        />
                        <AiOutlineSearch
                            size={30}
                            className="absolute right-2 top-1.5 cursor-pointer"
                        />
                        {searchData && searchData.length !== 0 ? (
                            <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                                {searchData &&
                                    searchData.map((product, index) => {
                                        return (
                                            <Link to={`/product/${product.id}`}>
                                                <div className="w-full flex items-start-py-3">
                                                    <img
                                                        src={`${product.image_Url[0]?.url}`}
                                                        alt=""
                                                        className="w-[40px] h-[40px] mr-[10px]"
                                                    />
                                                    <h1>{product.name}</h1>
                                                </div>
                                            </Link>
                                        );
                                    })}
                            </div>
                        ) : null}
                    </div>

                    <div className={`${styles.button}`}>
                        <Link
                            to={`${isSeller ? '/dashboard' : '/shop-create'}`}>
                            <h1 className="text-[#fff] flex items-center">
                                {isSeller ? 'Go Dashboard' : 'DiTech Seller'}{' '}
                                <IoIosArrowForward className="ml-1" />
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
            {/* categories */}
            <div
                className={`${
                    active === true ? 'shadow-sm fixed top-0 left-0 z-10' : null
                } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}>
                <div
                    className={`${styles.section} relative ${styles.noramlFlex} justify-between`}>
                    {/* categories */}
                    <div onClick={() => setDropDown(!dropDown)}>
                        <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
                            <BiMenuAltLeft
                                size={30}
                                className="absolute top-3 left-2"
                            />
                            <button
                                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}>
                                All Categories
                            </button>
                            <IoIosArrowDown
                                size={20}
                                className="absolute right-2 top-4 cursor-pointer"
                                onClick={() => setDropDown(!dropDown)}
                            />
                            {dropDown ? (
                                <Dropdown
                                    categoriesData={categoriesData}
                                    setDropDown={setDropDown}
                                />
                            ) : null}
                        </div>
                    </div>

                    {/* navitems */}
                    <div className={`${styles.noramlFlex}`}>
                        <Navbar active={activeHeading} />
                    </div>

                    <div className="flex">
                        <div className={`${styles.noramlFlex}`}>
                            <div
                                className="relative cursor-pointer mr-[15px]"
                                onClick={() => setOpenWishlist(true)}>
                                <AiOutlineHeart
                                    size={30}
                                    color="rgb(255 255 255 / 83%)"
                                />
                                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                                    {/* {wishlist && wishlist.length} */}1
                                </span>
                            </div>
                        </div>

                        <div className={`${styles.noramlFlex}`}>
                            <div
                                className="relative cursor-pointer mr-[15px]"
                                onClick={() => setOpenCart(true)}>
                                <AiOutlineShoppingCart
                                    size={30}
                                    color="rgb(255 255 255 / 83%)"
                                />
                                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                                    {/* {cart && cart.length} */}2
                                </span>
                            </div>
                        </div>

                        <div className={`${styles.noramlFlex}`}>
                            <div className="relative cursor-pointer mr-[15px]">
                                {isAuthenticated ? (
                                    <Link to="/profile">
                                        {/* <img
                                            src={`${user?.avatar?.url}`}
                                            className="w-[35px] h-[35px] rounded-full"
                                            alt=""
                                        /> */}
                                    </Link>
                                ) : (
                                    <Link to="/sign-in">
                                        <CgProfile
                                            size={30}
                                            color="rgb(255 255 255 / 83%)"
                                        />
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* cart popup */}
                        {/* {openCart ? <Cart setOpenCart={setOpenCart} /> : null} */}

                        {/* wishlist popup */}
                        {/* {openWishlist ? (
                            <Wishlist setOpenWishlist={setOpenWishlist} />
                        ) : null} */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
