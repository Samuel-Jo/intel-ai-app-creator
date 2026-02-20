import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="py-20 bg-bg-primary border-t border-white/5 relative overflow-hidden">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-neon/20 to-transparent" />

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-2xl font-black tracking-tighter text-white font-heading"
                        >
                            INTEL <span className="text-accent-neon">AI APP</span> CREATOR
                        </motion.div>
                        <p className="text-text-muted text-sm max-w-xs leading-relaxed">
                            글로벌 리더 인텔의 기술력과 고용노동부의 지원으로 완성되는 대한민국 대표 AI 인재 양성 프로그램입니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
                        <div className="space-y-4">
                            <div className="text-white font-bold text-sm tracking-widest uppercase mb-6">Program</div>
                            <ul className="space-y-4 text-sm text-text-muted">
                                <li><a href="#curriculum" className="hover:text-accent-neon transition-colors">커리큘럼</a></li>
                                <li><a href="#tech-stack" className="hover:text-accent-neon transition-colors">기술 스택</a></li>
                                <li><a href="#schedule" className="hover:text-accent-neon transition-colors">모집 일정</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <div className="text-white font-bold text-sm tracking-widest uppercase mb-6">Legal</div>
                            <ul className="space-y-4 text-sm text-text-muted">
                                <li><a href="#" className="hover:text-accent-neon transition-colors">개인정보처리방침</a></li>
                                <li><a href="#" className="hover:text-accent-neon transition-colors">이용약관</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4 col-span-2 sm:col-span-1">
                            <div className="text-white font-bold text-sm tracking-widest uppercase mb-6">Contact</div>
                            <ul className="space-y-4 text-sm text-text-muted">
                                <li className="font-medium text-white/80">010-7790-8085</li>
                                <li>www.intel-kdt.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted font-medium uppercase tracking-widest">
                    <div>© 2026 INTEL AI APP CREATOR. ALL RIGHTS RESERVED.</div>
                    <div className="flex gap-6">
                        <span>RAPA x INTEL x MIND CANVAS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
