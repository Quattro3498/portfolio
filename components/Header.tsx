"use client";

import { motion } from "framer-motion";
import { SquareTerminal } from "lucide-react";
const Header = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#0e0e0e] border-b border-[#9cff93]/20 shadow-[0_0_20px_0px_rgba(156,255,147,0.08)]"
        >
            <div className="text-[#9cff93] font-bold tracking-tighter font-headline text-lg uppercase">[root]:/home</div>
            <nav className="hidden md:flex gap-8">
                <a className="uppercase tracking-[0.1em] text-[0.6875rem] text-[#9cff93]/60 hover:text-[#9cff93] hover:bg-[#9cff93]/10 transition-all duration-300" href="#projects">/projects</a>
                {/* <a className="uppercase tracking-[0.1em] text-[0.6875rem] text-[#9cff93]/60 hover:text-[#9cff93] hover:bg-[#9cff93]/10 transition-all duration-300" href="/about">/about</a> */}
                <a className="uppercase tracking-[0.1em] text-[0.6875rem] text-[#9cff93]/60 hover:text-[#9cff93] hover:bg-[#9cff93]/10 transition-all duration-300" href="#stats">/stats</a>
                <a className="uppercase tracking-[0.1em] text-[0.6875rem] text-[#9cff93]/60 hover:text-[#9cff93] hover:bg-[#9cff93]/10 transition-all duration-300" href="#footer">/contact</a>
            </nav>
            <div className="flex items-center gap-4 text-[#9cff93]">
                <SquareTerminal />
            </div>
        </motion.header>
    )
}

export default Header;