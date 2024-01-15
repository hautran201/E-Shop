import React, { useEffect, useState } from 'react';

import Header from '../components/Layouts/Header';
import Footer from '../components/Layouts/Footer';
import ProductCard  from "../components/Route/ProductCard";
import { productData } from '../static/data';
import styles from '../styles/style';

function BestSellingPage() {
    const [data, setData] = useState([]);
    // const {allProducts,isLoading} = useSelector((state) => state.products);
  
    useEffect(() => {
    //   const allProductsData = allProducts ? [...allProducts] : [];
      const sortedData = productData?.sort((a,b) => b.sold_out - a.sold_out); 
      setData(sortedData);
    }, [productData]);
  
    return (
     <>
      <div>
        <Header activeHeading={2} />
        <br />
        <br />
        <div className={`${styles.section}`}>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
          </div>
        </div>
        <Footer />
      </div>
     </>
    );
}

export default BestSellingPage;
