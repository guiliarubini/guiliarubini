import React from 'react';
import aboutMeImage from '../assets/about_me_image.png';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Image */}
          <div className="w-full md:w-2/5 flex items-center justify-center">
            <img 
              src={aboutMeImage} 
              alt="Giulia Rubini"
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-3/5 space-y-4">
            <p className="text-lg text-white/80 leading-relaxed">
              I'm Giulia Rubini, born and raised in Milan - ITALY,
              where you breathe fashion as soon as you step out of
              your home.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              I followed my dream and I graduated in Fashion Design
              from NABA, an international university, where I grow in
              a mix of different cultures with people from every part
              of the world.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              While studying, I worked as a sales assistant because I
              wanted to be more economically independent but also be-
              cause I've always been curious and I wanted to understand
              customers and the final part of the fashion production
              process.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              During my last semester, I was selected for a special
              project about sustainability with the fashion designer
              Tiziano Guardini. Together, we created a capsule collec-
              tion that was displayed at various fashion shows, in-
              cluding the NABA Fashion Show and Sustainable Visions
              Fashion Show 2019.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              As a Fashion Designer, my goal is to create fresh and
              cool designs that suit the needs of the customers with-
              out loosing any details. I had experience working with
              denim and pants, trims, prints, hangtags and waist tag.
              I'm really curious and willing to explore other cathego-
              ries, countries and continuing to learn and improve ev-
              eryday.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              Thank you for your time,
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              Following a selection of my latest works.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed font-semibold">
              Enjoy!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
