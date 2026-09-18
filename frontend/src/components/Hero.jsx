import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { waLink, openOrder, IMAGES } from '../lib/site';
import WhatsAppIcon from './WhatsAppIcon';

const EASE = [0.16, 1, 0.3, 1];

function Line({ children, delay, className = '' }) {
    return (
        <span className="block overflow-hidden pb-[0.09em] -mb-[0.09em]">
            <motion.span
                className={`block ${className}`}
                initial={{ y: '115%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay, ease: EASE }}
            >
                {children}
            </motion.span>
        </span>
    );
}

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

    return (
        <section id="top" ref={ref} className="relative pt-24 sm:pt-28 lg:pt-36">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                    <div className="lg:col-span-7">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="font-mono text-xs uppercase tracking-widest text-mute"
                            data-testid="hero-eyebrow"
                        >
                            Швейный цех <span className="text-thread">·</span> Алматы
                        </motion.p>

                        <h1
                            className="mt-6 font-display font-bold uppercase leading-[1.05] tracking-tight text-[clamp(2rem,4.6vw,4.4rem)]"
                            data-testid="hero-headline"
                        >
                            <Line delay={0.15}>Швейное</Line>
                            <Line delay={0.28}>производство</Line>
                            <Line delay={0.41}>
                                <span style={{ WebkitTextStroke: '1.5px #101010', color: 'transparent' }}>
                                    для вашего бизнеса
                                </span>
                            </Line>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
                            className="mt-8 max-w-md text-base sm:text-lg text-mute leading-relaxed"
                            data-testid="hero-subheadline"
                        >
                            Термосумки, спецодежда и текстильная продукция с вашим брендом
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
                            className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
                        >
                            <button
                                onClick={() => openOrder(null)}
                                data-testid="hero-cta-calc"
                                className="group inline-flex items-center justify-center gap-3 bg-ink text-paper px-8 py-4 text-sm font-medium hover:bg-thread transition-colors"
                            >
                                Рассчитать заказ
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                            <a
                                href={waLink('Здравствуйте! Хочу обсудить заказ.')}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="hero-cta-whatsapp"
                                className="inline-flex items-center justify-center gap-3 border border-ink/25 px-8 py-4 text-sm font-medium hover:border-ink transition-colors"
                            >
                                <WhatsAppIcon className="w-4 h-4 text-wa" />
                                Написать в WhatsApp
                            </a>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
                            className="relative overflow-hidden aspect-[4/5] max-h-[70vh] w-full"
                            data-testid="hero-image-main"
                        >
                            <motion.img
                                src={IMAGES.heroMain}
                                alt="Швейное производство AVIORTEX"
                                style={{ y, scale: 1.15 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-white/90 bg-ink/60 backdrop-blur px-3 py-1.5">
                                Производство · Алматы
                            </span>
                        </motion.div>
                        <motion.img
                            src={IMAGES.heroSecondary}
                            alt="Пошив изделий в цехе"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
                            className="hidden md:block absolute -bottom-10 -left-14 w-44 lg:w-52 aspect-square object-cover border-[6px] border-paper shadow-xl"
                            data-testid="hero-image-secondary"
                        />
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
                    className="mt-20 lg:mt-28 border-t border-dashed border-ink/30 pt-8 pb-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
                    data-testid="hero-trust-bar"
                >
                    {[
                        { value: '15+', label: 'лет на рынке' },
                        { value: '2000+', label: 'довольных клиентов' },
                        { value: 'KZ', label: 'доставка по Казахстану' },
                    ].map((s) => (
                        <div key={s.label} className="flex items-baseline gap-4 sm:pr-8">
                            <span className="font-display font-bold text-3xl md:text-4xl">
                                {s.value}
                            </span>
                            <span className="font-mono text-xs uppercase tracking-widest text-mute">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
