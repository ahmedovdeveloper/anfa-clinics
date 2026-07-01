import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doctors } from '../data/doctors';
import Header from '../components/Header';

const TELEGRAM_BOT_TOKEN = '7943430010:AAEGu2f4KFXKiEiLAfEqJW4s74M29c8O3ko';
const TELEGRAM_CHAT_ID = '-1004449463753';

export default function DoctorDetail() {
  const { doctorId } = useParams();
  const doctor = doctors.find((item) => item.id === doctorId);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', surname: '', phone: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  if (!doctor) {
    return (
      <div className="dd-page">
        <div className="dd-not-found">
          <h1>Врач не найден</h1>
          <p>Попробуйте выбрать другого специалиста.</p>
          <Link to="/doctors" className="dd-btn-primary">Назад к списку</Link>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSending(true);

    const text =
      `📅 *Новая запись на приём*\n\n` +
      `👨‍⚕️ Врач: ${doctor.name}\n` +
      `🏥 Специальность: ${doctor.specialty}\n\n` +
      `👤 Имя: ${form.name}\n` +
      `👤 Фамилия: ${form.surname}\n` +
      `📞 Телефон: ${form.phone}\n` +
      `📆 Дата: ${form.date}\n` +
      `⏰ Время: ${form.time}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: 'Markdown',
          }),
        }
      );

      const data = await response.json();

      if (!data.ok) {
        throw new Error(data.description || 'Ошибка отправки в Telegram');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Telegram send error:', err);
      setError('Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.');
    } finally {
      setSending(false);
    }
  };

  return (
  <> 
  <Header/>
      <div className="dd-page">
      <style>{css}</style>

      <div className="dd-container">

        {/* ── Header ── */}
        <div className="dd-header">
          <Link to="/doctors" className="dd-back-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Все врачи
          </Link>
          <span className="dd-eyebrow">Профиль специалиста</span>
          <h1 className="dd-page-title">{doctor.name}</h1>
          <p className="dd-page-sub">{doctor.specialty} · {doctor.gender}</p>
        </div>

        {/* ── Main grid ── */}
        <div className="dd-grid">

          {/* LEFT: profile + bio */}
          <div className="dd-left">

            {/* Profile card */}
            <div className="dd-card dd-profile-card">
              <div className="dd-profile-top">
                <div className="dd-photo-wrap">
                  <img src={doctor.photo} alt={doctor.name} className="dd-photo h-full" />
                  <span className="dd-online-dot" />
                </div>
                <div className="dd-profile-info">
                  <span className="dd-specialty-tag">{doctor.specialty}</span>
                  <h2 className="dd-doctor-name">{doctor.name}</h2>
                  <p className="dd-doctor-meta">{doctor.gender}</p>
                  <p className="dd-doctor-bio">{doctor.bio}</p>
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="dd-card dd-contact-card">
              <h3 className="dd-card-title">Контакты</h3>
              <div className="dd-contact-row">
                <div className="dd-contact-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 4 2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <p className="dd-contact-label">Телефон</p>
                  <p className="dd-contact-value">+998-(99)-115-25-25</p>
                </div>
              </div>
              <div className="dd-contact-row" style={{ marginTop: 14 }}>
                <div className="dd-contact-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="dd-contact-label">Адрес</p>
                  <p className="dd-contact-value">ул. Центральная, 10</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: schedule + booking */}
          <div className="dd-right">

            {/* Schedule */}
            <div className="dd-card">
              <div className="dd-card-head">
                <div>
                  <h2 className="dd-card-title">Расписание</h2>
                  <p className="dd-card-sub">Доступные дни приёма</p>
                </div>
                <span className="dd-badge-green">Актуально</span>
              </div>

              {doctor.schedule.length > 0 ? (
                <div className="dd-schedule-grid">
                  {doctor.schedule.map((item) => (
                    <div key={item.day} className="dd-slot">
                      <span className="dd-slot-day">{item.day}</span>
                      <span className="dd-slot-time">{item.time}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="dd-no-schedule">Расписание уточняйте по телефону</p>
              )}
            </div>

            {/* Booking card */}
            <div className="dd-card dd-booking-card">
              <div className="dd-booking-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="12" y1="14" x2="12" y2="18"/><line x1="10" y1="16" x2="14" y2="16"/></svg>
              </div>
              <h2 className="dd-card-title" style={{ marginBottom: 8 }}>Записаться на приём</h2>
              <p className="dd-booking-text">Заполните форму — менеджер подтвердит время в течение часа.</p>
              <button
                className="dd-btn-primary"
                onClick={() => { setShowModal(true); setSubmitted(false); setError(''); }}
              >
                Выбрать время
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── Modal ── */}
      {showModal && (
        <div className="dd-overlay">
          <div className="dd-modal dd-modal-anim">
            <div className="dd-modal-head">
              <div>
                <h2 className="dd-modal-title">Запись к врачу</h2>
                <p className="dd-modal-sub">{doctor.name} · {doctor.specialty}</p>
              </div>
              <button className="dd-close-btn" onClick={() => setShowModal(false)} aria-label="Закрыть">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
            </div>

            <form className="dd-form" onSubmit={handleSubmit}>
              <div className="dd-form-row">
                <label className="dd-label">
                  <span className="dd-label-text">Имя</span>
                  <input type="text" name="name" value={form.name} onChange={handleChange} className="dd-input" required />
                </label>
                <label className="dd-label">
                  <span className="dd-label-text">Фамилия</span>
                  <input type="text" name="surname" value={form.surname} onChange={handleChange} className="dd-input" required />
                </label>
              </div>
              <div className="dd-form-row">
                <label className="dd-label">
                  <span className="dd-label-text">Телефон</span>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} pattern="\+?\d*" placeholder="+998-(99)-115-25-25" className="dd-input" required />
                </label>
                <label className="dd-label">
                  <span className="dd-label-text">Дата</span>
                  <input type="date" name="date" value={form.date} onChange={handleChange} className="dd-input" required />
                </label>
              </div>
              <label className="dd-label">
                <span className="dd-label-text">Время</span>
                <input type="time" name="time" value={form.time} onChange={handleChange} className="dd-input" required />
              </label>

              <div className="dd-form-actions">
                <button type="submit" className="dd-btn-primary" disabled={sending}>
                  {sending ? 'Отправка...' : 'Подтвердить запись'}
                </button>
                <button type="button" className="dd-btn-ghost" onClick={() => setShowModal(false)}>Отмена</button>
              </div>

              {error && (
                <div className="dd-success" style={{ background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626' }}>
                  <p>{error}</p>
                </div>
              )}

              {submitted && (
                <div className="dd-success">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <p>Заявка принята! Свяжемся по номеру <strong>{form.phone}</strong>.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  </>
  );
}

/* ─────────────────────────────────────────── CSS ── */
const css = `
  .dd-page {
    min-height: 100vh;
    background: #F8FAFC;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #0F172A;
  }
  .dd-container { max-width: 1080px; margin: 0 auto; padding: 56px 24px 80px; }

  /* header */
  .dd-header { margin-bottom: 40px; }
  .dd-back-link {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 13px; font-weight: 500; color: #64748B;
    text-decoration: none; margin-bottom: 20px;
    transition: color .15s;
  }
  .dd-back-link:hover { color: #3B82F6; }
  .dd-eyebrow {
    display: block; font-size: 11px; font-weight: 600;
    letter-spacing: .18em; text-transform: uppercase;
    color: #3B82F6; margin-bottom: 8px;
  }
  .dd-page-title { font-size: 36px; font-weight: 800; margin: 0 0 6px; letter-spacing: -.02em; }
  .dd-page-sub   { font-size: 15px; color: #64748B; margin: 0; }

  /* grid */
  .dd-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 24px;
    align-items: start;
  }
  @media (max-width: 720px) { .dd-grid { grid-template-columns: 1fr; } }
  .dd-left, .dd-right { display: flex; flex-direction: column; gap: 20px; }

  /* cards */
  .dd-card {
    background: #fff;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    padding: 28px;
    transition: box-shadow .2s;
  }
  .dd-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,.06); }
  .dd-card-title { font-size: 17px; font-weight: 700; margin: 0 0 4px; color: #0F172A; }
  .dd-card-sub   { font-size: 13px; color: #94A3B8; margin: 0; }
  .dd-card-head  { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 20px; }

  /* profile */
  .dd-profile-top  { display: flex; gap: 20px; flex-wrap: wrap; }
  .dd-photo-wrap   { position: relative; flex-shrink: 0; }
  .dd-photo        { width: 108px; height: full; border-radius: 16px; object-fit: cover; border: 1px solid #E2E8F0; }
  .dd-online-dot   {
    position: absolute; bottom: 5px; right: 5px;
    width: 13px; height: 13px; border-radius: 50%;
    background: #22C55E; border: 2.5px solid #fff;
  }
  .dd-profile-info  { flex: 1; min-width: 160px; }
  .dd-specialty-tag {
    display: inline-block; font-size: 11px; font-weight: 600;
    letter-spacing: .14em; text-transform: uppercase;
    color: #3B82F6; background: #EFF6FF;
    padding: 3px 10px; border-radius: 99px; margin-bottom: 8px;
  }
  .dd-doctor-name { font-size: 22px; font-weight: 800; margin: 0 0 3px; letter-spacing: -.01em; }
  .dd-doctor-meta { font-size: 13px; color: #94A3B8; margin: 0 0 10px; }
  .dd-doctor-bio  { font-size: 14px; color: #475569; line-height: 1.7; margin: 0; }

  /* contact */
  .dd-contact-card {}
  .dd-contact-row { display: flex; align-items: center; gap: 14px; margin-top: 16px; }
  .dd-contact-icon-wrap {
    width: 38px; height: 38px; flex-shrink: 0;
    background: #F1F5F9; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    color: #64748B;
  }
  .dd-contact-label { font-size: 11px; color: #94A3B8; text-transform: uppercase; letter-spacing: .1em; margin: 0; }
  .dd-contact-value { font-size: 14px; font-weight: 600; color: #0F172A; margin: 3px 0 0; }

  /* ── schedule slots ── */
  .dd-schedule-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .dd-slot {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 14px 16px;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 14px;
    transition: border-color .15s, background .15s;
    cursor: default;
  }
  .dd-slot:hover { background: #EFF6FF; border-color: #BFDBFE; }
  .dd-slot-day {
    font-size: 13px; font-weight: 700;
    color: #0F172A; letter-spacing: -.01em;
  }
  .dd-slot-time {
    font-size: 12px; color: #64748B;
    font-variant-numeric: tabular-nums;
  }
  .dd-no-schedule {
    font-size: 14px; color: #94A3B8;
    background: #F8FAFC; border: 1px dashed #E2E8F0;
    border-radius: 14px; padding: 16px; text-align: center;
  }

  /* badge */
  .dd-badge-green {
    font-size: 11px; font-weight: 600;
    color: #16A34A; background: #F0FDF4;
    padding: 4px 10px; border-radius: 99px; flex-shrink: 0;
  }

  /* booking */
  .dd-booking-card { text-align: center; padding: 32px 28px; }
  .dd-booking-icon {
    width: 52px; height: 52px; border-radius: 14px;
    background: #EFF6FF; color: #3B82F6;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 16px;
  }
  .dd-booking-text { font-size: 14px; color: #64748B; line-height: 1.65; margin: 0 0 22px; }

  /* buttons */
  .dd-btn-primary {
    display: inline-block; background: #3B82F6; color: #fff;
    font-size: 14px; font-weight: 700; padding: 13px 26px;
    border-radius: 12px; border: none; cursor: pointer;
    text-decoration: none; transition: background .15s, transform .15s;
    letter-spacing: .01em; width: 100%;
  }
  .dd-btn-primary:hover { background: #2563EB; transform: translateY(-1px); }
  .dd-btn-primary:disabled { opacity: .6; cursor: not-allowed; transform: none; }
  .dd-btn-ghost {
    display: inline-block; background: #F1F5F9; color: #475569;
    font-size: 14px; font-weight: 600; padding: 13px 26px;
    border-radius: 12px; border: none; cursor: pointer;
    transition: background .15s; width: 100%;
  }
  .dd-btn-ghost:hover { background: #E2E8F0; }

  /* not found */
  .dd-not-found {
    max-width: 420px; margin: 80px auto;
    background: #fff; border: 1px solid #E2E8F0;
    border-radius: 20px; padding: 48px; text-align: center;
  }

  /* modal overlay */
  .dd-overlay {
    position: fixed; inset: 0; z-index: 50;
    display: flex; align-items: center; justify-content: center;
    background: rgba(15,23,42,.45);
    padding: 24px 16px;
  }
  .dd-modal {
    width: 100%; max-width: 600px;
    background: #fff; border-radius: 24px;
    border: 1px solid #E2E8F0;
    padding: 36px;
    max-height: 90vh; overflow-y: auto;
  }
  .dd-modal-anim { animation: ddIn .22s cubic-bezier(.34,1.56,.64,1); }
  @keyframes ddIn {
    from { opacity:0; transform: scale(.94) translateY(10px); }
    to   { opacity:1; transform: scale(1)  translateY(0); }
  }
  .dd-modal-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 28px; }
  .dd-modal-title { font-size: 22px; font-weight: 800; margin: 0 0 4px; letter-spacing: -.01em; }
  .dd-modal-sub   { font-size: 13px; color: #94A3B8; margin: 0; }
  .dd-close-btn {
    width: 34px; height: 34px; border-radius: 10px;
    background: #F1F5F9; border: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: #64748B; flex-shrink: 0; transition: background .15s;
  }
  .dd-close-btn:hover { background: #E2E8F0; }

  /* form */
  .dd-form { display: flex; flex-direction: column; gap: 16px; }
  .dd-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  @media (max-width: 520px) { .dd-form-row { grid-template-columns: 1fr; } }
  .dd-label { display: flex; flex-direction: column; gap: 6px; }
  .dd-label-text { font-size: 11px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: .12em; }
  .dd-input {
    background: #F8FAFC; border: 1px solid #E2E8F0;
    border-radius: 12px; padding: 13px 15px;
    font-size: 14px; color: #0F172A; outline: none;
    transition: border-color .18s, box-shadow .18s;
  }
  .dd-input:focus { border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,.12); }
  .dd-form-actions { display: flex; flex-direction: column; gap: 10px; margin-top: 6px; }
  .dd-success {
    display: flex; align-items: flex-start; gap: 12px;
    background: #F0FDF4; border: 1px solid #BBF7D0;
    border-radius: 12px; padding: 14px 16px; color: #16A34A;
  }
  .dd-success p { font-size: 14px; margin: 0; line-height: 1.55; }
  .dd-success svg { flex-shrink: 0; margin-top: 1px; }
`;