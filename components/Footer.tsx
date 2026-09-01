import { contact } from "@/data/contact";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const links = [
  { href: contact.linkedin, label: "LinkedIn", Icon: LinkedinIcon, external: true },
  { href: contact.github, label: "GitHub", Icon: GithubIcon, external: true },
  { href: `mailto:${contact.email}`, label: "Email", Icon: MailIcon, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <p className="text-center font-mono text-xs text-muted sm:text-left">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <ul className="flex items-center gap-2">
          {links.map(({ href, label, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
