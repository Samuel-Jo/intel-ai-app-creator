import { motion } from 'framer-motion';
import { Globe, GraduationCap, Cpu } from 'lucide-react';

const programs = [
    {
        icon: <Globe className="text-neon" size={32} />,
        title: 'Global Tech Stack',
        description: '글로벌 기업 인텔(Intel)의 기술과 커리큘럼을 직접 경험합니다.'
    },
    {
        icon: <Cpu className="text-neon" size={32} />,
        title: 'Zero Cost, High ROI',
        description: '고용노동부 K-Digital Training 과정으로 교육비 전액 무료 지원'
    },
    {
        icon: <GraduationCap className="text-neon" size={32} />,
        title: 'Project-Based Learning',
        description: '단순 코딩이 아닌, 실제 작동하는 AI 애플리케이션 포트폴리오 확보'
    }
];

export default function ProgramOverview() {
    return (
        <section id="program" className="section bg-bg-primary">
            <div className="container">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        이론 학습을 넘어, '서비스'를 만드는 <br />
                        실전 AI 개발자 양성
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {programs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-bg-secondary border border-white/10 p-8 rounded-3xl hover:border-neon/40 transition-colors group"
                        >
                            <div className="mb-6 w-16 h-16 bg-neon/5 rounded-2xl flex items-center justify-center group-hover:bg-neon/10 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
