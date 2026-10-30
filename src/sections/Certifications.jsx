import React from 'react';
import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Qualifications"
          title="Verified Certifications"
          subtitle="Formally accredited certifications in enterprise Java engineering and responsive front-end web standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
