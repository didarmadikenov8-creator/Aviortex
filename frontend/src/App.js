import { Component, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'sonner';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import Contacts from './components/Contacts';
import OrderForm from './components/OrderForm';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { ORDER_EVENT } from './lib/site';

class ErrorBoundary extends Component {
    state = { error: null };
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        if (this.state.error) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-paper px-6">
                    <p className="font-mono text-sm text-mute">
                        Произошла ошибка. Обновите страницу.
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default function App() {
    const [order, setOrder] = useState({ open: false, product: null });
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    useEffect(() => {
        if (reduced) return undefined;
        const lenis = new Lenis({ lerp: 0.09, anchors: true });
        window.__lenis = lenis;
        let raf;
        const loop = (t) => {
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.__lenis = null;
        };
    }, [reduced]);

    useEffect(() => {
        const open = (e) => setOrder({ open: true, product: e.detail || null });
        window.addEventListener(ORDER_EVENT, open);
        return () => window.removeEventListener(ORDER_EVENT, open);
    }, []);

    return (
        <ErrorBoundary>
            <div data-testid="aviortex-landing">
                <Nav />
                <main>
                    <Hero />
                    <Marquee />
                    <Products />
                    <Portfolio />
                    <Process />
                    <About />
                </main>
                <Contacts />
                <FloatingWhatsApp />
                <OrderForm
                    open={order.open}
                    product={order.product}
                    onClose={() => setOrder((o) => ({ ...o, open: false }))}
                />
                <Toaster position="bottom-center" richColors />
            </div>
        </ErrorBoundary>
    );
}
