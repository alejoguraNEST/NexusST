import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Trophy, 
  Gavel, 
  TrendingUp, 
  Briefcase, 
  Camera, 
  Users, 
  ChevronRight, 
  Menu, 
  X,
  ExternalLink,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { AthletesModal } from './components/AthletesModal';
import { CreatorsModal } from './components/CreatorsModal';

// --- Components ---



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-nexus-black/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Nexus Logo" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <span className="font-sans font-black text-4xl tracking-tighter text-white">
            Nexus
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#servicios" className="hover:text-nexus-green transition-colors">Servicios</a>
          <a href="#colaboraciones" className="hover:text-nexus-green transition-colors">Colaboraciones</a>
          <a href="#talento" className="hover:text-nexus-green transition-colors">Talento</a>
          <a href="#contacto" className="px-5 py-2 glass rounded-full hover:bg-white hover:text-nexus-black transition-all">Contáctanos</a>
        </div>

        {/* mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-nexus-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden text-lg"
        >
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
          <a href="#colaboraciones" onClick={() => setMobileMenuOpen(false)}>Colaboraciones</a>
          <a href="#talento" onClick={() => setMobileMenuOpen(false)}>Talento</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="text-nexus-green font-bold">Contáctanos</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Graphic */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nexus-green/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 glass rounded-full text-xs font-bold text-nexus-green mb-6 tracking-widest uppercase">
            Management de Clase Mundial
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
            Nexus Elite Sports <br /> <span className="text-gradient">& Talents</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Representamos a los líderes del mañana. Agencia integral de gestión, asesoría legal y desarrollo de marca para atletas y artistas de élite.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#servicios" className="w-full sm:w-auto px-8 py-4 bg-nexus-green text-nexus-black font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer">
              Ver Servicios <ArrowUpRight size={18} />
            </a>
            <a href="#talento" className="w-full sm:w-auto px-8 py-4 glass rounded-full hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer">
              Nuestro Talento
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-[10px] tracking-widest uppercase font-bold">
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-nexus-green" />
        Scroll
      </div>
    </section>
  );
};

const Ticker = () => {
  const leagues = ["NFL", "LIGA MX", "NCAA", "NBA", "TENNIS", "LFA", "PREMIER LEAGUE", "BUNDESLIGA", "SERIE A"];
  
  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="overflow-hidden flex">
        <div className="flex gap-20 animate-scroll whitespace-nowrap items-center">
          {[...leagues, ...leagues].map((league, i) => (
            <span key={i} className="text-3xl md:text-5xl font-display font-black text-white/20 hover:text-nexus-green transition-colors cursor-default uppercase">
              {league}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedOn = () => {
  const partners = [
    { name: "ESPN", category: "Deportes" },
    { name: "Nike", category: "Marca" },
    { name: "Red Bull", category: "Marca" },
    { name: "Forbes", category: "Prensa" },
    { name: "Adidas", category: "Marca" },
    { name: "Gatorade", category: "Marca" }
  ];

  return (
    <section id="colaboraciones" className="py-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-12">Colaboramos con marcas líderes</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-30 hover:opacity-100 transition-opacity duration-500">
           {partners.map((p, i) => (
             <div key={i} className="flex flex-col items-center group cursor-default">
                <span className="text-2xl md:text-3xl font-display font-black tracking-tighter group-hover:text-nexus-green transition-colors">{p.name}</span>
                <span className="text-[8px] uppercase tracking-widest text-nexus-green mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{p.category}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, benefits }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 glass rounded-3xl group cursor-default"
  >
    <div className="w-12 h-12 bg-nexus-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-nexus-green group-hover:text-nexus-black transition-all text-nexus-green">
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
      {description}
    </p>
    <ul className="space-y-2">
      {benefits.map((b: string, i: number) => (
        <li key={i} className="text-xs flex items-center gap-2 text-gray-500">
          <div className="w-1 h-1 bg-nexus-green rounded-full" /> {b}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Gestión de Talento",
      description: "Representación integral para atletas, artistas y creadores de contenido. Maximizamos tu potencial profesional en cada etapa.",
      benefits: ["Navegación de carrera", "Oportunidades globales", "Mentoria personalizada"]
    },
    {
      icon: Gavel,
      title: "Asesoría Legal & Contratos",
      description: "Protegemos tus intereses con un equipo jurídico especializado en derecho deportivo y de entretenimiento internacional.",
      benefits: ["Revisión de contratos", "Propiedad intelectual", "Resolución de conflictos"]
    },
    {
      icon: TrendingUp,
      title: "Servicios Financieros",
      description: "Gestión patrimonial estratégica para asegurar tu futuro y el de tu familia. Planificación fiscal y de inversión.",
      benefits: ["Protección de activos", "Planificación de retiro", "Inversiones inteligentes"]
    },
    {
      icon: Briefcase,
      title: "Desarrollo de Marca",
      description: "Transformamos tu perfil en una marca global influyente. Estrategias de PR, marketing y alianzas comerciales.",
      benefits: ["Venta de imagen", "Estrategia digital", "Endorsement deals"]
    }
  ];

  return (
    <section id="servicios" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Expertos en <span className="text-nexus-green">Tu Éxito</span></h2>
          <p className="text-gray-400 text-lg">Ofrecemos soluciones 360° para que tú solo te preocupes por rendir al máximo nivel.</p>
        </div>
        <div className="hidden md:block">
          <Trophy className="text-white/5" size={120} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
};

const CreatorsAndBrands = () => {
  const [isAthletesModalOpen, setIsAthletesModalOpen] = useState(false);
  const [isCreatorsModalOpen, setIsCreatorsModalOpen] = useState(false);

  return (
    <>
      <section id="talento" className="py-24 bg-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Creators & Media Card */}
              <div className="space-y-4">
                <div 
                  onClick={() => setIsCreatorsModalOpen(true)}
                  className="h-64 glass rounded-2xl overflow-hidden relative group cursor-pointer border border-nexus-green/30 hover:border-nexus-green transition-all shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-nexus-black via-nexus-black/40 to-transparent z-10" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-20 bg-nexus-green text-nexus-black px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Sparkles size={10} />
                    <span>Ver Creadores</span>
                  </div>

                  {/* Card Bottom Details */}
                  <div className="absolute bottom-3 left-3 right-3 z-20">
                    <div className="flex items-center gap-1 text-nexus-green mb-0.5">
                      <Camera size={14} />
                      <p className="text-[10px] font-extrabold uppercase tracking-widest">Creators & Media</p>
                    </div>
                    <p className="text-sm font-bold text-white leading-tight">Esteban Macías & MÁS</p>
                    <p className="text-[11px] text-gray-300 font-medium">Lifestyle • Fitness • Media</p>
                  </div>

                  <img 
                    src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=800"
                    alt="Esteban Macías - Creators and Digital Media Nexus"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>

                <div className="h-40 glass rounded-2xl bg-nexus-green/5 border-nexus-green/20 flex items-center justify-center p-6 text-center">
                  <span className="text-xs font-medium text-gray-300">Impulsamos tu presencia digital y alianzas comerciales con las mejores marcas.</span>
                </div>
              </div>

              <div className="space-y-4 pt-12">
                 <div className="h-40 glass rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                   <Users className="text-nexus-green mb-2" size={24} />
                   <h4 className="font-bold text-lg text-white">+100M</h4>
                   <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Alcance Combinado</p>
                 </div>
                 
                 {/* Athletes Card featuring Ofelia Chavez */}
                 <div 
                   onClick={() => setIsAthletesModalOpen(true)}
                   className="h-64 glass rounded-2xl overflow-hidden relative group cursor-pointer border border-nexus-green/30 hover:border-nexus-green transition-all shadow-xl"
                 >
                  <div className="absolute inset-0 bg-gradient-to-t from-nexus-black via-nexus-black/40 to-transparent z-10" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-20 bg-nexus-green text-nexus-black px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Sparkles size={10} />
                    <span>Ver Atletas</span>
                  </div>

                  {/* Card Bottom Details */}
                  <div className="absolute bottom-3 left-3 right-3 z-20">
                    <div className="flex items-center gap-1 text-nexus-green mb-0.5">
                      <Trophy size={14} />
                      <p className="text-[10px] font-extrabold uppercase tracking-widest">Athletes</p>
                    </div>
                    <p className="text-sm font-bold text-white leading-tight">Ofelia Chávez</p>
                    <p className="text-[11px] text-gray-300 font-medium">Futbolista • Liga Femenil BBVA</p>
                  </div>

                  <img 
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800" 
                    alt="Ofelia Chávez - Futbolista Liga Femenil BBVA"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-nexus-green font-bold text-xs uppercase tracking-widest mb-4 block">Ecosistema Digital & Deportivo</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight italic">Talento que transforma <span className="text-gradient">Marcas</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Representamos atletas de élite y creadores de contenido que inspiran a millones. Como nuestra atleta de fútbol profesional <strong className="text-white">Ofelia Chávez</strong> en la <strong className="text-nexus-green">Liga Femenil BBVA</strong> y nuestro roster de <strong className="text-white">Creadores y Medios Digitales</strong>, conectamos el talento con las principales marcas del mundo.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-nexus-green/20 flex items-center justify-center text-nexus-green mt-1 shrink-0">
                  <ChevronRight size={16} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 underline decoration-nexus-green/30 decoration-2 underline-offset-4">Gestión & Representación Deportiva</h4>
                  <p className="text-sm text-gray-500">Acompañamiento profesional en negociaciones de contratos, marcas y patrocinios.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-nexus-green/20 flex items-center justify-center text-nexus-green mt-1 shrink-0">
                  <ChevronRight size={16} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 underline decoration-nexus-green/30 decoration-2 underline-offset-4">Colaboraciones & Estrategia Digital</h4>
                  <p className="text-sm text-gray-500">Campañas transmedia de alto alcance para creadores, podcasters y medios.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsAthletesModalOpen(true)}
                className="px-6 py-3.5 bg-nexus-green text-nexus-black font-extrabold text-xs rounded-full hover:bg-white hover:scale-105 transition-all flex items-center gap-2.5 shadow-lg shadow-nexus-green/20 cursor-pointer"
              >
                <Trophy size={16} />
                <span>Roster de Atletas</span>
                <ChevronRight size={16} />
              </button>

              <button
                onClick={() => setIsCreatorsModalOpen(true)}
                className="px-6 py-3.5 glass text-white font-extrabold text-xs rounded-full hover:bg-white/10 hover:scale-105 transition-all flex items-center gap-2.5 border border-white/10 cursor-pointer"
              >
                <Camera size={16} className="text-nexus-green" />
                <span>Creators & Media</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <AthletesModal 
        isOpen={isAthletesModalOpen} 
        onClose={() => setIsAthletesModalOpen(false)} 
      />

      <CreatorsModal 
        isOpen={isCreatorsModalOpen} 
        onClose={() => setIsCreatorsModalOpen(false)} 
      />
    </>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 max-w-7xl mx-auto px-6 text-center">
      <div className="glass rounded-[3rem] p-10 md:p-20 relative overflow-hidden max-w-4xl mx-auto">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-nexus-green/5 rounded-full blur-[100px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-nexus-green/5 rounded-full blur-[80px] -ml-20 -mb-20" />
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            ¿Listo para el <br />
            <span className="text-nexus-green">Siguiente Nivel?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-xl">
            Hablemos sobre tu carrera o tu próximo proyecto comercial. Conéctate con nosotros en nuestras plataformas oficiales de contacto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-xl">
            <a 
              href="mailto:alejogura@nexuselitest.com" 
              className="flex items-center gap-4 px-6 py-4 rounded-2xl glass w-full sm:w-auto hover:bg-white hover:text-nexus-black transition-all cursor-pointer border border-white/5 group text-left sm:text-center justify-start sm:justify-center text-sm font-medium"
            >
              <div className="w-10 h-10 rounded-full bg-nexus-green/10 text-nexus-green flex items-center justify-center group-hover:bg-nexus-black/5 group-hover:text-nexus-black transition-colors">
                <Mail size={18} />
              </div>
              <span className="text-gray-200 group-hover:text-nexus-black transition-colors">alejogura@nexuselitest.com</span>
            </a>
            
            <div 
              className="flex items-center gap-4 px-6 py-4 rounded-2xl glass w-full sm:w-auto hover:bg-white hover:text-nexus-black transition-all cursor-pointer border border-white/5 group text-left sm:text-center justify-start sm:justify-center text-sm font-medium"
            >
              <div className="w-10 h-10 rounded-full bg-nexus-green/10 text-nexus-green flex items-center justify-center group-hover:bg-nexus-black/5 group-hover:text-nexus-black transition-colors">
                <Linkedin size={18} />
              </div>
              <span className="text-gray-200 group-hover:text-nexus-black transition-colors">LinkedIn / NexusElite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 mt-12 bg-nexus-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Nexus Logo" className="w-6 h-6 object-contain" referrerPolicy="no-referrer" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <span className="font-sans font-black text-lg tracking-tighter">Nexus</span>
        </div>
        
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        
        <div className="flex gap-4">
          <Instagram size={20} className="text-gray-500 hover:text-nexus-green cursor-pointer" />
          <Twitter size={20} className="text-gray-500 hover:text-nexus-green cursor-pointer" />
          <Linkedin size={20} className="text-gray-500 hover:text-nexus-green cursor-pointer" />
        </div>
      </div>
      <p className="text-center text-gray-700 text-[10px] mt-8 uppercase tracking-widest">© 2024 Nexus Elite Sports & Talents. Proteger. Crecer. Innovar.</p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-nexus-black selection:bg-nexus-green selection:text-nexus-black">
      <Navbar />
      <Hero />
      <Ticker />
      <FeaturedOn />
      <Services />
      <CreatorsAndBrands />
      <Contact />
      <Footer />
    </div>
  );
}
