import React, { Component } from 'react';
import BackToTop from './BackToTop';
import CallToAction from './CallToAction';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Pricing from './Pricing';
import Service from './Service';
class Home extends Component {
    render() {
        return (
            <div>
                <Header />

                <Service />

                <Pricing />

                <CallToAction />

                <Contact />

                <Footer />

                <BackToTop />

            </div >
        );
    }
}
export default Home;