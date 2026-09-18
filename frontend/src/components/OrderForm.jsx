import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { PRODUCT_OPTIONS, PHONE_DISPLAY, waLink } from '../lib/site';
import WhatsAppIcon from './WhatsAppIcon';

const inputCls =
    'w-full bg-white border border-ink/25 px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors placeholder:text-mute/50';
const labelCls =
    'block font-mono text-[10px] uppercase tracking-widest text-mute mb-2';

export default function OrderForm({ open, product, onClose }) {
    const [form, setForm] = useState({ product: '', qty: '', name: '', phone: '', comment: '' });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (open) {
            setForm((f) => ({ ...f, product: product || '' }));
            setErrors({});
            document.body.style.overflow = 'hidden';
            window.__lenis?.stop();
        } else {
            document.body.style.overflow = '';
            window.__lenis?.start();
        }
        return () => {
            document.body.style.overflow = '';
            window.__lenis?.start();
        };
    }, [open, product]);

    useEffect(() => {
        const esc = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', esc);
        return () => window.removeEventListener('keydown', esc);
    }, [onClose]);

    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const submit = (e) => {
        e.preventDefault();
        const errs = {};
        if (!form.product) errs.product = 'Выберите тип изделия';
        if (!form.qty || Number(form.qty) <= 0) errs.qty = 'Укажите количество';
        if (!form.name.trim()) errs.name = 'Укажите имя';
        if (!form.phone.trim()) errs.phone = 'Укажите телефон';
        setErrors(errs);
        if (Object.keys(errs).length) return;

        const msg = [
            'Здравствуйте! Хочу рассчитать заказ.',
            `Изделие: ${form.product}`,
            `Количество: ${form.qty} шт.`,
            `Имя: ${form.name.trim()}`,
            `Телефон: ${form.phone.trim()}`,
            form.comment.trim() ? `Комментарий: ${form.comment.trim()}` : null,
        ]
            .filter(Boolean)
            .join('\n');
        window.open(waLink(msg), '_blank');
        toast.success('Открываем WhatsApp с вашей заявкой');
        onClose();
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[80] bg-ink/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-6"
                    data-testid="order-modal-overlay"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Рассчитать заказ"
                        className="relative bg-paper w-full sm:max-w-lg max-h-[92vh] overflow-y-auto p-6 sm:p-9"
                        data-testid="order-modal"
                    >
                        <button
                            onClick={onClose}
                            aria-label="Закрыть"
                            data-testid="order-close"
                            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border border-ink/20 hover:bg-ink hover:text-paper transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <p className="font-mono text-xs uppercase tracking-widest text-thread">Заявка</p>
                        <h3 className="mt-3 font-display font-bold uppercase tracking-tight text-2xl sm:text-3xl">
                            Рассчитать заказ
                        </h3>

                        <form className="mt-8 space-y-6" onSubmit={submit} data-testid="order-form" noValidate>
                            <div>
                                <span className={labelCls}>Тип изделия</span>
                                <div className="grid grid-cols-2 gap-2">
                                    {PRODUCT_OPTIONS.map((opt, i) => (
                                        <button
                                            key={opt}
                                            type="button"
                                            onClick={() => setForm((f) => ({ ...f, product: opt }))}
                                            data-testid={`order-product-${i}`}
                                            className={`px-3 py-2.5 text-xs sm:text-sm border transition-colors ${
                                                form.product === opt
                                                    ? 'bg-ink text-paper border-ink'
                                                    : 'border-ink/25 hover:border-ink'
                                            }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                                {errors.product && (
                                    <p className="mt-2 text-xs text-red-600" data-testid="order-error-product">{errors.product}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="qty" className={labelCls}>Количество, шт.</label>
                                    <input
                                        id="qty"
                                        type="number"
                                        min="1"
                                        value={form.qty}
                                        onChange={set('qty')}
                                        placeholder="100"
                                        className={inputCls}
                                        data-testid="order-qty"
                                    />
                                    {errors.qty && <p className="mt-2 text-xs text-red-600" data-testid="order-error-qty">{errors.qty}</p>}
                                </div>
                                <div>
                                    <label htmlFor="name" className={labelCls}>Имя</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={form.name}
                                        onChange={set('name')}
                                        placeholder="Ваше имя"
                                        className={inputCls}
                                        data-testid="order-name"
                                    />
                                    {errors.name && <p className="mt-2 text-xs text-red-600" data-testid="order-error-name">{errors.name}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className={labelCls}>Телефон</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={set('phone')}
                                    placeholder="+7 ___ ___ __ __"
                                    className={inputCls}
                                    data-testid="order-phone"
                                />
                                {errors.phone && <p className="mt-2 text-xs text-red-600" data-testid="order-error-phone">{errors.phone}</p>}
                            </div>

                            <div>
                                <label htmlFor="comment" className={labelCls}>Комментарий</label>
                                <textarea
                                    id="comment"
                                    rows="3"
                                    value={form.comment}
                                    onChange={set('comment')}
                                    placeholder="Опишите изделие, ткани, брендирование (необязательно)"
                                    className={`${inputCls} resize-none`}
                                    data-testid="order-comment"
                                />
                            </div>

                            <button
                                type="submit"
                                data-testid="order-submit"
                                className="w-full bg-ink text-paper py-4 text-sm font-medium flex items-center justify-center gap-3 hover:bg-thread transition-colors"
                            >
                                <WhatsAppIcon className="w-4 h-4" />
                                Отправить через WhatsApp
                            </button>
                            <p className="text-xs text-mute text-center">
                                Заявка откроется в WhatsApp {PHONE_DISPLAY}
                            </p>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
