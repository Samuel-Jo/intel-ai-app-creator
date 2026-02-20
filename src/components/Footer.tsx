export default function Footer() {
    return (
        <footer className="py-12 bg-bg-primary border-t border-white/5">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-xl font-bold tracking-tight text-white">
                    INTEL <span className="text-neon">AI APP</span> CREATOR
                </div>
                <div className="flex gap-8 text-sm text-white/40">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
                <div className="text-xs text-white/20">
                    © 2026 Intel AI App Creator. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
