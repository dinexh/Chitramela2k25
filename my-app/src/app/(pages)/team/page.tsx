import './Team.css';
import React from 'react';
import Pic from "../../assets/Pic.png";
import { FaInstagram } from 'react-icons/fa';
import Footer from '@/app/components/Footer/Footer';
import Image from 'next/image';
import { teamMembers } from '@/app/data/team';
import Link from 'next/link';

const Team = () => {
  return (
    <div className="TeamPage-container">
      <div className="TeamPage-container-in">
        <div className="Team-one">
          <div className="Team-one-in">
              <h1>Citramela Team</h1>
          </div>
        </div>
        <div className="Team-two">
          <div className="Team-two-in">
            <div className="Team-two-in-one">
              <div className="Team-two-in-one-in">
              <Image src={Pic} alt="Chief" width={300} height={300} />
                <div className="description">
                    <p>Name</p>
                    <p>Chief</p>
                    <p>Contact : <FaInstagram/> </p>
                  </div>
              </div>              
            </div>
            <div className="Team-two-in-two">
              <div className="Team-two-in-two-in">
                <div className="Team-two-in-two-in-one">
                <Image src={Pic} alt="Chief" width={300} height={300} />
                  <div className="description">
                    <p>Name</p>
                    <p>Chief</p>
                    <p>Contact : <FaInstagram/> </p>
                  </div>
                </div>
                <div className="Team-two-in-two-in-one">
                  <Image src={Pic} alt="Chief" width={300} height={300} />
                  <div className="description">
                    <p>Name</p>
                    <p>Chief</p>
                    <p>Contact : <FaInstagram/> </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Team-two-in-three">
              <div className="Team-two-in-three-in">
                {
                  teamMembers.map((member,index)=>(
                    <div key={index} className="Team-two-in-three-in-one">
                      <Image src={member.image} alt={member.designation} width={250} height={250}/>
                      <div className="description">
                        <p>{member.name}</p>
                        <p>{member.designation}</p>
                        <p>Contact: <Link href={member.instagram} legacyBehavior ><a><FaInstagram/></a></Link></p>
                      </div>
                    </div>
                    
                ))}
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