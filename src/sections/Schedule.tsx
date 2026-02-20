import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

export default function Schedule() {
    return (
        <section className="section bg-bg-primary">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        2026, A 6-Month Commitment <br />
                        to becoming an AI Specialist
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Timeline Wrapper */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {[
                            { label: 'Application Deadline', value: 'March 22, 2026', icon: <Calendar size={18} />, color: 'bg-red-500/10 text-red-400' },
                            { label: 'Education Period', value: 'Mar 30 - Sep 22, 2026', icon: <Calendar size={18} />, color: 'bg-neon/10 text-neon' },
                            { label: 'Education Hours', value: 'Weekdays 09:00 - 18:00', icon: <Clock size={18} />, color: 'bg-accent-blue/10 text-accent-blue' }
                        ].map((item, i) => (
                            <div key={i} className={`p-6 rounded-2xl border border-white/5 bg-bg-secondary ${item.color}`}>
                                <div className="flex items-center gap-2 mb-2 font-bold text-xs uppercase tracking-wider opacity-60">
                                    {item.icon} {item.label}
                                </div>
                                <div className="text-lg font-bold text-white transition-all transform hover:translate-x-1">{item.value}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Eligibility Checklist */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-bg-secondary border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row gap-12 items-center"
                    >
                        <div className="flex items-center gap-4 text-white">
                            <div className="p-4 bg-neon/10 rounded-2xl text-neon">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-2xl font-bold">Eligibility <br /> Checklist</h3>
                        </div>
                        <div className="flex-1 grid md:grid-cols-1 gap-4">
                            {[
                                "Eligible for Tomorrow Learning Card issuance",
                                "Open to anyone under 70 years of age",
                                "Major doesn't matter: Non-majors can learn from basics"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                                    <CheckCircle2 size={16} className="text-neon flex-shrink-0" />
                                    <span className="text-white/60 text-sm">{text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
