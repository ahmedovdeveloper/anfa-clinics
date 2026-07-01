import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Plus } from 'lucide-react';
import { servicesDropdown, serviceDoctorMap, defaultDoctorId } from '../data/serviceDoctorMap';
import Logo from "../public/LOGO ANFA new.png"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Главная', to: '/' },
    { label: 'О нас', to: '/about' },
    { label: 'Услуги', to: '/' },
    { label: 'Врачи', to: '/doctors' },
    { label: 'Контакты', to: '/contact' },
  ];

  const getServiceDoctorLink = (service) => {
    const doctorId = serviceDoctorMap[service] || defaultDoctorId;
    return `/doctors/${doctorId}`;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
         <img src={Logo} alt="Anfa Clinic" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link to={item.to} className="text-dark-text hover:text-accent transition-colors font-medium flex items-center gap-1">
                {item.label}
                {item.label === 'Услуги' && <span className="text-xs">▼</span>}
              </Link>
              
              {item.label === 'Услуги' && (
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-3 w-48 max-h-64 overflow-y-auto">
                  {servicesDropdown.map((service) => (
                    <Link
                      key={service}
                      to={getServiceDoctorLink(service)}
                      className="block text-xs py-2 hover:text-accent transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
          <nav className="p-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.to}
                  className="block text-dark-text hover:text-accent font-medium py-2"
                  onClick={() => item.label !== 'Услуги' && setIsOpen(false)}
                >
                  {item.label}
                </Link>

                {item.label === 'Услуги' && (
                  <div className="ml-4 mt-2 space-y-2 max-h-64 overflow-y-auto pr-2">
                    {servicesDropdown.map((service) => (
                      <Link
                        key={service}
                        to={getServiceDoctorLink(service)}
                        className="block text-sm text-muted-text hover:text-accent py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t space-y-2">
              <a href="tel:+998991152525" className="block text-dark-text py-2">
                +998-(99)-115-25-25
              </a>
              <a href="tel:103" className="block text-red-600 font-semibold py-2">
                Скорая: 103
              </a>
              <button className="w-full btn-primary text-center py-3">Записаться</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
