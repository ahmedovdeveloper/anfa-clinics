import Banner from "../public/anfa-clinics.jpg"

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Left side - 60% content */}
          <div className="md:col-span-2 space-y-6">
            {/* Tag */}
            <div className="inline-block">
              <span className="section-label bg-blue-100 text-accent px-3 py-1 rounded-full">
                Пионеры частной медицины
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Современное оборудование, лучшие специалисты в различных областях медицины, лабораторное и стационарное лечение.
            </h1>

          
           

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap pt-4">
              <button className="btn-outline">О нас</button>
              <button className="btn-primary">Связаться</button>
            </div>

            {/* Small text */}
            <p className="text-sm text-muted-text pt-4 max-w-md">
              Мы прикладываем все усилия для охраны Вашего здоровья
            </p>
          </div>

          {/* Right side - 40% image grid */}
         <div> 
          <img src={Banner} alt="Anfa Clinic" className="w-200px h-200px rounded-lg" />
         </div>
        </div>
      </div>
    </section>
  );
}
