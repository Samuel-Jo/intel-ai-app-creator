import { motion } from 'framer-motion';
import { Briefcase, Lightbulb, Users, Code, PieChart, ChevronRight } from 'lucide-react';

export default function Careers() {
    const paths = [
        {
            title: '구직 전문가 트랙',
            description: 'AI 서비스 기획부터 시각화 개발까지 아우르는 올라운더 개발자로 성장하여, 국내외 유수 IT 기업의 핵심 인재로 도약합니다.',
            icon: <Briefcase className="text-accent-neon" size={28} />,
            features: ['AI 앱 개발자', '데이터 분석가', '프롬프트 엔지니어'],
            glow: 'rgba(212, 255, 0, 0.2)'
        },
        {
            title: '창업 솔루션 트랙',
            description: '자신의 아이디어를 Intel AI 기술 기반의 실제 상용 서비스로 직접 구현하고, 비즈니스 모델링을 통해 성공적인 기술 창업을 준비합니다.',
            icon: <Lightbulb className="text-accent-blue" size={28} />,
            features: ['AI 서비스 창업', '기술 CTO', '프로덕트 매니저'],
            glow: 'rgba(0, 229, 255, 0.2)'
        }
    ];

    const roles = [
        { title: 'AI 서비스 기획자', desc: 'GenAI 비즈니스 기획', icon: <Users size={16} /> },
        { title: 'AI 앱 개발자', desc: 'LLM & API 연동 개발', icon: <Code size={16} /> },
        { title: '데이터 분석가', desc: '인사이트 도출 및 시각화', icon: <PieChart size={16} /> }
    ];

    return (
        <section className="section-padding bg-bg-primary overflow-hidden relative">
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-accent-neon text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        Career Paths
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white leading-tight"
                    >
                        당신의 한계를 넘어서는 <br />
                        <span className="text-gradient-neon">새로운 커리어의 시작</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 mb-20">
                    {paths.map((path, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-12 relative group overflow-hidden"
                        >
                            {/* Accent Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] transition-opacity duration-700 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at top right, ${path.glow}, transparent)`,
                                    opacity: 0.2,
                                    marginRight: '-8rem',
                                    marginTop: '-8rem'
                                }} />

                            <div className="relative z-10 space-y-8">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                                    {path.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold text-white font-heading">{path.title}</h3>
                                    <p className="text-text-secondary text-lg leading-relaxed">
                                        {path.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {path.features.map((feature, idx) => (
                                        <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border text-sm text-white/80 font-medium"
                                            style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.05)' }}>
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-white/5 flex items-center justify-between"
                                    style={{ borderTopColor: 'rgba(255,255,255,0.05)' }}>
                                    <span className="text-xs text-text-muted font-bold tracking-widest uppercase">Target Role</span>
                                    <ChevronRight className="text-white/20 transition-colors group-hover:text-accent-neon" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Roles Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass py-10 px-12 flex flex-wrap justify-center gap-16 lg:gap-24 relative overflow-hidden"
                >
                    <div className="absolute inset-0 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)' }} />

                    {roles.map((role, i) => (
                        <div key={i} className="flex items-center gap-6 relative z-10 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-muted transition-all duration-500 group-hover:text-accent-neon group-hover:scale-110">
                                {role.icon}
                            </div>
                            <div>
                                <div className="text-white font-bold text-lg font-heading transition-colors group-hover:text-accent-neon">{role.title}</div>
                                <div className="text-xs text-text-muted font-bold uppercase tracking-wider">{role.desc}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
