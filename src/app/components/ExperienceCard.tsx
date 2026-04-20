interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    description: string;
    url: string;
    index?: number;
}

export default function ExperienceCard({
    title,
    company,
    period,
    description,
    url,
    index = 0,
}: ExperienceCardProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block text-left border-l-2 border-[var(--accent)] pl-6 py-4
                       opacity-0 animate-fade-in cursor-pointer
                       transition-colors duration-300 hover:border-[var(--foreground)]"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium">{title}</h3>
                <span className="text-[var(--muted)] text-sm">{period}</span>
            </div>
            <p className="text-[var(--accent)] text-sm mb-2 transition-colors duration-300 group-hover:text-[var(--foreground)]">{company}</p>
            <p className="text-sm text-[var(--foreground)] opacity-80">
                {description}
            </p>
        </a>
    );
}
