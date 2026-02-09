import React from 'react';
import aboutMeImage from '../assets/about_me_image.png';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-12 md:mb-20 text-center text-white tracking-editorial">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Image */}
          <div className="w-3/4 mx-auto md:mx-0 md:w-2/5 flex items-center justify-center">
            <img 
              src={aboutMeImage} 
              alt="Giulia Rubini"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-3/5 space-y-8 font-sans">
            <p className="text-base md:text-lg text-white/70 leading-loose">
              I'm Giulia Rubini, born and raised in Milan - ITALY,
              where you breathe fashion as soon as you step out of
              your home.
            </p>
            
            <p className="text-base md:text-lg text-white/70 leading-loose">
              I followed my dream and I graduated in Fashion Design
              from NABA, an international university, where I grow in
              a mix of different cultures with people from every part
              of the world.
            </p>
            
            <p className="text-base md:text-lg text-white/70 leading-loose">
              While studying, I worked as a sales assistant because I
              wanted to be more economically independent but also because
              I've always been curious and I wanted to understand
              customers and the final part of the fashion production
              process.
            </p>
            
            <p className="text-base md:text-lg text-white/70 leading-loose">
              During my last semester, I was selected for a special
              project about sustainability with the fashion designer
              Tiziano Guardini. Together, we created a capsule collection
              that was displayed at various fashion shows, including
              the NABA Fashion Show and Sustainable Visions
              Fashion Show 2019.
            </p>
            
            <p className="text-base md:text-lg text-white/70 leading-loose">
              As a Fashion Designer, my goal is to create fresh and
              cool designs that suit the needs of the customers without
              loosing any details. I had experience working with
              denim and pants, trims, prints, hangtags and waist tag.
              I'm really curious and willing to explore other categories,
              countries and continuing to learn and improve everyday.
            </p>
            
            <div className="pt-8 space-y-2">
              <p className="text-base md:text-lg text-white/70 leading-loose">
                Thank you for your time,
              </p>
              
              <p className="text-base md:text-lg text-white/70 leading-loose">
                Following a selection of my latest works.
              </p>
              
              <p className="text-base md:text-lg text-white font-serif italic tracking-editorial mt-4">
                Enjoy!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
