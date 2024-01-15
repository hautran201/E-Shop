import React from 'react';

import Header from '../components/Layouts/Header';
import EventCard from "../components/Events/EventCard";
import { productData } from '../static/data';

function EventsPage() {
   
    return (
         <div>
            <Header activeHeading={4} />
            <EventCard data={productData && productData[0]} />
          </div>
    );
}

export default EventsPage;
