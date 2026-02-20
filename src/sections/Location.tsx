import { motion } from 'framer-motion';
import { MapPin, Info } from 'lucide-react';

export default function Location() {
    return (
        <section className="section bg-bg-secondary/50">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Optimal Educational Environment <br />
                        Accessible from anywhere in the Metropolitan Area
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Map Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 aspect-video lg:aspect-square flex items-center justify-center"
                    >
                        <div className="text-white/10 text-xl font-bold italic">[Map: Yongin Heungdeok U-Tower]</div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="relative">
                                <MapPin className="text-neon fill-neon/20" size={48} />
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black border border-neon/40 px-3 py-1 rounded-full text-[10px] text-white whitespace-nowrap font-bold">
                                    Mind Canvas Hall
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <div className="bg-bg-primary p-8 rounded-3xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Yongin Heungdeok U-Tower, 17th Floor <br />
                                <span className="text-neon">Mind Canvas Education Center</span>
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="p-2 bg-neon/10 rounded-lg h-fit text-neon"><Info size={20} /></div>
                                    <div>
                                        <div className="text-white font-bold">Proximity to Transportation</div>
                                        <div className="text-sm text-white/40">Located near Heungdeok IC and Suwon IC.</div>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="p-2 bg-neon/10 rounded-lg h-fit text-neon"><Info size={20} /></div>
                                    <div>
                                        <div className="text-white font-bold">Connected Major Cities</div>
                                        <div className="text-sm text-white/40">Minimized travel burden with Suwon, Suji, Yongin, Bundang, and Anyang adjacent.</div>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="p-2 bg-neon/10 rounded-lg h-fit text-neon"><Info size={20} /></div>
                                    <div>
                                        <div className="text-white font-bold">Premium Facilities</div>
                                        <div className="text-sm text-white/40">High-immersion learning in a dedicated center equipped with the latest devices.</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
