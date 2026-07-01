import { Instagram, Facebook, Youtube, Send } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2 px-4 md:px-8 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Email */}
        <a href="mailto:info@anfaclinic.uz" className="hover:text-accent transition-colors">
          info@anfaclinic.uz
        </a>
        
        {/* Right: Social icons */}
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-accent transition-colors" aria-label="YouTube">
            <Youtube size={16} />
          </a>
          <a href="#" className="hover:text-accent transition-colors" aria-label="Telegram">
            <Send size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
