import { Instagram, Facebook, Youtube, Send } from 'lucide-react';

export default function InstagramFeed() {
  const posts = Array.from({ length: 6 });

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Label */}
        <p className="section-label text-center mb-8">Подписывайтесь</p>

        {/* Social icons row */}
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/anfa_clinic/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" aria-label="Instagram">
            <Instagram size={32} />
          </a>
          <a href="https://www.facebook.com/anfaclinic.uz?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" aria-label="Facebook">
            <Facebook size={32} />
          </a>
          <a href="https://www.youtube.com/@anfa_clinic" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" aria-label="YouTube">
            <Youtube size={32} />
          </a>
          <a href="https://t.me/anfa_clinic" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" aria-label="Telegram">
            <Send size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}