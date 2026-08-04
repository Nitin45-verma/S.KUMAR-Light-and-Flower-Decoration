import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Calendar, User, MessageSquare, Send, Sparkles, CheckCircle2, Clock, Check, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/content';

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
    <section id="contact" className="py-20 sm:py-28 bg-[#1a0a2e] relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#4a1268]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Clean & Elegant Headline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#2e0a4a]/90 via-[#1a0a2e] to-[#2e0a4a]/90 border-2 border-[#d4af37]/50 text-center shadow-[0_15px_40px_rgba(13,5,24,0.9)] relative overflow-hidden"
        >
          {/* Subtle Ambient Gold Glow Accents */}
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#f5c451]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#f5c451]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d0518]/80 border border-[#d4af37]/30 text-[#f5c451] text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#f5c451]" />
              <span>Get In Touch With Us</span>
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-hindi text-gold-gradient py-2 leading-relaxed drop-shadow-md">
              "हमारी लाइटिंग से दें एक नई पहचान!"
            </h2>

            <p className="mt-2 text-sm sm:text-base text-slate-200 font-sans">
              Make every special occasion even more special in Jaipur.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Clickable Phone Card */}
            <a
              href={`tel:${businessInfo.phone}`}
              className="block p-6 rounded-2xl bg-[#0d0518]/90 border border-[#d4af37]/40 hover:border-[#f5c451] glass-panel card-hover-glow transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold-gradient p-[2px] shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform shrink-0">
                  <div className="w-full h-full bg-[#0d0518] rounded-full flex items-center justify-center text-[#f5c451]">
                    <Phone className="w-6 h-6 fill-[#f5c451]" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Direct Call / Phone
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold font-serif-heading text-gold-gradient block">
                    {businessInfo.phoneFormatted}
                  </span>
                  <span className="text-xs text-slate-300 font-hindi block mt-0.5">
                    तुरंत बुकिंग हेतु कॉल करें
                  </span>
                </div>
              </div>
            </a>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#0d0518]/90 border border-[#d4af37]/30 glass-panel">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2e0a4a] border border-[#d4af37]/30 flex items-center justify-center text-[#f5c451] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-100 uppercase tracking-wide">
                    Address & Plus Code
                  </h4>
                  <p className="text-sm font-semibold text-[#f5c451] mt-1 leading-snug">
                    {businessInfo.address}
                  </p>
                  <p className="text-xs text-slate-300 font-hindi mt-1.5">
                    किशनपुरा, खातीपुरा, वैशाली नगर व संपूर्ण जयपुर क्षेत्र
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-2xl bg-[#0d0518]/90 border border-[#d4af37]/30 glass-panel">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2e0a4a] border border-[#d4af37]/30 flex items-center justify-center text-[#f5c451] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-100 uppercase tracking-wide">
                    Booking Availability
                  </h4>
                  <p className="text-sm font-semibold text-[#f5c451] mt-1">
                    24/7 Event Booking Available
                  </p>
                  <p className="text-xs text-slate-300 font-hindi mt-1">
                    इवेंट से पहले 100% समय पर सजावट पूरी करने की गारंटी
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0d0518]/95 border border-[#d4af37]/40 shadow-2xl glass-panel relative">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-[#f5c451]" />
                <h3 className="text-2xl font-bold font-serif-heading text-gold-gradient">
                  Book Your Event Decor
                </h3>
              </div>
              <p className="text-xs text-slate-300 font-hindi mb-6">
                अपनी पसंद की एक या एक से अधिक सेवाएं चुनकर डिटेल भरें, हम तुरंत आपसे संपर्क करेंगे।
              </p>

              <AnimatePresence>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-2xl bg-[#2e0a4a] border border-[#f5c451] text-center space-y-5 shadow-xl"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold-gradient mx-auto flex items-center justify-center text-purple-950">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold font-hindi text-gold-gradient">
                      धन्यवाद! आपका बुकिंग निवेदन प्राप्त हो गया है।
                    </h4>
                    <p className="text-sm text-slate-200">
                      S.Kumar Light and Flower Decoration की टीम शीघ्र ही आपसे <strong>{businessInfo.phone}</strong> पर संपर्क करेगी।
                    </p>

                    {formData.selectedServices.length > 0 && (
                      <div className="p-4 bg-[#1a0a2e] rounded-2xl border border-[#d4af37]/30 text-left text-xs space-y-2 max-w-md mx-auto">
                        <span className="text-[#f5c451] font-semibold block">Selected Services ({formData.selectedServices.length}):</span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {formData.selectedServices.map((srv, idx) => (
                            <span key={idx} className="bg-[#2e0a4a] text-slate-200 px-3 py-1 rounded-full border border-[#d4af37]/40 text-xs flex items-center gap-1">
                              <Check className="w-3.5 h-3.5 text-[#f5c451]" />
                              {srv}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all transform hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Send Details on WhatsApp</span>
                      </a>
                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1a0a2e] text-[#f5c451] text-xs font-semibold border border-[#d4af37]/40 hover:bg-[#d4af37]/20 transition-colors"
                      >
                        Book Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 uppercase mb-1.5">
                          Your Name / आपका नाम *
                        </label>
                        <div className="relative">
                          <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Nitin Verma"
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#1a0a2e]/90 border border-[#d4af37]/30 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#f5c451] transition-colors text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 uppercase mb-1.5">
                          Phone Number / मोबाइल नंबर *
                        </label>
                        <div className="relative">
                          <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. 9079689655"
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#1a0a2e]/90 border border-[#d4af37]/30 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#f5c451] transition-colors text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase mb-1.5">
                        Event Date / तारीख
                      </label>
                      <div className="relative">
                        <Calendar className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#1a0a2e]/90 border border-[#d4af37]/30 text-slate-100 focus:outline-none focus:border-[#f5c451] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Multi-Select Service Interested */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider">
                          Services Interested / सेवाएं चुनें *
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-semibold text-[#f5c451] bg-[#d4af37]/15 px-2.5 py-0.5 rounded-full border border-[#d4af37]/30">
                            {formData.selectedServices.length} Selected (एक से अधिक चुनें)
                          </span>
                          <button
                            type="button"
                            onClick={formData.selectedServices.length === serviceOptions.length ? handleClearServices : handleSelectAllServices}
                            className="text-[11px] text-[#f5c451] hover:underline transition-colors font-medium"
                          >
                            {formData.selectedServices.length === serviceOptions.length ? 'Clear All' : 'Select All'}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {serviceOptions.map((srv) => {
                          const isSelected = formData.selectedServices.includes(srv.label);
                          return (
                            <button
                              key={srv.id}
                              type="button"
                              onClick={() => toggleService(srv.label)}
                              className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer relative overflow-hidden ${
                                isSelected
                                  ? 'bg-gradient-to-r from-[#3e125c] to-[#2e0a4a] border-[#f5c451] text-white shadow-[0_0_15px_rgba(245,196,81,0.25)] scale-[1.01]'
                                  : 'bg-[#1a0a2e]/90 border-[#d4af37]/30 text-slate-300 hover:border-[#f5c451]/60 hover:bg-[#280c48]'
                              }`}
                            >
                              <span className="text-lg shrink-0">{srv.emoji}</span>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-slate-100 text-xs truncate">{srv.label}</div>
                                <div className="text-[10px] text-slate-400 truncate">{srv.hindi}</div>
                              </div>
                              <div
                                className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-all ${
                                  isSelected ? 'bg-gold-gradient border-[#f5c451] text-purple-950 font-bold' : 'border-slate-500'
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {formData.selectedServices.length === 0 && (
                        <p className="text-xs text-rose-400 mt-2 font-hindi flex items-center gap-1">
                          <span>⚠️ कृपया कम से कम एक सेवा अवश्य चुनें! (Select at least 1 service)</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase mb-1.5">
                        Additional Message / विशेष मांग
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                        <textarea
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="e.g. Need fairy lights canopy & flower mandap setup in Jaipur..."
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#1a0a2e]/90 border border-[#d4af37]/30 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#f5c451] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-gold-gradient text-purple-950 font-bold text-base shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(245,196,81,0.7)] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-purple-950 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Submit Booking Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl overflow-hidden border-2 border-[#d4af37]/30 shadow-2xl glass-panel"
        >
          <div className="p-4 bg-[#0d0518] border-b border-[#d4af37]/20 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-slate-200">
              <MapPin className="w-5 h-5 text-[#f5c451]" />
              <span className="font-bold text-sm">Location: QM5X+WP6 Kishanpura at Khatipura, Rajasthan</span>
            </div>
            <span className="text-xs text-[#f5c451] font-hindi">PIN - {businessInfo.pincode}</span>
          </div>

          <div className="w-full h-80 sm:h-96 relative bg-[#0d0518]">
            <iframe
              src={businessInfo.mapIframeSrc}
              title="S.Kumar Light and Flower Decoration Location Map QM5X+WP6 Kishanpura at Khatipura Rajasthan"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) opacity(0.9)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
