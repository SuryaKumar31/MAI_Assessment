import Link from "next/link";

interface FooterLinksProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-5">
        {title}
      </p>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-center gap-2 text-[16px] text-white transition-colors duration-200"
            >
              <span className="h-px w-0 bg-[#4DB8FF] group-hover:w-4 transition-all duration-300 ease-out shrink-0" />

              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
