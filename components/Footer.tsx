"use client";
import { useState, useEffect } from "react";
const Footer = () => {
    const [ping, setPing] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setPing(Math.floor(Math.random() * 100));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="w-full py-8 px-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#000000] border-t border-[#9cff93]/10" id="footer">
            <div className="text-[0.6875rem] tracking-[0.1em] uppercase text-[#9cff93]">
                SYSTEM_STATUS: ACTIVE // © 2024 S_QUATTROMINI
            </div>
            <div className="flex gap-8">
                <a className="text-[0.6875rem] tracking-[0.1em] uppercase text-[#9cff93]/40 hover:text-[#9cff93] transition-colors" href="https://github.com/Quattro3498" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a className="text-[0.6875rem] tracking-[0.1em] uppercase text-[#9cff93]/40 hover:text-[#9cff93] transition-colors" href="https://www.linkedin.com/in/simone-quattromini/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                <a className="font-['Space_Grotesk'] text-[0.6875rem] tracking-[0.1em] uppercase text-[#9cff93]/40 hover:text-[#9cff93] transition-colors" href="mailto:simonequattromini@gmail.com" rel="noopener noreferrer">simonequattromini@gmail.com</a>
            </div>
            <div className="text-[#9cff93]/40 text-[0.6875rem] flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                PING: {ping}ms
            </div>
        </footer>
    )

}

export default Footer;