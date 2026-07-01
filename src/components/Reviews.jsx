import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Альфия С.',
      source: 'yandex.ru',
      text: 'Крупная клиника с хорошим сервисом. Делала гастроскопию под наркозом — процедура заняла около 15 минут, отходила быстро. Врач-гастроэнтеролог очень грамотный, цены доступные.',
      stars: 5,
    },
    {
      name: 'Руслан Григорьев',
      source: 'yandex.ru',
      text: 'Клиника отлично подходит именно для лечения тяжёлых пациентов: внимательное отношение, грамотные осмотры и лечение. Отдельная благодарность лечащему врачу за помощь.',
      stars: 5,
    },
    {
      name: 'Мунира Камолидиновна',
      source: 'yandex.ru',
      text: 'Очень помогли. Врачи и медперсонал профессиональные, не ожидала такого уровня от частной клиники. Директор отзывчиво относится к пациентам. Рекомендую всем.',
      stars: 5,
    },
  ];

  return (
    <section className="bg-light-gray py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-4">
          <p className="section-label mb-3">Пользователи о нас</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Результативные методики лечения
          </h2>
        </div>

        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-lg p-4 shadow-sm">
            <div className="flex gap-1 justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <p className="font-bold text-dark-text">Оценка 4.9 из 5</p>
          </div>
          <p className="text-muted-text mt-4 text-sm">
            Выбор наших пациентов | Комфорт на всех этапах лечения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="card bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-purple-300"></div>
                <div>
                  <p className="font-semibold text-dark-text">{review.name}</p>
                  <p className="text-xs text-muted-text">{review.source}</p>
                </div>
              </div>

              <p className="text-sm text-muted-text mb-4">{review.text}</p>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="text-accent font-semibold hover:underline">
            О нас →
          </a>
        </div>
      </div>
    </section>
  );
}