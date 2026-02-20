import { motion } from 'framer-motion';
import { MessageSquare, Code, BarChart, Eye } from 'lucide-react';

const techStack = [
    {
        category: 'Generative AI & LLM',
        title: '현대적인 생성형 기술',
        items: ['대규모 언어 모델 활용', '생성형 AI 기반 앱 개발 실습'],
        icon: <MessageSquare className="text-neon" size={24} />,
        color: 'bg-blue-500/10'
    },
    {
        category: 'Python & Low-Code',
        title: 'Vibe Coding을 통한 효율성',
        items: ['파이썬 활용 및 자율학습', '바이브코딩 및 API 연동'],
        icon: <Code className="text-neon" size={24} />,
        color: 'bg-green-500/10'
    },
    {
        category: 'Machine Learning & Big Data',
        title: '데이터 인텔리전스',
        items: ['빅데이터 처리/시각화', '통계 모델링'],
        icon: <BarChart className="text-neon" size={24} />,
        color: 'bg-purple-500/10'
    },
    {
        category: 'Advanced Perception',
        title: '시각 및 언어 AI',
        items: ['컴퓨터 비전', 'NLP (자연어 처리)'],
        icon: <Eye className="text-neon" size={24} />,
        color: 'bg-orange-500/10'
    }
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="section bg-bg-primary">
            <div className="container">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white"
                    >
                        현업에서 가장 필요로 하는 <br />
                        핵심 AI 기술 스택
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-3xl border border-white/5 bg-bg-secondary hover:border-white/20 transition-all flex flex-col md:flex-row gap-8 items-start`}
                        >
                            <div className={`p-4 rounded-2xl bg-white/5`}>
                                {tech.icon}
                            </div>
                            <div className="space-y-4">
                                <div className="text-neon font-bold text-xl">{tech.category}</div>
                                <div className="text-white text-lg font-medium">{tech.title}</div>
                                <ul className="space-y-2">
                                    {tech.items.map((item, idx) => (
                                        <li key={idx} className="text-white/40 text-sm flex items-center gap-2">
                                            <span className="w-1 h-1 bg-white/20 rounded-full" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
