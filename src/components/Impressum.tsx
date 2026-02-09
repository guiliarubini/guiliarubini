import React from 'react';

const Impressum: React.FC = () => {
  return (
    <section id="impressum" className="py-12 md:py-16 px-6 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center text-white/40 tracking-editorial">Impressum</h2>
        
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="space-y-1">
            <p className="text-base text-white/30 font-sans">
              Giulia Rubini
            </p>
            <p className="text-base text-white/30 font-sans">
              Fashion Designer
            </p>
          </div>
          
          <div className="pt-2 space-y-1">
            <p className="text-sm text-white/30 font-sans">
              E-Mail: <a href="mailto:rubini.fashiondesigner@gmail.com" className="hover:text-white/50 transition-all duration-500">rubini.fashiondesigner@gmail.com</a>
            </p>
            <p className="text-sm text-white/30 font-sans">
              Telefon: <a href="tel:+393492959753" className="hover:text-white/50 transition-all duration-500">+39 349 295 9753</a>
            </p>
          </div>
          
          <div className="pt-4">
            <p className="text-xs text-white/20 font-sans leading-relaxed">
              Dieses Portfolio dient ausschließlich der Darstellung persönlicher Arbeiten.
              <br />
              Es werden keine Waren oder Dienstleistungen über diese Website angeboten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
