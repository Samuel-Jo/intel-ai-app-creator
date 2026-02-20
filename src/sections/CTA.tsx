import { motion } from 'framer-motion';
import { Phone, Globe, QrCode, Mail } from 'lucide-react';

export default function CTA() {
    return (
        <section id="cta" className="section-padding bg-[#0f172a] relative overflow-hidden">
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        지원을 망설이지 마세요
                    </motion.h2>
                    <p className="text-gray-400 text-lg font-medium">인텔의 미래 주인공이 될 당신을 기다립니다.</p>
                </div>

                <div className="grid md:grid-cols-12 gap-12 items-center">
                    {/* Info list on the left */}
                    <div className="md:col-span-7 space-y-12">
                        {[
                            {
                                label: 'Official Mobile Site',
                                value: 'www.intel-kdt.com',
                                icon: <Globe size={28} />
                            },
                            {
                                label: 'Email Address',
                                value: 'info@intel-ai.com',
                                icon: <Mail size={28} />
                            },
                            {
                                label: 'Phone Number',
                                value: '010-7790-8085',
                                icon: <Phone size={28} />
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-8"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shrink-0">
                                    {item.icon}
                                </div>
                                <div className="space-y-1">
                                    <div className="text-gray-500 text-sm font-bold uppercase tracking-tight">{item.label}</div>
                                    <div className="text-2xl font-bold text-white">{item.value}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* QR card on the right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-5 bg-white p-12 rounded-[48px] flex flex-col items-center text-center gap-8"
                    >
                        <div className="w-full aspect-square bg-blue-50 rounded-3xl flex items-center justify-center">
                            <QrCode size={180} className="text-blue-600" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">QR 간편 지원</h3>
                            <p className="text-gray-500 font-medium">스마트폰으로 스캔하여 <br /> 지금 바로 지원하세요</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
