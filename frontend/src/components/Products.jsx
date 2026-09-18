import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS, openOrder } from '../lib/site';

const EASE = [0.16, 1, 0.3, 1];

export default function Products() {
    const onMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
    };

    return (
        <section id="production" className="py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-mute">
                            (01) — Продукция
                        </p>
                        <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-3xl md:text-5xl" data-testid="products-title">
                            Что мы шьём
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm text-mute leading-relaxed">
                        Работаем с компаниями и брендами — от небольших тиражей до регулярных
                        поставок.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
                    {PRODUCTS.map((p, i) => (
                        <motion.article
                            key={p.slug}
                            onMouseMove={onMove}
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: EASE }}
                            className={`spot-card group border border-ink/15 bg-paper2/50 flex flex-col ${p.span}`}
                            data-testid={`product-card-${p.slug}`}
                        >
                            <div className={`overflow-hidden ${p.ratio}`}>
                                <img
                                    src={p.src}
                                    alt={p.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                    data-testid={`product-image-${p.slug}`}
                                />
                            </div>
                            <div className="p-6 flex flex-col gap-3 grow">
                                <span className="font-mono text-xs text-thread">
                                    /0{i + 1}
                                </span>
                                <h3 className="font-display font-semibold text-xl md:text-2xl">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-mute leading-relaxed">{p.desc}</p>
                                <button
                                    onClick={() => openOrder(p.title)}
                                    data-testid={`product-cta-${p.slug}`}
                                    className="mt-auto pt-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-thread transition-colors self-start"
                                >
                                    Запросить расчёт
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="mt-5 border border-ink/15 px-6 sm:px-10 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
                    data-testid="custom-tailoring-band"
                >
                    <h3 className="font-display font-semibold uppercase tracking-tight text-xl md:text-3xl">
                        Индивидуальный пошив
                        <span className="text-mute"> для бизнеса</span>
                    </h3>
                    <button
                        onClick={() => openOrder('Другое')}
                        data-testid="custom-tailoring-cta"
                        className="inline-flex items-center justify-center gap-3 bg-ink text-paper px-7 py-3.5 text-sm font-medium hover:bg-thread transition-colors self-start sm:self-auto"
                    >
                        Обсудить задачу
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
