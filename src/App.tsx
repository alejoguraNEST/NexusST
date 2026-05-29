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
  ArrowUpRight
} from 'lucide-react';

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
  return (
    <section id="talento" className="py-24 bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
             {/* Abstract visual representations using cards */}
            <div className="space-y-4">
              <div className="h-64 glass rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-nexus-black to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <Camera size={16} className="text-nexus-green mb-1" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Creators</p>
                </div>
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="h-40 glass rounded-2xl bg-nexus-green/5 border-nexus-green/20 flex items-center justify-center p-8">
                <span className="text-xs font-medium text-center text-gray-400">Impulsamos tu presencia digital hacia el siguiente nivel comercial.</span>
              </div>
            </div>
            <div className="space-y-4 pt-12">
               <div className="h-40 glass rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                 <Users className="text-nexus-green mb-2" size={24} />
                 <h4 className="font-bold text-lg">+100M</h4>
                 <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Alcance Combinado</p>
               </div>
               <div className="h-64 glass rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-nexus-black to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <Trophy size={16} className="text-nexus-green mb-1" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Athletes</p>
                </div>
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541252260733-5433d3e74efc?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <span className="text-nexus-green font-bold text-xs uppercase tracking-widest mb-4 block">Ecosistema Digital</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight italic">Contenido que transforma <span className="text-gradient">Marcas</span></h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Nuestros creadores de contenido y artistas no solo generan vistas; generan cultura. Conectamos el talento con las marcas más grandes del mundo a través de alianzas estratégicas genuinas.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-nexus-green/20 flex items-center justify-center text-nexus-green mt-1">
                <ChevronRight size={16} />
              </div>
              <div>
                <h4 className="font-bold mb-1 underline decoration-nexus-green/30 decoration-2 underline-offset-4">Colaboraciones de Marca</h4>
                <p className="text-sm text-gray-500">Diseñamos campañas que impactan y escalan el reconocimiento de marca.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-nexus-green/20 flex items-center justify-center text-nexus-green mt-1">
                <ChevronRight size={16} />
              </div>
              <div>
                <h4 className="font-bold mb-1 underline decoration-nexus-green/30 decoration-2 underline-offset-4">Gestión de Medios</h4>
                <p className="text-sm text-gray-500">Protección legal y comercial de tus derechos de imagen y contenido.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Gestión Deportiva',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El formato del email no es válido';
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje no puede estar vacío';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', interest: 'Gestión Deportiva', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contacto" className="py-24 max-w-7xl mx-auto px-6">
      <div className="glass rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-nexus-green/5 rounded-full blur-[100px] -mr-40 -mt-40" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">¿Listo para el <br /><span className="text-nexus-green">Siguiente Nivel?</span></h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
              Hablemos sobre tu carrera o tu próximo proyecto comercial. Nuestro equipo de expertos está listo para asesorarte.
            </p>
            <div className="space-y-6 text-sm">
              <a href="mailto:alejogura@nexuselitest.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center"><Mail size={18} /></div>
                alejogura@nexuselitest.com
              </a>
              <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center"><Linkedin size={18} /></div>
                LinkedIn / NexusElite
              </div>
            </div>
          </div>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-1">
                 <input 
                   name="name"
                   type="text" 
                   placeholder="Tu Nombre" 
                   value={formData.name}
                   onChange={handleChange}
                   className={`w-full px-6 py-4 rounded-2xl glass border-none focus:ring-2 outline-none ${errors.name ? 'focus:ring-red-500' : 'focus:ring-nexus-green'}`} 
                 />
                 {errors.name && <p className="text-red-500 text-[10px] ml-4 font-bold uppercase tracking-wider">{errors.name}</p>}
               </div>
               <div className="space-y-1">
                 <input 
                   name="email"
                   type="email" 
                   placeholder="Email" 
                   value={formData.email}
                   onChange={handleChange}
                   className={`w-full px-6 py-4 rounded-2xl glass border-none focus:ring-2 outline-none ${errors.email ? 'focus:ring-red-500' : 'focus:ring-nexus-green'}`} 
                 />
                 {errors.email && <p className="text-red-500 text-[10px] ml-4 font-bold uppercase tracking-wider">{errors.email}</p>}
               </div>
             </div>
             <div className="space-y-1">
               <select 
                 name="interest"
                 value={formData.interest}
                 onChange={handleChange}
                 className="w-full px-6 py-4 rounded-2xl glass border-none focus:ring-2 focus:ring-nexus-green outline-none appearance-none cursor-pointer"
               >
                 <option value="Gestión Deportiva" className="bg-nexus-black">Interés: Gestión Deportiva</option>
                 <option value="gestión de imagen" className="bg-nexus-black">Interés: Gestión de imagen</option>
                 <option value="Registro de obras" className="bg-nexus-black">Interés: Registro de obras</option>
                 <option value="Asesoría Legal" className="bg-nexus-black">Interés: Asesoría Legal</option>
                 <option value="Alianzas de Marca" className="bg-nexus-black">Interés: Alianzas de Marca</option>
                 <option value="Otro" className="bg-nexus-black">Otro</option>
               </select>
             </div>
             <div className="space-y-1">
               <textarea 
                 name="message"
                 placeholder="Cuéntanos más sobre ti..." 
                 rows={4} 
                 value={formData.message}
                 onChange={handleChange}
                 className={`w-full px-6 py-4 rounded-2xl glass border-none focus:ring-2 outline-none resize-none ${errors.message ? 'focus:ring-red-500' : 'focus:ring-nexus-green'}`}
               ></textarea>
               {errors.message && <p className="text-red-500 text-[10px] ml-4 font-bold uppercase tracking-wider">{errors.message}</p>}
             </div>
             <button 
               type="submit"
               disabled={isSubmitting}
               className={`w-full py-4 font-bold rounded-2xl transition-all shadow-xl ${isSubmitting ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-nexus-green text-nexus-black hover:bg-white shadow-nexus-green/10'}`}
             >
               {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
             </button>
             {submitSuccess && (
               <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="text-nexus-green text-center font-bold text-sm"
               >
                 ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
               </motion.p>
             )}
          </form>
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
