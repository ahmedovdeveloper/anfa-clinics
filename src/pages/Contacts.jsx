import Header from '../components/Header';

const ADDRESS = 'массив Юнусабад, 2-й квартал, 25А, Юнусабадский район, Ташкент';
const PHONE = '+998-(99)-115-25-25';
const WORK_HOURS = 'Пн – Сб: 08:00 – 17:00';
const MAPS_LINK =
  'https://www.google.com/maps/place/ANFA+CLINIC+(%D0%90%D0%9D%D0%A4%D0%90+%D0%9A%D0%9B%D0%98%D0%9D%D0%98%D0%9A)/data=!4m2!3m1!1s0x0:0x852c5599e99958ca?sa=X&ved=1t:2428&ictx=111';
const MAPS_EMBED =
  'https://www.google.com/maps?q=ANFA+CLINIC+%D0%90%D0%9D%D0%A4%D0%90+%D0%9A%D0%9B%D0%98%D0%9D%D0%98%D0%9A&output=embed';

const INFO_CARDS = [
  {
    title: 'Адрес',
    value: ADDRESS,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Телефон',
    value: PHONE,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 4 2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Время работы',
    value: WORK_HOURS,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
];

export default function Contacts() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-14">

          {/* header */}
          <div className="mb-10">
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-blue-600 mb-2">
              Anfa Clinic
            </p>
            <h1 className="text-4xl font-semibold">Контакты</h1>
            <p className="mt-2 text-slate-500 max-w-xl text-[15px]">
              Свяжитесь с нами или приезжайте в клинику — мы находимся в Юнусабадском районе Ташкента.
            </p>
          </div>

          {/* main grid */}
          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] items-start">

            {/* LEFT: info */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[20px] border border-slate-200 bg-white p-6">
                <h2 className="text-[17px] font-bold text-slate-900 mb-5">Anfa Clinic</h2>

                <div className="flex flex-col gap-5">
                  {INFO_CARDS.map((item) => (
                    <div key={item.title} className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-[10px] bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                          {item.title}
                        </p>
                        <p className="text-[14px] font-medium text-slate-900 mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Построить маршрут
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div className="rounded-[20px] border border-slate-200 bg-white p-6">
                <h3 className="text-[15px] font-bold text-slate-900 mb-1">Тип клиники</h3>
                <p className="text-[13px] text-slate-500">Частная клиника</p>
              </div>
            </div>

            {/* RIGHT: map */}
            <div className="rounded-[20px] border border-slate-200 bg-white overflow-hidden h-[420px] lg:h-full lg:min-h-[480px]">
              <iframe
                title="Anfa Clinic — карта проезда"
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}