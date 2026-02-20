import { motion } from 'framer-motion';
import { Rocket, Trophy, CheckCircle2 } from 'lucide-react';

export default function Outcomes() {
    return (
        <section id="outcomes" className="section-padding bg-bg-secondary relative overflow-hidden">
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Visual Mockup - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Main Mockup Card */}
                        <div className="glass p-4 rounded-3xl relative z-10" style={{ borderRadius: '40px' }}>
                            <div className="w-full aspect-video bg-bg-primary overflow-hidden border relative"
                                style={{ borderRadius: '28px', borderColor: 'rgba(255,255,255,0.05)' }}>
                                <div className="absolute inset-0 pointer-events-none"
                                    style={{ background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)' }} />

                                {/* Mockup Content (Dashboard representation) */}
                                <div className="p-8 h-full flex flex-col gap-6">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(239, 68, 68, 0.5)' }} />
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(245, 158, 11, 0.5)' }} />
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(34, 197, 94, 0.5)' }} />
                                        </div>
                                        <div className="h-6 w-32 glass rounded-full" />
                                    </div>
                                    <div className="flex-grow grid grid-cols-3 gap-4">
                                        <div className="col-span-2 glass rounded-2xl p-4 flex flex-col justify-end gap-2"
                                            style={{ gridColumn: 'span 2' }}>
                                            <div className="h-2 w-1/2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                                            <div className="h-4 w-3/4 rounded-full" style={{ backgroundColor: 'rgba(212, 255, 0, 0.2)' }} />
                                        </div>
                                        <div className="glass rounded-2xl flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-full border-4 animate-spin"
                                                style={{ borderColor: 'rgba(212, 255, 0, 0.2)', borderTopColor: 'var(--accent-neon)' }} />
                                        </div>
                                        <div className="glass rounded-2xl p-4 flex gap-2">
                                            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
                                            <div className="flex-grow flex flex-col gap-2">
                                                <div className="h-2 w-full rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                                                <div className="h-2 w-3/4 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
                                            </div>
                                        </div>
                                        <div className="col-span-2 glass rounded-2xl p-4 flex items-center gap-4"
                                            style={{ gridColumn: 'span 2' }}>
                                            <Trophy className="text-accent-neon" style={{ opacity: 0.4 }} />
                                            <div className="h-2 w-1/3 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Decoration */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute z-20 glass p-8 rounded-3xl"
                            style={{ bottom: '-40px', right: '-40px', boxShadow: 'var(--shadow-lg)', borderColor: 'rgba(255,255,255,0.1)' }}
                        >
                            <div className="text-4xl font-bold text-accent-neon mb-1">92%</div>
                            <div className="text-[10px] text-text-muted font-bold tracking-widest uppercase">Completion Rate</div>
                        </motion.div>
                    </motion.div>

                    {/* Content - Right Side */}
                    <div className="space-y-12">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="text-accent-neon text-xs font-bold tracking-widest uppercase mb-4"
                            >
                                Career Impact
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8"
                            >
                                당신의 이력은 <br />
                                <span className="text-gradient-neon">'실전 결과물'</span>로 증명됩니다
                            </motion.h2>
                        </div>

                        <div className="space-y-10">
                            {[
                                {
                                    icon: <Rocket className="text-accent-neon" size={24} />,
                                    title: "현업 서비스 수준의 포트폴리오",
                                    desc: "단순 과제가 아닌 배포 가능한 수준의 AI 마그마 서비스를 완성하여, 면접관을 설득하는 강력한 무기를 확보합니다."
                                },
                                {
                                    icon: <Trophy className="text-accent-blue" size={24} />,
                                    title: "글로벌 무대 진출 기회",
                                    desc: "인텔 글로벌 해커톤 참가 연계 및 최우수 수료자 대상 기업 인턴십, 창업 지원 등 지속 가능한 성장을 지원합니다."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex gap-8 group"
                                >
                                    <div className="shrink-0 w-16 h-16 rounded-2xl glass flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                        style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                                        {item.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold text-white transition-colors font-heading group-hover:text-accent-neon">{item.title}</h3>
                                        <p className="text-text-secondary text-base leading-relaxed max-w-lg">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <ul className="grid md:grid-cols-2 gap-4" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                            {["실무 중심 AI 역량", "MCP 글로벌 인증", "1:1 취업 컨설팅", "네트워킹 파티"].map((text, i) => (
                                <li key={i} className="flex items-center gap-2 text-text-muted text-sm font-medium">
                                    <CheckCircle2 size={16} className="text-accent-neon" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
