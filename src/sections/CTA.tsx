import { motion } from 'framer-motion';
import { Phone, Globe, QrCode } from 'lucide-react';

export default function CTA() {
    return (
        <section className="section bg-bg-secondary relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-neon/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            지금 도전하세요. <br />
                            당신의 커리어가 <span className="text-neon">바뀌는 시점입니다.</span>
                        </h2>
                    </motion.div>

                    {/* Contact Details & QR */}
                    <div className="grid md:grid-cols-2 gap-12 items-center bg-bg-primary rounded-[40px] p-12 border border-white/10 shadow-2xl">
                        <div className="space-y-8 text-left">
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-neon/10 rounded-xl text-neon transition-colors group-hover:bg-neon group-hover:text-black">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-white/40 uppercase font-black tracking-widest">홈페이지</div>
                                    <a href="http://www.intel-kdt.com" className="text-lg text-white font-bold hover:text-neon transition-colors">www.intel-kdt.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-neon/10 rounded-xl text-neon transition-colors group-hover:bg-neon group-hover:text-black">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-white/40 uppercase font-black tracking-widest">문의처</div>
                                    <div className="text-lg text-white font-bold">010-7790-8085</div>
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-neon text-black py-5 rounded-2xl font-black text-xl shadow-[0_20px_40px_rgba(200,255,0,0.2)]"
                            >
                                지금 바로 지원하기
                            </motion.button>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <div className="w-48 h-48 bg-white p-4 rounded-3xl flex items-center justify-center">
                                <QrCode size={160} className="text-black" />
                            </div>
                            <div className="text-sm font-bold text-white/60">QR 스캔하여 지원 페이지로 이동</div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/40 text-sm"
                    >
                        상세 선발 기준은 마인드캔버스 홈페이지 또는 QR 코드를 통해 확인하세요.
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
