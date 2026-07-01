export default function CTABanner() {
  return (
    <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
      {/* Decorative lines background */}
      <div className="absolute left-0 top-0 bottom-0 w-32 opacity-10">
        <svg viewBox="0 0 100 200" preserveAspectRatio="none" className="w-full h-full">
          <line x1="10" y1="0" x2="10" y2="200" stroke="white" strokeWidth="1" />
          <line x1="30" y1="0" x2="30" y2="200" stroke="white" strokeWidth="1" />
          <line x1="50" y1="0" x2="50" y2="200" stroke="white" strokeWidth="1" />
          <line x1="70" y1="0" x2="70" y2="200" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Doctor illustration placeholder */}
      <div className="absolute right-0 top-0 bottom-0 w-40 md:w-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          {/* Heading */}
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Консультация?
          </h3>

          {/* Subtext */}
          <p className="text-white text-lg mb-8 opacity-90">
            Запишитесь сейчас и получите скидку 10% на диагностику МРТ, МСКТ и рентген
          </p>

          {/* Button */}
          <button className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Записаться
          </button>
        </div>
      </div>
    </section>
  );
}
