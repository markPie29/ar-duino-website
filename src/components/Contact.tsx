import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, MessageSquareHeart, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const email = 'markyisulat@gmail.com';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#0e1724]/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#35A2F4]/10 border border-[#35A2F4]/30 text-[#35A2F4] text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>We'd Love Your Feedback</span>
          </div>

          <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Have Questions or Feedback?
          </h2>

          <p className="font-inter text-[#8A9BB5] text-base sm:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            We are actively improving AR-DUINO! Send us your suggestions, feature requests, or bug reports directly to our team.
          </p>

          {/* Email Card Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#1c2b3f]/80 border border-white/10 shadow-2xl backdrop-blur-xl max-w-lg mx-auto flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#35A2F4]/15 border border-[#35A2F4]/30 text-[#35A2F4] flex items-center justify-center mb-4">
              <Mail className="w-7 h-7" />
            </div>

            <span className="text-xs font-inter uppercase tracking-wider text-[#8A9BB5] mb-1 font-semibold">
              Official Team Email
            </span>

            <a
              href={`mailto:${email}`}
              className="font-nunito text-xl sm:text-2xl font-extrabold text-white hover:text-[#35A2F4] transition-colors break-all mb-6"
            >
              {email}
            </a>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              {/* Mailto Button */}
              <a
                href={`mailto:${email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#35A2F4] text-white font-nunito font-bold text-sm hover:bg-[#35A2F4]/90 transition-all shadow-lg shadow-[#35A2F4]/25 cursor-pointer w-full"
              >
                <Send className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border transition-all text-sm font-nunito font-bold cursor-pointer w-full ${
                  copied
                    ? 'bg-[#49F996]/20 border-[#49F996]/50 text-[#49F996]'
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#49F996]" />
                    <span>Copied Address!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8A9BB5]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
