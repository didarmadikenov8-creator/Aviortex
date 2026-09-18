import { motion } from 'framer-motion';
import { waLink } from '../lib/site';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href={waLink('Здравствуйте! Хочу обсудить заказ.')}
            target="_blank"
            rel="noreferrer"
            aria-label="Написать в WhatsApp"
            data-testid="floating-whatsapp"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 18 }}
            className="fixed bottom-5 right-5 z-[70] w-14 h-14 rounded-full bg-wa text-white flex items-center justify-center shadow-lg shadow-black/25 hover:scale-105 transition-transform"
        >
            <span className="absolute inset-0 rounded-full bg-wa animate-ping opacity-20" />
            <WhatsAppIcon className="w-7 h-7 relative" />
        </motion.a>
    );
}
