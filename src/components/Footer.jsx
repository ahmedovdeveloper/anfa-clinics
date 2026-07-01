import { Plus, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../public/log.png"
export default function Footer() {
  const footerColumns = [
    {
      title: 'Главная',
      links: ['О нас', 'Карьера', 'Врачи', 'Блог', 'FAQ', 'Записаться', 'Локация', 'Контакты'],
    },
    {
      title: 'Услуги',
      links: ['ЛОР', 'Скорая', 'Стационар', 'Лаборатория', 'Радиология', 'Педиатрия', 'Стоматология'],
    },
    {
      title: 'Полезное',
      links: ['Политика конфиденциальности', 'Пользовательское соглашение', 'Cookie'],
    },
    {
      title: 'Оплата',
      links: ['Visa', 'Uzcard', 'Humo'],
    },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Top section - Logo and badges */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-primary-dark">
            
            {/* Logo and tagline */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img src={Logo} alt="Anfa Clinic Logo" className="h-10 w-auto" />
              </div>
            </div>

          </div>

          {/* Footer columns */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {footerColumns.map((column, idx) => (
              <div key={idx}>
                <h3 className="font-bold mb-4 text-white">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-gray-300 text-sm hover:text-accent transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-primary-dark pt-8">
            <p className="text-center text-sm text-gray-300">
              1998–2025 © Все права защищены. Anfa Clinic
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
}
