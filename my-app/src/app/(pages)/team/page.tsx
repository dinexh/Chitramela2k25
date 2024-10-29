import React from 'react';
import Pic from "../../assets/Event_poster.jpeg";
import { FaInstagram } from 'react-icons/fa';
// import Navigation from '@/app/components/Navigation/Navigation';
import Footer from '@/app/components/Footer/Footer';
import Image from 'next/image';
import './Team.css';

const Team = () => {
  return (
    <div className="TeamPage-container">
      <div className="TeamPage-container-in">
        <div className="Team-one">
          <div className="Team-one-in">
            <div className="Team-one-in-heading">
              <h1>Citramela Team</h1>
            </div>
          </div>
        </div>
        <div className="Team-two">
          <div className="Team-two-in">
            <div className="Team-two-in-one">
              <div className="Team-two-in-one-in">
                <Image src={Pic} alt="Chief Executive" />
                <div className="description">
                  <p>Name <FaInstagram/></p>
                  <p>Chief Executive</p>
                </div>
              </div>              
            </div>
            <div className="Team-two-in-two">
              <div className="Team-two-in-two-in">
                <div className="Team-two-in-two-in-one">
                  <Image src={Pic} alt="Chief" />
                  <div className="description">
                    <p>Name <FaInstagram/></p>
                    <p>Chief</p>
                  </div>
                </div>
                <div className="Team-two-in-two-in-one">
                  <Image src={Pic} alt="Chief" />
                  <div className="description">
                    <p>Name <FaInstagram/></p>
                    <p>Chief</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Team-two-in-three">
              <div className="Team-two-in-three-in">
                <div className="Team-two-in-three-in-one">
                  <Image src={Pic} alt="Chief" />
                  <div className="description">
                    <p>Name <FaInstagram/></p>
                    <p>Chief</p>
                  </div>
                </div>
                <div className="Team-two-in-three-in-one">
                  <Image src={Pic} alt="Chief" />
                  <div className="description">
                    <p>Name <FaInstagram/></p>
                    <p>Chief</p>
                  </div>
                </div>
                <div className="Team-two-in-three-in-one">
                  <Image src={Pic} alt="Chief" />
                  <div className="description">
                    <p>Name <FaInstagram/></p>
                    <p>Chief</p>
                  </div>
                </div>
                <div className="Team-two-in-three-in-one">
                  <Image src={Pic} alt="Chief" />
                  <div className="description">
                    <p>Name <FaInstagram/></p>
                    <p>Chief</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Team-three">
          <div className="Team-three-in">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;