import React from 'react';
import CardItem from '../CardItem';
import Footer from '../Footer';

import '../../App.css';
import '../Cards.css';
import './About.css';

export default function About() {
  return (
    <>
      <div className='about-page'>
        <h1 className='about'>About</h1>
        {/* About */}
        <div className='heading'>
          <h2>WHO WE ARE ?</h2>
          <div className='about__container'>
            <div><img src='images/img-12.jpg' /></div>
            <div>
              BackPack, the world's largest travel platform*, helps 463 million travelers each month** make every trip their best trip. Travelers across the globe use the BackPack site and app to browse more than 859 million reviews and opinions of 8.6 million accommodations, restaurants, experiences, airlines and cruises. Whether planning or on a trip, travelers turn to BackPack to compare low prices on hotels, flights and cruises, book popular tours and attractions, as well as reserve tables at great restaurants. BackPack, the ultimate travel companion, is available in 49 markets and 28 languages.
              <br/><br/>
              Matt Goldberg is President and CEO of BackPack Group, the largest travel guidance platform in the world. Matt has more than 20 years’ leadership experience across a diversity of sectors, including travel, digital media, e-commerce, and data, where he’s helped drive innovation and expansion across various businesses. Previously, Matt was Executive Vice President, North America and Global Operations for The Trade Desk, a data-driven global media buying and advertising platform. Before joining The Trade Desk, Matt served as Global Head of M&A and Strategic Alliances and Head of India for News Corp, as well as Senior Vice President, Global Market Development and Head of Corporate Development for Qurate, formerly known as QVC.</div>
          </div>
        </div>
        {/* services */}
        <div>
          <section className='heading'>
            <h2>Enjoy Our Services</h2>
            <div className='about-container'>
              <div className='about-wrapper'>
                <ul className='about-items'>
                  <CardItem
                    src="img-9.jpg"
                    text="Explore Nature And Hidden Waterfalls.."
                    label="Adventure"
                  ></CardItem>
                  <CardItem
                    src="img-2.jpg"
                    text="Travel through the Islands of Bali in a Private Cruise"
                    label="Luxury"
                  ></CardItem>
                  <CardItem
                    src="img-4.jpg"
                    text="Have A Look On Some Unseen Beautiful Spots.."
                    label="Some Unseen Sopts"
                  ></CardItem>
                  <CardItem
                    src="img-3.jpg"
                    text="Spend One Day Picnic With your Family And Friends.."
                    label="Hill stataion"
                  ></CardItem>
                  <CardItem
                    src="img-8.jpg"
                    text="A Tour To Historical Monuments.."
                    label="History"
                  ></CardItem>
                </ul>
              </div>
            </div>
          </section>

          <section className='heading'>
            <h2>Explore these destinations</h2>
            <div className='about-container'>
              <div className='about-wrapper'>
                <ul className='about-items'>
                  <CardItem
                    src="destination-1.jpg"
                    text="Budapest, Hungary"
                    label="Europe"
                    path="/about/activity"
                  ></CardItem>
                  <CardItem
                    src="destination-2.jpg"
                    text="Lisbon, Portugal"
                    label="Europe"
                    path="/about/activity"
                  ></CardItem>
                  <CardItem
                    src="destination-3.jpg"
                    text="Berlin, Germany"
                    label="Europe"
                    path="/about/activity"
                  ></CardItem>
                  <CardItem
                    src="destination-4.jpg"
                    text="London, England"
                    label="Europe"
                    path="/about/activity"
                  ></CardItem>
                  <CardItem
                    src="destination-5.jpg"
                    text="Delft, Holland"
                    label="Europe"
                    path="/about/activity"
                  ></CardItem>
                </ul>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>


  );
}