import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROCESS_STEPS, openOrder } from '../lib/site';

const EASE = [0.16, 1, 0.3, 1];

export default function Process() {
    return (
        <section id="process" className="bg-ink text-paper py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <header className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-white/50">
                            (03) — Порядок работы
                        </p>
                        <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-3xl md:text-5xl" data-testid="process-title">
                            Как сделать заказ
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm text-white/50 leading-relaxed">
                        От заявки до доставки — пять шагов без лишней бюрократии.
                    </p>
                </header>

                <div>
                    {PROCESS_STEPS.map((step, i) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
                            className={`group flex items-baseline gap-5 sm:gap-10 border-t border-white/15 py-7 md:py-9 px-2 sm:px-4 -mx-2 sm:-mx-4 hover:bg-white/5 transition-colors ${i === PROCESS_STEPS.length - 1 ? 'border-b' : ''}`}
                            data-testid={`process-step-${i + 1}`}
                        >
                            <span className="font-mono text-sm text-thread shrink-0">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="font-display font-semibold text-lg sm:text-2xl md:text-3xl leading-snug transition-transform duration-300 group-hover:translate-x-2">
                                {step}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="mt-14"
                >
                    <button
                        onClick={() => openOrder(null)}
                        data-testid="process-cta-order"
                        className="group inline-flex items-center gap-3 bg-paper text-ink px-8 py-4 text-sm font-medium hover:bg-thread hover:text-paper transition-colors"
                    >
                        Оставить заявку
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
