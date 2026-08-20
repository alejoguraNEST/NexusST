import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Camera, Award, Search, Sparkles, ChevronRight, Upload, CheckCircle2, Video } from 'lucide-react';
import { CREATORS_DATA, Creator } from '../data/creators';

interface CreatorsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreatorsModal: React.FC<CreatorsModalProps> = ({ isOpen, onClose }) => {
  const [filter, setFilter] = useState<'todos' | 'lifestyle' | 'gaming' | 'sports' | 'media'>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(CREATORS_DATA[0]);
  const [customImages, setCustomImages] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const filteredCreators = CREATORS_DATA.filter((creator) => {
    const matchesFilter = filter === 'todos' || creator.category === filter;
    const matchesSearch =
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.platform.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && selectedCreator) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomImages((prev) => ({
          ...prev,
          [selectedCreator.id]: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-nexus-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between bg-white/5 relative">
            <div>
              <div className="flex items-center gap-2 text-nexus-green text-xs font-bold uppercase tracking-widest mb-1">
                <Camera size={14} />
                <span>Roster de Creadores & Medios</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Creators & Digital Media
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'todos', label: 'Todos' },
                  { id: 'lifestyle', label: 'Lifestyle & Hosts' },
                  { id: 'gaming', label: 'Gaming & Esports' },
                  { id: 'sports', label: 'Sports & Fitness' },
                  { id: 'media', label: 'Medios & Podcasts' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id as any)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      filter === f.id
                        ? 'bg-nexus-green text-nexus-black shadow-lg shadow-nexus-green/20'
                        : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input
                  type="text"
                  placeholder="Buscar creador o plataforma..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-full glass border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-nexus-green"
                />
              </div>
            </div>

            {/* Featured Creator Card */}
            {selectedCreator && (
              <div className="glass rounded-3xl p-6 md:p-8 border border-nexus-green/30 relative overflow-hidden bg-gradient-to-r from-nexus-green/10 via-transparent to-transparent">
                <div className="absolute top-4 right-4 z-20 bg-nexus-green/20 border border-nexus-green/40 px-3 py-1 rounded-full text-[10px] font-bold text-nexus-green uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles size={12} />
                  <span>Destacado Nexus</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Image Column */}
                  <div className="md:col-span-5 relative group">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-nexus-black relative shadow-2xl">
                      <img
                        src={customImages[selectedCreator.id] || selectedCreator.image}
                        alt={selectedCreator.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nexus-black/90 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="inline-block px-3 py-1 rounded-md bg-nexus-green text-nexus-black text-[10px] font-black uppercase tracking-wider mb-2">
                          {selectedCreator.platform}
                        </span>
                        <h4 className="text-xl font-bold">{selectedCreator.name}</h4>
                        <p className="text-xs text-nexus-green font-medium">{selectedCreator.role}</p>
                      </div>
                    </div>

                    <label className="mt-3 flex items-center justify-center gap-2 px-3 py-2 text-[11px] font-medium glass rounded-xl text-gray-400 hover:text-white cursor-pointer transition-colors border border-white/10">
                      <Upload size={14} className="text-nexus-green" />
                      <span>{customImages[selectedCreator.id] ? 'Cambiar foto de ' + selectedCreator.name : 'Subir foto personalizada'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Info Column */}
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                        {selectedCreator.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="text-nexus-green font-bold text-base">{selectedCreator.role}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-300 font-semibold bg-white/10 px-3 py-1 rounded-full text-xs">
                          {selectedCreator.platform}
                        </span>
                        {selectedCreator.handle && (
                          <>
                            <span className="text-gray-500">•</span>
                            <span className="text-nexus-green/90 font-mono text-xs">{selectedCreator.handle}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedCreator.bio}
                    </p>

                    {/* Stats */}
                    {selectedCreator.stats && (
                      <div className="grid grid-cols-3 gap-3 pt-2">
                        {selectedCreator.stats.map((s, idx) => (
                          <div key={idx} className="glass p-3 rounded-xl border border-white/5 text-center">
                            <span className="block text-[10px] uppercase text-gray-400 font-bold tracking-wider">{s.label}</span>
                            <span className="text-sm font-bold text-white">{s.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Achievements */}
                    <div>
                      <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-3 flex items-center gap-2">
                        <Award size={14} className="text-nexus-green" />
                        Puntos Destacados & Proyectos
                      </h4>
                      <ul className="space-y-2">
                        {selectedCreator.achievements.map((ach, idx) => (
                          <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-nexus-green shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a
                        href="#contacto"
                        onClick={onClose}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-nexus-green text-nexus-black font-bold text-xs hover:bg-white transition-all shadow-lg shadow-nexus-green/10"
                      >
                        <Video size={16} />
                        <span>Solicitar Colaboración de Marca</span>
                        <ChevronRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Grid of All Represented Creators */}
            <div>
              <h3 className="text-sm uppercase font-bold text-gray-400 tracking-wider mb-4">
                Todos los Creadores & Medios ({filteredCreators.length})
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredCreators.map((creator) => (
                  <motion.div
                    key={creator.id}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedCreator(creator)}
                    className={`glass rounded-2xl overflow-hidden cursor-pointer border transition-all relative group ${
                      selectedCreator?.id === creator.id
                        ? 'border-nexus-green ring-1 ring-nexus-green/50 bg-white/10'
                        : 'border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="aspect-[4/5] relative overflow-hidden bg-nexus-black">
                      <img
                        src={customImages[creator.id] || creator.image}
                        alt={creator.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nexus-black via-nexus-black/20 to-transparent" />
                      
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-block px-2 py-0.5 rounded bg-nexus-green/20 text-nexus-green text-[9px] font-bold uppercase tracking-wider mb-1 border border-nexus-green/30">
                          {creator.platform}
                        </span>
                        <h4 className="font-bold text-sm text-white line-clamp-1">{creator.name}</h4>
                        <p className="text-[11px] text-gray-400">{creator.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
