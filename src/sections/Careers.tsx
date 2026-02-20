import { motion } from 'framer-motion';
import { Briefcase, Lightbulb, Users, Code, PieChart } from 'lucide-react';

export default function Careers() {
    const paths = [
        {
            title: '취업 준비생',
            description: 'AI 분야로 커리어를 전환하고 싶은 전공 무관 대학 졸업생 및 예정자',
            icon: <Briefcase className="text-neon" />,
            tag: '구직자'
        },
        {
            title: '예비 창업자',
            description: '자신만의 AI 서비스를 기획하고 직접 제품화하고 싶은 예비 창업가',
            icon: <Lightbulb className="text-neon" />,
            tag: '창업준비'
        }
    ];

    const roles = [
        { title: 'AI 서비스 기획자', desc: '생성형 AI 기반 비즈니스 기획', icon: <Users size={16} /> },
        { title: 'AI 앱 개발자', desc: 'LLM 및 API 연동 서비스 개발', icon: <Code size={16} /> },
        { title: '데이터 분석가', desc: '데이터 인사이트 도출 및 시각화', icon: <PieChart size={16} /> }
    ];

    return (
        <section className="section bg-bg-primary overflow-hidden">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        AI 개발자부터 기획자까지, <br />
                        당신의 새로운 진로를 응원합니다
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {paths.map((path, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-bg-secondary border border-white/5 rounded-3xl p-8 hover:border-white/20 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-neon/10 rounded-xl">{path.icon}</div>
                                <div>
                                    <div className="text-xs text-neon font-bold uppercase">{path.tag}</div>
                                    <h3 className="text-2xl font-bold text-white">{path.title}</h3>
                                </div>
                            </div>
                            <p className="text-white/40 leading-relaxed mb-6">
                                {path.description}
                            </p>
                            {/* Abstract image area */}
                            <div className="w-full aspect-[16/9] bg-white/5 rounded-2xl flex items-center justify-center text-white/10 italic">
                                [Image: {path.tag} Context]
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-12 pt-8 border-t border-white/10"
                >
                    {roles.map((role, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="p-3 bg-white/5 rounded-full text-white/60">
                                {role.icon}
                            </div>
                            <div>
                                <div className="text-white font-bold">{role.title}</div>
                                <div className="text-xs text-neon/60">{role.desc}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
