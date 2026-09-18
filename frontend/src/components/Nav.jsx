import { useEffect, useState } from 'react';
import { waLink, openOrder } from '../lib/site';

const LINKS = [
    { href: '#production', label: 'Продукция' },
    { href: '#works', label: 'Работы' },
    { href: '#process', label: 'Как заказать' },
    { href: '#about', label: 'О нас' },
    { href: '#contacts', label: 'Контакты' },
];

export default function Nav() {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menu ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menu]);

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
                <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
                    <a
                        href="#top"
                        data-testid="nav-logo"
                        className="font-display font-bold text-lg tracking-tight"
                    >
                        AVIORTEX
                        <span className="hidden sm:inline font-mono text-[10px] font-normal text-mute tracking-widest uppercase ml-3 align-middle">
                            Швейный цех · Алматы
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, '-')}`}
                                className="font-mono text-xs uppercase tracking-widest text-mute hover:text-ink transition-colors"
                            >
                                {l.label}
                            </a>
                        ))}
                        <button
                            onClick={() => openOrder(null)}
                            data-testid="nav-cta-order"
                            className="bg-ink text-paper font-medium text-sm px-5 py-2.5 hover:bg-thread transition-colors"
                        >
                            Рассчитать заказ
                        </button>
                    </div>

                    <div className="flex md:hidden items-center gap-3">
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Написать в WhatsApp"
                            data-testid="nav-mobile-whatsapp"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-wa text-white"
                        >
                            <WhatsAppGlyph className="w-4 h-4" />
                        </a>
                        <button
                            onClick={() => setMenu(true)}
                            aria-label="Открыть меню"
                            data-testid="mobile-menu-open"
                            className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 border border-ink/20"
                        >
                            <span className="block w-4 h-px bg-ink" />
                            <span className="block w-4 h-px bg-ink" />
                        </button>
                    </div>
                </nav>
            </header>

            {menu && (
                <div className="fixed inset-0 z-[60] bg-ink text-paper flex flex-col" data-testid="mobile-menu">
                    <div className="h-16 px-5 flex items-center justify-between border-b border-white/10">
                        <span className="font-display font-bold text-lg">AVIORTEX</span>
                        <button
                            onClick={() => setMenu(false)}
                            aria-label="Закрыть меню"
                            data-testid="mobile-menu-close"
                            className="w-9 h-9 flex items-center justify-center border border-white/20"
                        >
                            <span className="text-xl leading-none">&times;</span>
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-2 px-6">
                        {LINKS.map((l, i) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setMenu(false)}
                                data-testid={`mobile-link-${l.href.slice(1)}`}
                                className="font-display font-semibold text-3xl py-3 border-b border-white/10 flex items-baseline gap-4"
                            >
                                <span className="font-mono text-xs text-thread">0{i + 1}</span>
                                {l.label}
                            </a>
                        ))}
                    </div>
                    <div className="p-6">
                        <button
                            onClick={() => { setMenu(false); openOrder(null); }}
                            data-testid="mobile-cta-order"
                            className="w-full bg-paper text-ink font-medium py-4"
                        >
                            Рассчитать заказ
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

function WhatsAppGlyph({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}
