import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BedDouble, Droplet, Activity, HeartPulse, Stethoscope, Eye, HeartHandshake,
  Brain, Wind, Asterisk, Bone, Microscope, Pill, Sparkles, Baby, Filter,
  Waves, MonitorPlay, Radio, Zap, ScanLine, Beaker, Flame, Syringe,
  Droplets, ShowerHead, User, Smile, Ear, Hammer, Scissors, Gem,
  HelpCircle, Phone, Calendar, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { serviceDoctorMap, defaultDoctorId } from '../data/serviceDoctorMap';

const services = [
  { name: 'Стационар даволаниш', icon: BedDouble },
  { name: 'Гемодиализ', icon: Droplet },
  { name: 'Плазмаферез', icon: Activity },
  { name: 'Реанимация', icon: HeartPulse },
  { name: 'Эндокринолог', icon: Stethoscope },
  { name: 'Офтальмолог', icon: Eye },
  { name: 'Кардиолог', icon: HeartHandshake },
  { name: 'Невропатолог', icon: Brain },
  { name: 'Болалар невропатологи', icon: Brain },
  { name: 'Пульмонолог', icon: Wind },
  { name: 'Проктолог', icon: Asterisk },
  { name: 'Травматолог', icon: Bone },
  { name: 'Гепатолог', icon: Microscope },
  { name: 'Гастроэнтеролог', icon: Pill },
  { name: 'Косметолог, дерматолог', icon: Sparkles },
  { name: 'Педиатр', icon: Baby },
  { name: 'Нефролог', icon: Filter },
  { name: 'Стандарт ЭЭГ', icon: Waves },
  { name: 'Дистанцион тунги ЭЭГ', icon: MonitorPlay },
  { name: 'ЭХОГ', icon: Radio },
  { name: 'Холтер, ЭКГ', icon: Zap },
  { name: 'УЗИ (хомила доплер, хомилани скрининг)', icon: ScanLine },
  { name: 'Нейросонография', icon: ScanLine },
  { name: 'Лаборатория', icon: Beaker },
  { name: 'Физиотерапия', icon: Flame },
  { name: 'Иглотерапия', icon: Syringe },
  { name: 'Рентген', icon: ScanLine },
  { name: 'Массаж', icon: Droplets },
  { name: 'Ут копини ювиш', icon: ShowerHead },
  { name: 'Даволовчи клизма', icon: ShowerHead },
  { name: 'Уролог', icon: User },
  { name: 'Гинеколог (интим ёшартириш)', icon: Smile },
  { name: 'ЛОР', icon: Ear },
  { name: 'Ортопед-травматолог', icon: Hammer },
  { name: 'Пластик жаррох', icon: Gem },
  { name: 'Юз жаг жаррохи', icon: Scissors },
  { name: 'Хирург', icon: Scissors },
];

// split flat list into "slides" of N cards each (2 rows x 3 per slide on desktop)
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  const doctorId = serviceDoctorMap[service.name] || defaultDoctorId;

  return (
    <Link
      to={`/doctors/${doctorId}`}
      className="group relative flex items-center gap-3.5 bg-white rounded-2xl border border-slate-200 p-4 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md h-full"
    >
      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <h3 className="text-[13.5px] font-medium text-slate-800 leading-snug">
        {service.name}
      </h3>
      <ChevronRight
        size={16}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
      />
    </Link>
  );
}

function ServicesSwiper() {
  const trackRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const slides = chunk(services, 6); // 6 cards per "page" (2 rows x 3 cols on desktop)

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    const slideWidth = el.clientWidth;
    setActiveSlide(Math.round(el.scrollLeft / slideWidth));
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  const goTo = (index) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
  };

  const scrollByPage = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* track */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 pb-2 -mx-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 sm:grid-rows-2 gap-3 shrink-0 w-full snap-start"
          >
            {slide.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        ))}
      </div>

      {/* arrows */}
      <button
        onClick={() => scrollByPage(-1)}
        disabled={!canScrollPrev}
        aria-label="Назад"
        className="hidden md:flex items-center justify-center absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md text-slate-600 transition-all hover:border-blue-300 hover:text-blue-600 disabled:opacity-0 disabled:pointer-events-none"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => scrollByPage(1)}
        disabled={!canScrollNext}
        aria-label="Вперёд"
        className="hidden md:flex items-center justify-center absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md text-slate-600 transition-all hover:border-blue-300 hover:text-blue-600 disabled:opacity-0 disabled:pointer-events-none"
      >
        <ChevronRight size={18} />
      </button>

      {/* dots */}
      <div className="flex justify-center gap-1.5 mt-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Слайд ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeSlide ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const quickActions = [
    { label: 'Контакты', icon: Phone, to: '/contact' },
    { label: 'Записаться', icon: Calendar, to: '/doctors' },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Label and heading */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-blue-600 mb-3">
            Наши услуги
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
            Все что нужно для вашего здоровья
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            {services.length} направлений — пролистайте, чтобы увидеть все
          </p>
        </div>

        {/* Swiper */}
        <div className="mb-12">
          <ServicesSwiper />
        </div>

        {/* Quick action buttons */}
        <div className="flex justify-center gap-3 flex-wrap mb-8">
          {quickActions.map((action) => {
            const Icon = action.icon;
            if (action.to) {
              return (
                <Link
                  key={action.label}
                  to={action.to}
                  className="flex items-center gap-2 px-5 py-2.5 border border-blue-200 text-blue-600 rounded-xl text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                >
                  <Icon size={18} />
                  <span>{action.label}</span>
                </Link>
              );
            }

            return (
              <button
                key={action.label}
                className="flex items-center gap-2 px-5 py-2.5 border border-blue-200 text-blue-600 rounded-xl text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
              >
                <Icon size={18} />
                <span>{action.label}</span>
              </button>
            );
          })}
        </div>

        {/* All services button */}
        <div className="flex justify-center">
          <Link to="/doctors" className="px-8 py-3 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
            Все услуги
          </Link>
        </div>
      </div>
    </section>
  );
}