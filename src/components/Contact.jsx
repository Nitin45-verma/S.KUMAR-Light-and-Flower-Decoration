import React, { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Calendar, User, MessageSquare, Send, CheckCircle2, Clock, Check, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/content';
import TextReveal from './TextReveal';
import MagneticButton from './MagneticButton';

const AnimatedMap = lazy(() => import('./AnimatedMap'));

const serviceOptions = [
  { id: 'Wedding Lighting', label: 'Wedding Lighting', emoji: '💡', hindi: 'वेडिंग लाइटिंग' },
  { id: 'Flower Decoration', label: 'Flower Decoration', emoji: '🌸', hindi: 'फूलों की सजावट' },
  { id: 'Stage Decoration', label: 'Stage Decoration', emoji: '🎪', hindi: 'स्टेज सजावट' },
  { id: 'DJ System', label: 'DJ System', emoji: '🎧', hindi: 'डीजे सिस्टम' },
  { id: 'Bride Entry', label: 'Bride Entry (Dulhan Entry)', emoji: '👰', hindi: 'दुल्हन एंट्री' },
  { id: 'Tent & Light Setup', label: 'Tent & Light Setup', emoji: '⛺', hindi: 'टेंट व लाइटिंग' },
  { id: 'Digital Wedding Card', label: 'Digital Wedding Card', emoji: '📱', hindi: 'डिजिटल वेडिंग कार्ड' }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    selectedServices: ['Wedding Lighting'],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleService = (serviceLabel) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceLabel);
      if (exists) {
        return { ...prev, selectedServices: prev.selectedServices.filter((s) => s !== serviceLabel) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, serviceLabel] };
      }
    });
  };

  const handleSelectAllServices = () => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: serviceOptions.map((s) => s.label)
    }));
  };

  const handleClearServices = () => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: []
    }));
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      eventDate: '',
      selectedServices: ['Wedding Lighting'],
      message: ''
    });
  };

  const getWhatsAppUrl = () => {
    const servicesText = formData.selectedServices.length > 0
      ? formData.selectedServices.map(s => `• ${s}`).join('\n')
      : 'Not specified';
    const text = `Hello S.Kumar Light and Flower Decoration,\n\nI want to book an event with the following details:\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📅 Date: ${formData.eventDate || 'Not specified'}\n✨ Services Interested:\n${servicesText}\n${formData.message ? `\n💬 Message: ${formData.message}` : ''}`;
    return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    if (formData.selectedServices.length === 0) {
      alert('कृपया कम से कम एक सेवा (Service) जरूर चुनें!');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-purple-950 text-slate-100 relative overflow-hidden bg-light-glow">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-800/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Headline Banner */}
        <div className="mb-16 p-8 sm:p-12 rounded-2xl glass-card border border-amber-400/30 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <span className="text-label font-body uppercase tracking-widest text-amber-300 block mb-3 font-semibold">
              ✨ Get In Touch With Us • संपर्क करें
            </span>

            <TextReveal
              text={`"${businessInfo.taglineHindi}"`}
              className="text-h2 font-display text-gold-gradient py-2 leading-tight"
            />

            <p className="mt-2 text-body font-body text-slate-300 font-light">
              Make every special occasion even more special with our custom lighting & flower decor across Khatipura & Jaipur.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href={`tel:${businessInfo.phone}`}
              data-cursor="link"
              className="block p-6 rounded-2xl glass-card glass-card-hover border border-amber-400/30 shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950 border border-amber-400/40 flex items-center justify-center text-amber-300 group-hover:bg-amber-400 group-hover:text-purple-950 transition-colors shrink-0">
                  <Phone className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <span className="text-label font-body font-semibold text-slate-400 uppercase tracking-wider block">
                    Direct Call / Phone
                  </span>
                  <span className="text-h3 font-bold font-display text-white group-hover:text-amber-300 transition-colors block">
                    {businessInfo.phoneFormatted}
                  </span>
                  <span className="text-body-sm text-amber-300/80 font-hindi block mt-0.5">
                    तुरंत बुकिंग हेतु कॉल करें
                  </span>
                </div>
              </div>
            </a>

            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="block p-6 rounded-2xl glass-card glass-card-hover border border-amber-400/30 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950 border border-amber-400/40 flex items-center justify-center text-amber-300 group-hover:bg-amber-400 group-hover:text-purple-950 transition-colors shrink-0">
                  <MapPin className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 font-body">
                    <h4 className="text-h4 font-semibold text-white uppercase tracking-wide">
                      Location & Google Map
                    </h4>
                    <span className="inline-flex items-center gap-1 text-label font-bold text-amber-300">
                      <Navigation className="w-3 h-3" />
                      <span>Directions</span>
                    </span>
                  </div>
                  <p className="text-body-sm font-semibold text-amber-300 mt-1 font-body">
                    {businessInfo.address}
                  </p>
                  <p className="text-body-sm text-slate-300 font-hindi mt-1.5 flex items-center gap-1">
                    <span>किशनपुरा, खातीपुरा, जयपुर (गूगल मैप्स पर देखने हेतु क्लिक करें)</span>
                    <ExternalLink className="w-3 h-3 text-amber-300 shrink-0" />
                  </p>
                </div>
              </div>
            </a>

            <div className="p-6 rounded-2xl glass-card border border-amber-400/30 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                  <Clock className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="font-body">
                  <h4 className="text-h4 font-semibold text-white uppercase tracking-wide">
                    Booking Availability
                  </h4>
                  <p className="text-body-sm font-bold text-amber-300 mt-1">
                    24/7 Event Booking Available
                  </p>
                  <p className="text-body-sm text-slate-300 font-hindi mt-1">
                    इवेंट से पहले 100% समय पर सजावट पूरी करने की गारंटी
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl glass-card border border-amber-400/30 shadow-2xl">
              <h3 className="text-h3 font-bold font-display text-white mb-1">
                Book Your Event Decor
              </h3>
              <p className="text-body-sm text-amber-200/90 font-hindi mb-6">
                अपनी पसंद की एक या एक से अधिक सेवाएं चुनकर डिटेल भरें, हम तुरंत आपसे संपर्क करेंगे।
              </p>

              <AnimatePresence>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-2xl bg-purple-950 border border-amber-400/30 text-center space-y-5 shadow-xl"
                  >
                    <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400 mx-auto flex items-center justify-center text-amber-300 shadow-gold-glow">
                      <CheckCircle2 className="w-7 h-7 text-amber-300 stroke-[2]" />
                    </div>
                    <h4 className="text-h3 font-bold font-hindi text-white">
                      धन्यवाद! आपका बुकिंग निवेदन प्राप्त हो गया है।
                    </h4>
                    <p className="text-body-sm text-slate-300 font-body">
                      S.Kumar Light and Flower Decoration की टीम शीघ्र ही आपसे <strong>{businessInfo.phone}</strong> पर संपर्क करेगी।
                    </p>

                    {formData.selectedServices.length > 0 && (
                      <div className="p-4 glass-panel rounded-xl border border-amber-500/20 text-left text-body-sm space-y-2 max-w-md mx-auto font-body">
                        <span className="text-amber-300 font-bold block">Selected Services ({formData.selectedServices.length}):</span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {formData.selectedServices.map((srv, idx) => (
                            <span key={idx} className="bg-purple-950 text-amber-300 px-3 py-1 rounded-full border border-amber-400/30 text-body-sm flex items-center gap-1">
                              <Check className="w-3.5 h-3.5 text-amber-400" />
                              {srv}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 font-body">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="link"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-body-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Send Details on WhatsApp</span>
                      </a>
                      <button
                        onClick={handleReset}
                        data-cursor="link"
                        className="w-full sm:w-auto px-6 py-3 rounded-full glass-panel text-slate-200 text-body-sm font-semibold border border-amber-400/30 hover:border-amber-400 transition-colors cursor-pointer"
                      >
                        Book Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 font-body">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="form-name" className="block text-label font-semibold text-slate-300 uppercase mb-1.5">
                          Your Name / आपका नाम *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            id="form-name"
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            data-cursor="text"
                            placeholder="e.g. Nitin Verma"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-purple-950/90 border border-amber-500/30 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors text-body-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="form-phone" className="block text-label font-semibold text-slate-300 uppercase mb-1.5">
                          Phone Number / मोबाइल नंबर *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            id="form-phone"
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            data-cursor="text"
                            placeholder="e.g. 9079689655"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-purple-950/90 border border-amber-500/30 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors text-body-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="form-event-date" className="block text-label font-semibold text-slate-300 uppercase mb-1.5">
                        Event Date / तारीख
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="form-event-date"
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          data-cursor="text"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-purple-950/90 border border-amber-500/30 text-white focus:outline-none focus:border-amber-400 transition-colors text-body-sm"
                        />
                      </div>
                    </div>

                    {/* Multi-Select Services */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="block text-label font-semibold text-slate-300 uppercase tracking-wider">
                          Services Interested / सेवाएं चुनें *
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-label font-bold text-amber-300 bg-purple-950 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                            {formData.selectedServices.length} Selected
                          </span>
                          <button
                            type="button"
                            onClick={formData.selectedServices.length === serviceOptions.length ? handleClearServices : handleSelectAllServices}
                            data-cursor="link"
                            className="text-label text-amber-300 hover:text-white hover:underline transition-colors font-medium cursor-pointer"
                          >
                            {formData.selectedServices.length === serviceOptions.length ? 'Clear All' : 'Select All'}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="group" aria-label="Select services">
                        {serviceOptions.map((srv) => {
                          const isSelected = formData.selectedServices.includes(srv.label);
                          return (
                            <button
                              key={srv.id}
                              type="button"
                              role="checkbox"
                              aria-checked={isSelected}
                              aria-label={`Service option: ${srv.label}`}
                              onClick={() => toggleService(srv.label)}
                              data-cursor="link"
                              className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl border text-left text-body-sm font-medium transition-all cursor-pointer relative ${
                                isSelected
                                  ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold shadow-sm'
                                  : 'bg-purple-950/80 border-amber-500/20 text-slate-300 hover:border-amber-400/40'
                              }`}
                            >
                              <span className="text-base shrink-0">{srv.emoji}</span>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-body-sm truncate">{srv.label}</div>
                                <div className="text-label text-amber-200/80 truncate font-hindi">{srv.hindi}</div>
                              </div>
                              <div
                                className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                                  isSelected ? 'bg-gold-gradient border-amber-300 text-purple-950 font-bold' : 'border-amber-500/30'
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3 stroke-[3] text-purple-950" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="form-message" className="block text-label font-semibold text-slate-300 uppercase mb-1.5">
                        Additional Message / विशेष मांग
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-amber-400 absolute left-3.5 top-3.5" />
                        <textarea
                          id="form-message"
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          data-cursor="text"
                          placeholder="e.g. Need fairy lights canopy & flower mandap setup in Jaipur..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-purple-950/90 border border-amber-500/30 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors text-body-sm"
                        />
                      </div>
                    </div>

                    {/* Magnetic CTA Submit Button */}
                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="shimmer-btn w-full gap-2 py-4 rounded-full bg-gold-gradient text-purple-950 font-bold text-body font-body shadow-gold-glow transition-all duration-300 disabled:opacity-50"
                      data-cursor="link"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-purple-950 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4 fill-purple-950" />
                          <span>Submit Booking Request</span>
                        </>
                      )}
                    </MagneticButton>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Animated Map Section */}
        <Suspense fallback={<div className="mt-16 h-[350px] bg-purple-900 rounded-2xl border border-amber-500/20 animate-pulse" />}>
          <AnimatedMap />
        </Suspense>
      </div>
    </section>
  );
};

export default Contact;
