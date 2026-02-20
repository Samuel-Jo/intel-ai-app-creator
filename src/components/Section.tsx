import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
    dark?: boolean;
}

export default function Section({ id, children, className = '', title, subtitle, dark = false }: SectionProps) {
    return (
        <section
            id={id}
            className={`relative section ${dark ? 'bg-secondary' : ''} ${className}`}
        >
            <div className="container">
                {(title || subtitle) && (
                    <div className="mb-16">
                        {subtitle && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-neon font-bold text-sm tracking-widest uppercase mb-4"
                            >
                                {subtitle}
                            </motion.div>
                        )}
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-bold text-white max-w-3xl"
                            >
                                {title}
                            </motion.h2>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
