import { Link } from 'react-router-dom';
import Header from '../components/Header';

const PHONE = '+998-(99)-115-25-25';
const TELEGRAM = '@clinics_uz';

const DOCTORS_LIST = [
  'Пульмонолог',
  'Уролог-андролог',
  'Нефролог',
  'Акушер',
  'Гинеколог',
  'Онкогинеколог',
  'Кардиолог',
  'ЛОР',
  'Офтальмолог',
  'Ортопед-травматолог',
  'Невропатолог',
  'Психоневролог',
  'Эндокринолог',
  'Гастроэнтеролог',
  'Онколог',
  'Маммолог',
  'Педиатр',
  'Детский невропатолог',
  'Терапевт',
  'Гематолог',
  'Косметолог',
  'Проктолог (врач-женщина)',
  'Хирург',
  'Пластический хирург',
  'Нейрохирург',
  'Дерматолог',
  'Аллерголог',
];

const SERVICES_LIST = [
  'Гемодиализ',
  'Плазмаферез',
  'Озонотерапия',
  'Спирометрия',
  'Лаборатория',
  'Хиджама',
  'Физиотерапия',
  'Иглотерапия',
  'Массаж',
  'УЗИ',
  'Доплер',
  'Скрининг',
  'Нейросонография',
  'Кольпоскопия',
  'ЭЭГ',
  'ЭХО-ЭГ',
  'ЭКГ',
  'Процедурный кабинет',
  'Стационар - супер люкс',
  'Дневной стационар',
  'Отделение лапароскопической хирургии',
  'Реанимация',
  'Пластическая хирургия',
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
      <circle cx="8" cy="8" r="8" fill="#DCFCE7" />
      <path d="M5 8.2L7 10.2L11 5.8" stroke="#16A34A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TagGrid({ items }) {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13.5px] text-slate-700"
        >
          <CheckIcon />
          {item}
        </div>
      ))}
    </div>
  );
}

export default function AboutClinic() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-14">

          {/* hero */}
          <div className="mb-12 rounded-[24px] border border-slate-200 bg-white px-8 py-10 sm:px-12 sm:py-12">
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-blue-600 mb-3">
              О клинике
            </p>
            <h1 className="text-4xl font-semibold leading-tight">Anfa Clinic</h1>
            <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-slate-500">
              Современное оборудование, лучшие специалисты в различных областях медицины,
              лабораторное и стационарное лечение.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 4 2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Позвонить: {PHONE}
              </a>
              <a
                href="https://t.me/clinics_uz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-[14px] font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.94 4.6L18.6 20.3c-.25 1.12-.91 1.39-1.84.87l-5.1-3.76-2.46 2.37c-.27.27-.5.5-1.02.5l.36-5.18 9.42-8.5c.41-.36-.09-.56-.63-.2L7.06 13.1l-5.05-1.58c-1.1-.34-1.12-1.1.23-1.63L20.6 3.18c.92-.34 1.72.22 1.34 1.42z"/>
                </svg>
                Telegram: {TELEGRAM}
              </a>
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-[14px] font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                Все врачи
              </Link>
            </div>
          </div>

          {/* doctors */}
          <div className="mb-12">
            <div className="mb-5">
              <h2 className="text-2xl font-semibold">
                Наши врачи{' '}
                <span className="text-slate-400 font-normal">· {DOCTORS_LIST.length}</span>
              </h2>
              <p className="mt-1.5 text-[14px] text-slate-500">
                Специалисты широкого профиля для диагностики и лечения.
              </p>
            </div>
            <TagGrid items={DOCTORS_LIST} />
          </div>

          {/* services */}
          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-semibold">
                Наши услуги{' '}
                <span className="text-slate-400 font-normal">· {SERVICES_LIST.length}</span>
              </h2>
              <p className="mt-1.5 text-[14px] text-slate-500">
                Диагностика, лечение и стационар на одной площадке.
              </p>
            </div>
            <TagGrid items={SERVICES_LIST} />
          </div>

        </div>
      </div>
    </>
  );
}