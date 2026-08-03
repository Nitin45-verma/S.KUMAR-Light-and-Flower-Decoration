import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Play, X, Loader2, Film, Phone, Volume2, VolumeX, Music } from 'lucide-react';
import { businessInfo } from '../data/content';

const videoHighlightsData = [
  {
    id: 'highlight-1',
    title: 'शाही स्टेज एवं लाइटिंग डेकोरेशन',
    titleEng: 'Royal Stage & Lighting Highlights',
    category: 'Lighting & Stage',
    src: '/videos/highlight-1.mp4',
    rotation: 270, // Rotated 90 degrees further to make the NK logo perfectly straight
    desc: 'रॉयल वेडिंग स्टेज, वार्म एंबियंत लाइटिंग और क्रिस्टल बैकड्रॉप सेटअप की मनमोहक झलक।',
    trendingSong: 'Kudmayi & Din Shagna Da (Royal Shehnai Mix)',
    trendingTag: '🔥 Trending Royal Wedding Song',
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
    trendingTag: '🔥 Trending Festival Light Song',
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
    trendingTag: '🔥 Trending Haldi / Mehendi Beats',
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
    trendingTag: '🔥 Trending Sangeet DJ Party Remix',
    audioSrc: '/audio/dj_sangeet_song.wav'
  }
];

const VideoHighlights = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isBuffering, setIsBuffering] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const sectionRef = useRef(null);
  const modalVideoRef = useRef(null);
  const audioRef = useRef(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="highlights"
      className="relative py-20 sm:py-28 bg-[#1a0a2e] overflow-hidden border-t border-b border-[#d4af37]/20"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4a1268]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d0518] border border-[#d4af37]/30 text-[#f5c451] text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Film className="w-4 h-4 text-[#f5c451]" />
            <span>Video Highlights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-heading text-gold-gradient"
          >
            OUR EVENT VIDEO HIGHLIGHTS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-300 font-hindi"
          >
            "देखें हमारे द्वारा की गई लाइव सजावट, लाइटिंग व इवेंट्स की वास्तविक झलकियां"
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {videoHighlightsData.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleOpenModal(video)}
              className="group relative rounded-2xl overflow-hidden bg-[#0d0518] border border-[#d4af37]/30 shadow-[0_10px_35px_rgba(13,5,24,0.8)] cursor-pointer hover:border-[#f5c451] card-hover-glow transition-all duration-300 flex flex-col justify-between"
            >
              {/* Video Thumbnail Preview */}
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
                    className="w-full h-full object-cover transition-transform duration-700 filter brightness-90 group-hover:brightness-100 pointer-events-none"
                  />
                ) : (
                  <div className="w-full h-full bg-[#1a0a2e] animate-pulse flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-[#f5c451]/50 animate-spin" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0518] via-[#0d0518]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#0d0518]/80 border border-[#d4af37]/40 text-[11px] font-semibold text-[#f5c451] tracking-wider uppercase backdrop-blur-md">
                  {video.category}
                </div>

                {/* Trending Song Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-10 px-3 py-1.5 rounded-xl bg-[#0d0518]/90 border border-[#d4af37]/30 text-[11px] font-hindi text-[#f5c451] flex items-center gap-2 backdrop-blur-md">
                  <Music className="w-3.5 h-3.5 text-[#f5c451] shrink-0 animate-pulse" />
                  <span className="truncate">{video.trendingSong}</span>
                </div>

                {/* Centered Glowing Gold Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pb-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        '0 0 20px rgba(212, 175, 55, 0.4)',
                        '0 0 40px rgba(245, 196, 81, 0.8)',
                        '0 0 20px rgba(212, 175, 55, 0.4)'
                      ]
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="w-16 h-16 rounded-full bg-gold-gradient p-[2px] shadow-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    <div className="w-full h-full rounded-full bg-[#0d0518]/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#0d0518]/60 transition-colors">
                      <Play className="w-7 h-7 text-[#f5c451] fill-[#f5c451] translate-x-0.5 group-hover:scale-110 transition-transform" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 bg-[#0d0518]/90 border-t border-[#d4af37]/20 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base font-hindi font-bold text-slate-100 group-hover:text-[#f5c451] transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-[#f5c451] font-mono mt-0.5 tracking-wide">
                    {video.titleEng}
                  </p>
                  <p className="text-xs text-slate-300 font-hindi mt-2 line-clamp-2 leading-relaxed">
                    {video.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#d4af37]/20 flex items-center justify-between text-xs text-[#f5c451] font-semibold">
                  <span className="inline-flex items-center gap-1.5 group-hover:text-amber-300 transition-colors">
                    <Play className="w-3.5 h-3.5 fill-[#f5c451]" /> Watch Video & Music
                  </span>
                  <span className="text-amber-300 text-[10px] flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" /> {video.trendingTag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md overflow-y-auto"
          >
            {/* Synchronized Event Background Audio */}
            {activeVideo.audioSrc && (
              <audio
                ref={audioRef}
                src={activeVideo.audioSrc}
                autoPlay
                loop
                muted={isMuted}
              />
            )}

            <motion.div
              key="video-modal-content"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#1a0a2e] border-2 border-[#d4af37]/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.4)] flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-[#0d0518] border-b border-[#d4af37]/30 flex items-center justify-between gap-4 z-10">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xl bg-gold-gradient text-purple-950 shrink-0">
                    <Film className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-hindi font-bold text-gold-gradient truncate">
                      {activeVideo.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-mono truncate">
                      {activeVideo.titleEng}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Music Audio Toggle & Equalizer */}
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2e0a4a] border border-[#d4af37]/30 text-xs text-[#f5c451] hover:bg-[#4a1268] transition-colors cursor-pointer"
                    title={isMuted ? "Unmute Music" : "Mute Music"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-red-400" />
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-[#f5c451] animate-pulse" />
                        <div className="flex items-end gap-0.5 h-3">
                          <span className="w-0.5 h-full bg-[#f5c451] animate-bounce" />
                          <span className="w-0.5 h-2/3 bg-[#f5c451] animate-bounce delay-100" />
                          <span className="w-0.5 h-4/5 bg-[#f5c451] animate-bounce delay-200" />
                        </div>
                      </>
                    )}
                    <span className="hidden sm:inline font-bold">
                      {isMuted ? 'Muted' : 'Music ON'}
                    </span>
                  </button>

                  <button
                    onClick={handleCloseModal}
                    title="Close Video"
                    aria-label="Close Video"
                    className="p-2.5 rounded-full bg-[#0d0518] text-[#f5c451] hover:bg-[#2e0a4a] border border-[#d4af37]/40 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Video Player Container */}
              <div className="relative w-full min-h-[50vh] max-h-[75vh] bg-black flex items-center justify-center overflow-hidden p-4">
                {isBuffering && (
                  <div className="absolute inset-0 z-20 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4">
                    <Loader2 className="w-10 h-10 text-[#f5c451] animate-spin mb-2" />
                    <span className="text-sm font-hindi text-[#f5c451]">
                      वीडियो एवं ट्रेंडिंग म्यूजिक लोड हो रहा है...
                    </span>
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
                  className="w-auto h-auto max-w-full max-h-[68vh] sm:max-h-[72vh] object-contain rounded-lg shadow-2xl mx-auto"
                  onWaiting={() => setIsBuffering(true)}
                  onLoadStart={() => setIsBuffering(true)}
                  onCanPlay={() => setIsBuffering(false)}
                  onPlaying={(e) => {
                    setIsBuffering(false);
                    e.target.muted = true;
                  }}
                  onVolumeChange={(e) => {
                    e.target.muted = true;
                  }}
                  onSeeked={() => setIsBuffering(false)}
                />
              </div>

              {/* Modal Footer with Trending Music Tag */}
              <div className="p-4 sm:p-5 bg-[#0d0518] border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2e0a4a]/80 border border-[#d4af37]/30 text-xs font-bold text-[#f5c451] mb-2">
                    <Music className="w-3.5 h-3.5 text-[#f5c451]" />
                    <span className="truncate">{activeVideo.trendingTag}: {activeVideo.trendingSong}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-hindi leading-relaxed">
                    {activeVideo.desc}
                  </p>
                </div>

                <a
                  href={`tel:${businessInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gold-gradient text-purple-950 font-bold text-xs shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(245,196,81,0.7)] transition-all shrink-0 w-full sm:w-auto text-center"
                >
                  <Phone className="w-4 h-4 fill-purple-950" />
                  <span>Book Event: {businessInfo.phone}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoHighlights;
