import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    gradient?: boolean;
}

export default function Section({ id, children, className = '', title, subtitle, description, gradient = false }: SectionProps) {
    return (
        <section
            id={id}
            className={`relative section-padding overflow-hidden ${className}`}
        >
            {gradient && (
                <div className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at center, var(--accent-neon-rgba) 0%, transparent 70%)',
                        opacity: 0.05
                    }} />
            )}

            <div className="container relative z-10">
                {(title || subtitle || description) && (
                    <div className="mb-20">
                        {subtitle && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-accent-neon font-bold text-xs tracking-[0.2em] uppercase mb-4"
                            >
                                {subtitle}
                            </motion.div>
                        )}
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-black text-white leading-tight font-heading mb-6"
                            >
                                {title}
                            </motion.h2>
                        )}
                        {description && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-text-secondary text-xl max-w-2xl leading-relaxed"
                            >
                                {description}
                            </motion.p>
                        )}
                    </div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
