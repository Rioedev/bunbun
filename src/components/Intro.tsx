import { motion } from "framer-motion";

interface IntroProps {
    onFinish: () => void;
}

export default function Intro({ onFinish }: IntroProps) {
    return (
        <div
            className="flex flex-col justify-center items-center h-screen text-center"
            onClick={onFinish}
        >
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-bold text-pink-600 mb-4"
            >
                Tặng Bún 💕
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-lg text-gray-700 italic"
            >
                Chạm để xem những khoảnh khắc của Bún nhé ✨
            </motion.p>
        </div>
    );
}
