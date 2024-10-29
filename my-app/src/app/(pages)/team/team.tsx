import Navigation from '@/app/components/Navigation/Navigation';
import Footer from '@/app/components/Footer/Footer';
import Image from 'next/image';
import './Team.css';
import type { Metadata } from "next";

// SEO-specific metadata for the team page
export const metadata: Metadata = {
  title: "Chitramela 2025 - Meet the Team",
  description: "Get to know the organizers, artists, and visionaries behind Chitramela 2025. Meet our team!",
  keywords: "Chitramela team, organizers, artists, festival leaders",
}


const teamMembers = [
  {
    name: 'John Doe',
    image: '/assets/team/john-doe.jpg',
    designation: 'Festival Director',
    socialLinks: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      instagram: 'https://instagram.com/johndoe'
    }
  },
  // Add more team members here
];

export default function Team() {
  return (
    <div className="team-component">
      <div className="team-component-nav">
        <Navigation />
      </div>

      <div className="team-component-content">
        <h1 className="team-component-heading">Our Team</h1>
        <div className="team-component-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <div className="team-member-image">
                <Image src={member.image} alt={member.name} 
                  width={600}
                  height={400}
                  layout="responsive"
                />
              </div>
              <h2 className="team-member-name">{member.name}</h2>
              <p className="team-member-designation">{member.designation}</p>
              <div className="team-member-social">
                {Object.entries(member.socialLinks).map(([platform, link]) => (
                  <a key={platform} href={link} target="_blank" rel="noopener noreferrer" className="team-member-social-link">
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="team-component-footer">
        <Footer />
      </div>
    </div>
  );
}
