import { motion } from 'framer-motion';
import { IMAGES } from '../lib/site';

const EASE = [0.16, 1, 0.3, 1];

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-6">
                    <p className="font-mono text-xs uppercase tracking-widest text-mute">
                        (04) — О компании
                    </p>
                    <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-3xl md:text-5xl" data-testid="about-title">
                        AVIORTEX
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: EASE }}
                        className="mt-8 text-lg md:text-xl leading-relaxed text-ink/80 max-w-xl"
                        data-testid="about-copy"
                    >
                        AVIORTEX — швейное производство в Алматы с опытом более 15 лет.
                        Изготавливаем текстильную продукцию и брендированные изделия
                        для бизнеса. Более 2000 выполненных заказов.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                        className="mt-6 font-mono text-xs uppercase tracking-widest text-mute"
                    >
                        Работаем с компаниями и брендами <span className="text-thread">·</span> Доставка по Казахстану
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8, ease: EASE }}
                    className="lg:col-span-6"
                >
                    <div className="border border-dashed border-ink/35 p-3" data-testid="about-image-frame">
                        <div className="overflow-hidden aspect-[4/3]">
                            <img
                                src={IMAGES.about}
                                alt="Нитки и материалы в швейном цехе"
                                loading="lazy"
                                className="w-full h-full object-cover"
                                data-testid="about-image"
                            />
                        </div>
                    </div>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-mute text-right">
                        Материалы · Цех AVIORTEX
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
