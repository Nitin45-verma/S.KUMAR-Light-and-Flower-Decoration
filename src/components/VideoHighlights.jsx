import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Play, X, Loader2, Film, Phone, Volume2, VolumeX, Music } from 'lucide-react';
import { businessInfo } from '../data/content';
import TextReveal from './TextReveal';
import MagneticButton from './MagneticButton';

const videoHighlightsData = [
  {
    id: 'highlight-1',
    title: 'शाही स्टेज एवं लाइटिंग डेकोरेशन',
    titleEng: 'Royal Stage & Lighting Highlights',
    category: 'Lighting & Stage',
    src: '/videos/highlight-1.mp4',
    rotation: 270,
    desc: 'रॉयल वेडिंग स्टेज, वार्म एंबियंत लाइटिंग और क्रिस्टल बैकड्रॉप सेटअप की मनमोहक झलक।',
    trendingSong: 'Kudmayi & Din Shagna Da (Royal Shehnai Mix)',
    audioSrc: '/audio/stage_wedding_song.wav'
  },
  {
    id: 'highlight-2',
    title: 'इमारत एवं गार्डन लाइटिंग डेकोरेशन',
    titleEng: 'Building & Garden Light Decor',
    category: 'Lighting',
    src: '/videos/highlight-2.mp4',
    rotation: 0,
    desc: 'सुनहरी वार्म स्ट्रिंग लाइट्स और जगमगाती बिल्डिंग इल्यूमिनेशन डेकोरेशन की मनमोहक झलक।',
    trendingSong: 'Shubhaarambh & Aaj Sajeya (Festive Lights Beats)',
    audioSrc: '/audio/lights_festive_song.wav'
  },
  {
    id: 'highlight-3',
    title: 'ग्रैंड वेडिंग टेंट व फ्लावर वर्क',
    titleEng: 'Grand Wedding Tent & Floral Decor',
    category: 'Tent & Flowers',
    src: '/videos/highlight-3.mp4',
    rotation: 0,
    desc: 'वाटरप्रूफ लग्जरी टेंट, ताजे गेंदे व गुलाब की सजावट और शाही सीलिंग कैनोपी।',
    trendingSong: 'Rangisari & Navrai Majhi (Haldi Floral Mix)',
    audioSrc: '/audio/floral_haldi_song.wav'
  },
  {
    id: 'highlight-4',
    title: 'डीजे साउंड एवं लेजर शो नाइट',
    titleEng: 'High-Energy DJ & Laser Show',
    category: 'DJ & Sound',
    src: '/videos/highlight-4.mp4',
    rotation: 0,
    desc: 'पावरफुल लाइन-एरे साउंड सिस्टम, मूविंग लेजर बीम और फॉग इफेक्ट के साथ धमाकेदार संगीत नाइट।',
    trendingSong: 'Kala Chashma & Malhari (Heavy Bass Sangeet DJ Remix)',
    audioSrc: '/audio/dj_sangeet_song.wav'
  }
];

const VideoHighlights = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isBuffering, setIsBuffering] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const sectionRef = useRef(null);
  const modalVideoRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, margin: '200px 0px' });

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
      setIsBuffering(true);

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          handleCloseModal();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeVideo]);

  const handleOpenModal = (video) => {
    setActiveVideo(video);
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setActiveVideo(null);
  };

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section
      ref={sectionRef}
      id="highlights"
      className="py-24 sm:py-32 bg-purple-950 text-slate-100 relative overflow-hidden bg-light-glow border-t border-b border-amber-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header matching exact screenshot 7 */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/40 bg-purple-950/80 text-amber-300 text-xs font-bold uppercase tracking-widest shadow-md font-sans">
            <Film className="w-4 h-4 text-amber-400" />
            <span>VIDEO HIGHLIGHTS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-gold-gradient tracking-wide uppercase leading-tight">
            OUR EVENT VIDEO HIGHLIGHTS
          </h2>

          <p className="text-base sm:text-lg text-slate-200 font-hindi italic font-medium">
            "देखें हमारे द्वारा की गई लाइव सजावट, लाइटिंग व इवेंट्स की वास्तविक झलकियां"
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {videoHighlightsData.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileTap={{ scale: 0.97 }}
              onMouseMove={handleCardMouseMove}
              onClick={() => handleOpenModal(video)}
              role="button"
              tabIndex={0}
              aria-label={`Watch ${video.title} video highlight`}
              data-cursor="view"
              className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer transition-all duration-300 flex flex-col justify-between glass-card-hover card-spotlight"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black flex items-center justify-center">
                {isInView ? (
                  <video
                    src={`${video.src}#t=0.001`}
                    preload="metadata"
                    muted
                    playsInline
                    style={
                      video.rotation
                        ? { transform: `rotate(${video.rotation}deg) scale(1.48)` }
                        : {}
                    }
                    className="w-full h-full object-cover transition-transform duration-700 brightness-90 group-hover:brightness-100 pointer-events-none"
                  />
                ) : (
                  <div className="w-full h-full bg-purple-900 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-amber-300 animate-spin" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/30 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-purple-950/90 border border-amber-400/40 text-label font-bold text-amber-300 tracking-wider uppercase font-body">
                  {video.category}
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-14 h-14 rounded-full bg-gold-gradient border border-amber-300 flex items-center justify-center text-purple-950 group-hover:scale-110 transition-transform shadow-gold-glow">
                    <Play className="w-6 h-6 translate-x-0.5 fill-purple-950 text-purple-950" />
                  </div>
                </div>
              </div>

              <div className="p-5 glass-panel border-t border-amber-500/20 flex flex-col justify-between flex-grow z-10">
                <div>
                  <h3 className="text-body font-hindi font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-body-sm text-amber-300/80 font-mono mt-0.5">
                    {video.titleEng}
                  </p>
                  <p className="text-body-sm text-slate-300 font-hindi mt-2 line-clamp-2 leading-relaxed font-light">
                    {video.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-body-sm text-amber-300 font-medium font-body">
                  <span className="inline-flex items-center gap-1.5 font-bold">
                    <Play className="w-3.5 h-3.5 fill-amber-300" /> Watch Highlight
                  </span>
                  <span className="text-slate-400 text-[10px] bg-purple-950 p-1 rounded border border-amber-500/20">HD 1080p</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal / Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            key="video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
          >
            {activeVideo.audioSrc && (
              <audio
                ref={modalVideoRef}
                src={activeVideo.audioSrc}
                autoPlay
                loop
                muted={isMuted}
              />
            )}

            <motion.div
              key="video-modal-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-purple-950 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] text-left glass-card"
            >
              <div className="p-4 sm:p-5 bg-purple-900 border-b border-amber-500/20 flex items-center justify-between gap-4 z-10 font-body">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl glass-panel border border-amber-400/40 text-amber-300 shrink-0">
                    <Film className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-h4 font-hindi font-bold text-white truncate">
                      {activeVideo.title}
                    </h3>
                    <p className="text-body-sm text-amber-300 font-mono truncate">
                      {activeVideo.titleEng}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    data-cursor="link"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel border border-amber-400/40 text-body-sm text-amber-300 hover:bg-amber-400 hover:text-purple-950 transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
                    <span className="hidden sm:inline font-medium font-body">
                      {isMuted ? 'Muted' : 'Music ON'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    data-cursor="link"
                    className="p-2.5 rounded-full glass-panel border border-amber-400/40 text-slate-200 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5 text-amber-300" />
                  </button>
                </div>
              </div>

              <div className="relative w-full min-h-[50vh] max-h-[75vh] bg-black flex items-center justify-center overflow-hidden p-4">
                {isBuffering && (
                  <div className="absolute inset-0 z-20 bg-black/80 flex flex-col items-center justify-center text-center p-4">
                    <Loader2 className="w-8 h-8 text-amber-300 animate-spin mb-2" />
                    <span className="text-body-sm font-hindi text-amber-200">Loading Video Stream...</span>
                  </div>
                )}

                <video
                  ref={modalVideoRef}
                  src={activeVideo.src}
                  autoPlay
                  muted
                  controls
                  playsInline
                  preload="metadata"
                  style={
                    activeVideo.rotation
                      ? { transform: `rotate(${activeVideo.rotation}deg)`, maxHeight: '55vh' }
                      : {}
                  }
                  className="w-auto h-auto max-w-full max-h-[68vh] sm:max-h-[72vh] object-contain rounded-xl shadow-2xl mx-auto"
                  onCanPlay={() => setIsBuffering(false)}
                />
              </div>

              <div className="p-4 sm:p-5 bg-purple-950 border-t border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-body">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-amber-400/40 text-body-sm font-medium text-amber-300 mb-1">
                    <Music className="w-3.5 h-3.5 text-amber-300" />
                    <span className="truncate">{activeVideo.trendingSong}</span>
                  </div>
                  <p className="text-body-sm text-slate-300 font-hindi leading-relaxed">
                    {activeVideo.desc}
                  </p>
                </div>

                <MagneticButton
                  href={`tel:${businessInfo.phone}`}
                  className="shimmer-btn gap-2 px-6 py-2.5 rounded-full border border-amber-400/40 text-purple-950 bg-gold-gradient font-bold text-body-sm shrink-0 w-full sm:w-auto text-center shadow-gold-glow"
                  data-cursor="link"
                >
                  <Phone className="w-4 h-4 fill-purple-950" />
                  <span>Book Event: {businessInfo.phone}</span>
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoHighlights;
