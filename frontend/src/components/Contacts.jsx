import { ArrowUpRight } from 'lucide-react';
import { ADDRESS, INSTAGRAM_URL, PHONE_DISPLAY, waLink } from '../lib/site';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contacts() {
    return (
        <footer id="contacts" className="bg-ink text-paper pt-24 lg:pt-32 pb-8">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <p className="font-mono text-xs uppercase tracking-widest text-white/50">
                    (05) — Контакты
                </p>
                <h2
                    className="mt-4 font-display font-bold uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl leading-[1.05]"
                    data-testid="contacts-title"
                >
                    Обсудим<br />ваш заказ?
                </h2>

                <div className="mt-14 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                    <div className="bg-ink p-8" data-testid="contacts-address">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                            Адрес
                        </p>
                        <p className="mt-4 text-lg md:text-xl leading-snug">{ADDRESS}</p>
                    </div>
                    <a
                        href={waLink('Здравствуйте!')}
                        target="_blank"
                        rel="noreferrer"
                        className="group bg-ink p-8 hover:bg-ink2 transition-colors"
                        data-testid="contacts-whatsapp"
                    >
                        <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                            WhatsApp
                        </p>
                        <p className="mt-4 text-lg md:text-xl leading-snug flex items-center gap-3 group-hover:text-wa transition-colors">
                            <WhatsAppIcon className="w-5 h-5 shrink-0" />
                            {PHONE_DISPLAY}
                        </p>
                    </a>
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="group bg-ink p-8 hover:bg-ink2 transition-colors"
                        data-testid="contacts-instagram"
                    >
                        <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                            Instagram
                        </p>
                        <p className="mt-4 text-lg md:text-xl leading-snug flex items-center gap-3 group-hover:text-thread transition-colors">
                            @aviortex.almaty
                            <ArrowUpRight className="w-4 h-4 opacity-60" />
                        </p>
                    </a>
                </div>

                <div className="mt-20 overflow-hidden" aria-hidden="true">
                    <p className="font-display font-bold uppercase text-[14.5vw] leading-[0.95] text-center text-outline-light select-none whitespace-nowrap">
                        AVIORTEX
                    </p>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-white/40">
                    <span data-testid="footer-copyright">© AVIORTEX — Швейный цех в Алматы</span>
                    <span>Доставка по Казахстану</span>
                </div>
            </div>
        </footer>
    );
}
