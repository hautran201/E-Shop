import React from 'react';
import styles from '../../styles/style';
import EventCard from './EventCard';
import { productData } from '../../static/data';

function Events() {
    return (
        <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
                <h1>Popular Events</h1>
            </div>

            <div className="w-full grid">
                {productData.length !== 0 && (
                    <EventCard data={productData && productData[0]} />
                )}
                <h4>{productData?.length === 0 && 'No Events have!'}</h4>
            </div>
        </div>
    );
}

export default Events;
