export default function Footer() {
    return (
        <footer className="py-12 bg-bg-primary border-t border-white/5">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-xl font-bold tracking-tight text-white">
                    INTEL <span className="text-neon">AI APP</span> CREATOR
                </div>
                <div className="flex gap-8 text-sm text-white/40">
                    <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                    <a href="#" className="hover:text-white transition-colors">이용약관</a>
                    <a href="#" className="hover:text-white transition-colors">문의하기</a>
                </div>
                <div className="text-xs text-white/20">
                    © 2026 인텔 AI 응용앱 크리에이터. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
