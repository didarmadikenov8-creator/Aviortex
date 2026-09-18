import { MARQUEE_ITEMS } from '../lib/site';

export default function Marquee() {
    return (
        <div
            className="border-y border-ink/15 py-5 md:py-7 overflow-hidden"
            aria-hidden="true"
            data-testid="marquee"
        >
            <div className="flex w-max animate-marquee">
                {[0, 1].map((half) => (
                    <div key={half} className="flex items-center shrink-0">
                        {MARQUEE_ITEMS.map((item) => (
                            <span key={`${item}-${half}`} className="flex items-center">
                                <span className="font-display font-semibold uppercase tracking-tight text-xl md:text-3xl px-7 md:px-10 whitespace-nowrap">
                                    {item}
                                </span>
                                <span className="w-2 h-2 rotate-45 bg-thread shrink-0" />
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
