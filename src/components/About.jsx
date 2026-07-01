import { Check } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Многопрофильная клиника с широким спектром услуг
        </h2>

        {/* Body paragraph */}
        <p className="text-lg text-muted-text mb-8 max-w-3xl">
          Anfa Clinic — Современное оборудование, лучшие специалисты в различных областях медицины, лабораторное и стационарное лечение., 
          Мы предоставляем высочайший стандарт медицинского обслуживания, 
          используя современные методы лечения и передовые технологии диагностики. 
          Наша команда состоит из квалифицированных специалистов с большим опытом работы.
        </p>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left column - Features */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1">
                <Check size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-dark-text mb-2">Квалифицированные специалисты</h3>
                <p className="text-muted-text text-sm">
                  Наши врачи имеют высшую квалификацию и постоянно совершенствуют свои навыки
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1">
                <Check size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-dark-text mb-2">Врачебные услуги</h3>
                <p className="text-muted-text text-sm">
                  Полный спектр медицинских услуг в одном месте для вашего удобства
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1">
                <Check size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-dark-text mb-2">Оперативное лечение</h3>
                <p className="text-muted-text text-sm">
                  Хирургические вмешательства провидят опытные специалисты
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Value cards */}
          <div className="space-y-4">
            <div className="card bg-blue-50 p-6 border-l-4 border-accent">
              <h3 className="font-bold text-primary mb-2">Качество и профессионализм</h3>
              <p className="text-sm text-muted-text">
                Мы гарантируем высочайший уровень обслуживания и профессионализма во всех аспектах работы
              </p>
            </div>

            <div className="card bg-green-50 p-6 border-l-4 border-accent">
              <h3 className="font-bold text-primary mb-2">Инновации и развитие</h3>
              <p className="text-sm text-muted-text">
                Постоянное внедрение новых технологий и методов для лучшего обслуживания пациентов
              </p>
            </div>

            <div className="card bg-purple-50 p-6 border-l-4 border-accent">
              <h3 className="font-bold text-primary mb-2">Ответственность и надежность</h3>
              <p className="text-sm text-muted-text">
                Мы несем полную ответственность за результаты нашей работы и здоровье наших пациентов
              </p>
            </div>
          </div>
        </div>

        {/* Learn more link */}
        <div className="pt-8">
          <a href="#" className="text-accent font-semibold hover:underline inline-flex items-center gap-2">
            Подробнее о нас →
          </a>
        </div>
      </div>
    </section>
  );
}
