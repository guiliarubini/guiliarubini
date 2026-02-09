import React from 'react';

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="py-12 md:py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-12 md:mb-24 text-center text-white tracking-editorial">Contacts</h2>
        
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-luxury text-white/40 font-sans">
              Email:
            </p>
            <a 
              href="mailto:g.rubini.fashiondesigner@gmail.com"
              className="block text-base md:text-lg text-white/60 hover:text-white transition-all duration-700 font-sans"
            >
              g.rubini.fashiondesigner@gmail.com
            </a>
          </div>
          
          <div className="space-y-2 pt-4">
            <p className="text-xs uppercase tracking-luxury text-white/40 font-sans">
              Phone:
            </p>
            <a 
              href="tel:+393492959753"
              className="block text-base md:text-lg text-white/60 hover:text-white transition-all duration-700 font-sans"
            >
              +39 3492959753
            </a>
          </div>
          
          <div className="space-y-2 pt-4">
            <p className="text-xs uppercase tracking-luxury text-white/40 font-sans">
              LinkedIn:
            </p>
            <a 
              href="https://www.linkedin.com/in/giulia-rubini-387550177/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base md:text-lg text-white/60 hover:text-white transition-all duration-700 font-sans"
            >
              Giulia Rubini
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
