import { motion } from 'framer-motion';
import { Phone, Globe, QrCode, ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="section-padding bg-bg-secondary relative overflow-hidden">
            {/* Background Narrative Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent-neon-rgba rounded-full pointer-events-none"
                style={{ opacity: 0.05, filter: 'blur(150px)' }} />

            <div className="container relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full glass text-accent-neon text-xs font-bold tracking-widest uppercase mb-6"
                            style={{ borderColor: 'rgba(212, 255, 0, 0.1)' }}
                        >
                            Final Call to Action
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-bold text-white leading-[1.1] mb-8"
                        >
                            인텔과 함께하는 <br />
                            <span className="text-gradient-neon">미래의 주인공이 되세요</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-text-secondary max-w-2xl mx-auto"
                        >
                            글로벌 수준의 AI 기술력을 내일배움카드로 <br className="hidden md:block" />
                            전액 무료로 지원받을 수 있는 마지막 기회입니다.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                        {/* Application Card (7 cols) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-8 glass p-12 relative overflow-hidden group"
                            style={{ gridColumn: 'span 8' }}
                        >
                            <div className="absolute inset-0 pointer-events-none"
                                style={{ background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)' }} />
                            <div className="relative z-10 h-full flex flex-col justify-between space-y-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 group/item">
                                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all"
                                                style={{ backgroundColor: 'rgba(212, 255, 0, 0.1)', borderColor: 'rgba(212, 255, 0, 0.2)' }}>
                                                <Globe size={24} className="text-accent-neon" />
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Official Website</div>
                                                <a href="http://www.intel-kdt.com" className="text-lg text-white font-bold hover:text-accent-neon transition-colors">www.intel-kdt.com</a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 group/item">
                                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all"
                                                style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)', borderColor: 'rgba(0, 229, 255, 0.2)' }}>
                                                <Phone size={24} className="text-accent-blue" />
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Inquiry</div>
                                                <div className="text-lg text-white font-bold">010-7790-8085</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="text-xs text-text-muted font-medium mb-4 italic">"시작이 반입니다. 지금 지원하고 커리어를 업그레이드 하세요."</div>
                                        <button className="btn-premium btn-primary w-full text-xl justify-center py-5">
                                            지금 바로 지원하기 <ArrowRight />
                                        </button>
                                    </div>
                                </div>
                                <div className="pt-8 border-t text-center md:text-left"
                                    style={{ borderTopColor: 'rgba(255,255,255,0.05)' }}>
                                    <span className="text-xs text-text-muted font-bold tracking-widest uppercase">Sponsored by</span>
                                    <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-8 opacity-40 transition-all duration-700 group-hover:opacity-100"
                                        style={{ filter: 'grayscale(1)' }}>
                                        <span className="text-sm font-bold text-white tracking-widest">고용노동부</span>
                                        <span className="text-sm font-bold text-white tracking-widest">Intel®</span>
                                        <span className="text-sm font-bold text-white tracking-widest">RAPA</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* QR Card (5 cols) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4 glass p-10 flex flex-col items-center justify-center text-center space-y-6"
                            style={{ gridColumn: 'span 4' }}
                        >
                            <div className="p-4 bg-white rounded-3xl transition-transform duration-500 hover:scale-105"
                                style={{ boxShadow: '0 0 30px rgba(212, 255, 0, 0.3)' }}>
                                <QrCode size={180} className="text-black" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 font-heading">QR 간편 지원</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    스마트폰으로 스캔하여 <br />
                                    모바일 지원 페이지로 이동하세요.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
