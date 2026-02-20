import { motion } from 'framer-motion';
import { Zap, Cpu, Award } from 'lucide-react';

const tools = [
    {
        title: '로우코드와 바이브코딩을 통한 효율성',
        description: '최신 개발 트렌드인 로우코드(Low-code)와 바이브코딩을 도입하여 개발 생산성을 극대화합니다.',
        icon: <Zap className="text-neon" />
    },
    {
        title: 'API 통합 마스터리',
        description: '단순 모델링을 넘어, 외부 API 연동을 통해 실제 유저가 사용할 수 있는 서비스 구조를 설계합니다.',
        icon: <Cpu className="text-neon" />
    },
    {
        title: '인텔 MCP 자격 인증 콘텐츠',
        description: '인텔의 머신러닝 전문 자격(MCP) 기반 콘텐츠로 글로벌 스탠다드 기술을 습득합니다.',
        icon: <Award className="text-neon" />
    }
];

export default function Tools() {
    return (
        <section className="section bg-bg-primary overflow-hidden">
            <div className="container">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white"
                    >
                        트렌드를 앞서가는 <br />
                        개발 도구와 실습 환경
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="space-y-6"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                                {tool.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white leading-tight">{tool.title}</h3>
                            <div className="w-12 h-px bg-neon/30" />
                            <p className="text-white/40 text-sm leading-relaxed">
                                {tool.description}
                            </p>

                            {/* Abstract Graphics */}
                            <div className="pt-8 opacity-20 group-hover:opacity-100 transition-opacity">
                                {i === 0 && <div className="flex gap-2"><div className="w-8 h-8 rounded bg-neon"></div><div className="w-8 h-8 rounded bg-white/40"></div><div className="w-8 h-8 rounded bg-white/20"></div></div>}
                                {i === 1 && <div className="w-24 h-12 border border-dashed border-white/40 rounded-full"></div>}
                                {i === 2 && <div className="w-16 h-16 border-4 border-neon rounded-full border-t-transparent animate-spin"></div>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
