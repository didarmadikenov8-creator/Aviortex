import { motion } from 'framer-motion';
import { CLIENTS, IMAGES } from '../lib/site';

const EASE = [0.16, 1, 0.3, 1];

export default function Portfolio() {
    return (
        <section id="works" className="py-24 lg:py-32 bg-paper2/60 border-y border-ink/10">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <header className="mb-14">
                    <p className="font-mono text-xs uppercase tracking-widest text-mute">
                        (02) — Портфолио
                    </p>
                    <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-3xl md:text-5xl" data-testid="portfolio-title">
                        Нам доверяют бизнесы
                    </h2>
                    <p className="mt-5 max-w-md text-sm text-mute leading-relaxed">
                        Примеры брендированных изделий, которые мы сшили для компаний
                        и брендов.
                    </p>
                </header>

                <div className="border-b border-ink/15">
                    {CLIENTS.map((name, i) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                            className="group flex items-baseline justify-between border-t border-ink/15 py-7 md:py-9 hover:pl-4 transition-all duration-300"
                            data-testid={`portfolio-client-${name.toLowerCase()}`}
                        >
                            <span className="font-display font-bold uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl group-hover:text-thread transition-colors">
                                {name}
                            </span>
                            <span className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-mute">
                                выполненный заказ
                            </span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {IMAGES.gallery.map((g, i) => (
                        <motion.figure
                            key={g.src}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: EASE }}
                            data-testid={`gallery-img-${i}`}
                        >
                            <div className="overflow-hidden aspect-[4/5] bg-paper">
                                <img
                                    src={g.src}
                                    alt={g.caption}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.06]"
                                />
                            </div>
                            <figcaption className="mt-2.5 font-mono text-[10px] uppercase tracking-widest text-mute">
                                {g.caption}
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
