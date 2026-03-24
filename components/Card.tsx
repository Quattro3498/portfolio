import Image from "next/image";
const Card = ({ image, title, version, subtitle, description, tags, link }: { image: string, title: string, version: string, subtitle: string, description: string, tags: string[], link: string }) => {
    return (
        <div className="group flex flex-col bg-surface-container-low border border-outline-variant/30 transition-all duration-500 hover:border-primary/40">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-high border-b border-outline-variant/30">
                <div className="terminal-header-dots"></div>
                <span className="text-[0.625rem] font-['Space_Grotesk'] text-on-surface-variant uppercase tracking-widest">{version}</span>
            </div>
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <div className="text-primary font-['Space_Grotesk'] text-[0.625rem] mb-2 font-bold tracking-widest">{subtitle}</div>
                <h3 className="text-on-surface font-headline font-bold text-xl mb-3 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 whitespace-pre-line">
                    {description}
                </p>
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-surface-container-highest text-[0.625rem] text-primary-dim">[{tag}]</span>
                        ))}
                    </div>
                    <a className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase hover:underline" href={link} target="_blank" rel="noopener noreferrer">
                        Read Documentation _
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;
