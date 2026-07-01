import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import CTABanner from '../components/CTABanner';
import About from '../components/About';
import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <Reviews />
      <CTABanner />
      <About />
      <InstagramFeed />
      <Footer />
    </div>
  );
}
