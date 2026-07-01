import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Brain, Scissors, Eye, Baby, Bone } from 'lucide-react';
import Header from '../components/Header';
import { doctors } from '../data/doctors';
// ─── colour config per specialty ───────────────────────────────────────────
const SPECIALTY_CONFIG = {
  Кардиолог: {
    band: '#1D9E75',
    avatarBg: '#E1F5EE',
    avatarText: '#085041',
    tagBg: '#E1F5EE',
    tagText: '#0F6E56',
    Icon: HeartPulse,
    label: 'Кардиология',
  },
  Невролог: {
    band: '#7F77DD',
    avatarBg: '#EEEDFE',
    avatarText: '#26215C',
    tagBg: '#EEEDFE',
    tagText: '#3C3489',
    Icon: Brain,
    label: 'Неврология',
  },
  Хирург: {
    band: '#D85A30',
    avatarBg: '#FAECE7',
    avatarText: '#712B13',
    tagBg: '#FAECE7',
    tagText: '#993C1D',
    Icon: Scissors,
    label: 'Хирургия',
  },
  Офтальмолог: {
    band: '#0EA5E9',
    avatarBg: '#E0F2FE',
    avatarText: '#0C4A6E',
    tagBg: '#E0F2FE',
    tagText: '#0369A1',
    Icon: Eye,
    label: 'Офтальмология',
  },
  Педиатр: {
    band: '#F59E0B',
    avatarBg: '#FEF3C7',
    avatarText: '#78350F',
    tagBg: '#FEF3C7',
    tagText: '#92400E',
    Icon: Baby,
    label: 'Педиатрия',
  },
  Ортопед: {
    band: '#6B7280',
    avatarBg: '#F3F4F6',
    avatarText: '#1F2937',
    tagBg: '#F3F4F6',
    tagText: '#374151',
    Icon: Bone,
    label: 'Ортопедия',
  },
};

const DEFAULT_CONFIG = {
  band: '#888780',
  avatarBg: '#F1EFE8',
  avatarText: '#2C2C2A',
  tagBg: '#F1EFE8',
  tagText: '#444441',
  Icon: HeartPulse,
  label: 'Специалист',
};

function getInitials(name = '') {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

// ─── Single card ────────────────────────────────────────────────────────────
function DoctorCard({ doctor }) {
  const cfg = SPECIALTY_CONFIG[doctor.specialty] ?? DEFAULT_CONFIG;
  const { Icon } = cfg;
  const initials = getInitials(doctor.name);

  return (
    <Link
      to={`/doctors/${doctor.id}`}
      className="group flex flex-col rounded-[20px] border border-slate-200 bg-white overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
    >
      {/* colour band */}
      <div className="h-[5px] w-full flex-shrink-0" style={{ background: cfg.band }} />

      {/* main body */}
      <div className="flex flex-col gap-4 p-5 flex-1">

        {/* head: photo + name */}
        <div className="flex items-center gap-3.5">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-12 h-12 rounded-[14px] object-cover flex-shrink-0 border border-slate-200"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div
            className="w-12 h-12 rounded-[14px] items-center justify-center text-[15px] font-medium flex-shrink-0 hidden"
            style={{ background: cfg.avatarBg, color: cfg.avatarText }}
          >
            {initials}
          </div>
          <div>
            <p className="text-[15px] font-medium text-slate-900 leading-snug">{doctor.name}</p>
            <p className="text-[12px] text-slate-400 mt-0.5">
              {doctor.specialty} · {doctor.gender}
            </p>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-slate-100" />

        {/* bio */}
        <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-3">{doctor.bio}</p>
      </div>

      {/* footer */}
      <div className="h-px bg-slate-100 mx-5" />
      <div className="flex items-center justify-between px-5 py-3.5">
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-lg"
          style={{ background: cfg.tagBg, color: cfg.tagText }}
        >
          <Icon size={12} />
          {cfg.label}
        </span>

        <div className="w-[30px] h-[30px] rounded-[10px] border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400 transition-colors group-hover:border-slate-300 group-hover:text-slate-700">
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function Doctors() {
  return (
   <>
   <Header/>
     <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* header */}
        <div className="mb-10">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-blue-600 mb-2">
            Врачи клиники
          </p>
          <h1 className="text-4xl font-semibold">
            Наши специалисты{' '}
            <span className="text-slate-400 font-normal">· {doctors.length}</span>
          </h1>
          <p className="mt-2 text-slate-500 max-w-xl text-[15px]">
            Выберите врача и узнайте его специализацию, опыт и расписание.
          </p>
        </div>

        {/* grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

      </div>
    </div>
   </>
  );
}