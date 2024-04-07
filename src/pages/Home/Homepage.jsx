import React, { useState } from 'react';
import {
    OurWorks,
    Reviews,
    WeOffer,
    WhyUs,
    Сarousel,
    Answer,
    Contacts,
} from '../../components/Home';

const Homepage = () => {
    const [carouselFinished, setCarouselFinished] = useState(false);

    const handleCarouselFinish = () => {
        setCarouselFinished(true);
    };

    return (
        <>
            <Сarousel />
            <WhyUs />
            <WeOffer onFinish={handleCarouselFinish} />
            {carouselFinished && (
                <>
                    <OurWorks />
                    <Reviews />
                    <Answer />
                    <Contacts />
                </>
            )}
        </>
    );
};

export default Homepage;