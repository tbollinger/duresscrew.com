import Link from "next/link";
import SnowfallEffect from "@/components/SnowfallEffect";

// ============================================
// LINK DATA - Easy to add/modify links here
// ============================================

type LinkItem = {
  title: string;
  href: string;
};

type SectionItem = {
  title: string;
  links: LinkItem[];
};

type NavItem = LinkItem | SectionItem;

const isSection = (item: NavItem): item is SectionItem => {
  return "links" in item;
};

const navItems: NavItem[] = [
  {
    title: "Hardcast",
    links: [
      {
        title: "Spotify",
        href: "https://open.spotify.com/show/09ol9T7ypmx1vcDxXAwwVr",
      },
      {
        title: "Apple Podcasts",
        href: "https://podcasts.apple.com/us/podcast/hardcast/id1771770312",
      },
      { title: "RSS", href: "https://media.rss.com/hardcast/feed.xml" },
    ],
  },
  {
    title: "Premodern Data Analysis Project",
    href: "https://data.duresscrew.com/",
  },
  {
    title: "International Premodern Discord",
    href: "https://discord.gg/GE6urJcGVn",
  },
  {
    title: "New England Premodern Discord",
    href: "https://discord.gg/7gGbaWr2rE",
  },
  {
    title: "Help Us Make Cool Shit",
    href: "https://ko-fi.com/duresscrew/",
  },
];

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/duresscrew/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com/DuressCrew/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/duresscrew.bsky.social",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@duresscrew",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Twitch",
    href: "https://twitch.tv/duresscrew",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
      </svg>
    ),
  },
];

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function LinksPage() {
  let linkIndex = 0;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-neutral-950 font-mono text-neutral-300 selection:bg-amber-500/30 selection:text-amber-100">
      {/* Background graphic */}
      <div
        className="pointer-events-none fixed inset-0 bg-center bg-no-repeat opacity-[0.05]"
        style={{
          backgroundImage: `url("/DuressCrew_Graphic.png")`,
          backgroundSize: "auto 100%",
        }}
      />

      {/* Snowfall effect */}
      <SnowfallEffect />

      {/* Film grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' width='256' height='256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      <main className="relative mx-auto flex w-full max-w-lg flex-col px-6 py-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="mb-3 text-2xl tracking-[0.3em] text-neutral-100 uppercase">
            Duress Crew
          </h1>
          <p className="mb-2 text-sm tracking-wider text-neutral-400">
            est. 2021 · Worcester, MA
          </p>
          <p className="mb-6 text-sm text-neutral-400">
            Dinner club of Magic: The Gathering players. <br /> Organizers of
            the largest Premodern events in the US. <br /> Totally not a cult.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5">
            {socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-6 w-6 text-neutral-300 transition-all duration-150 hover:scale-110 hover:text-amber-500 [&_svg]:h-full [&_svg]:w-full"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </header>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px flex-1 bg-neutral-700" />
          <span className="text-[10px] tracking-[0.2em] text-neutral-400">
            LINKS
          </span>
          <span className="h-px flex-1 bg-neutral-700" />
        </div>

        {/* Links */}
        <nav className="flex-1">
          {navItems.map((item) => {
            if (isSection(item)) {
              return (
                <div key={item.title} className="mb-1">
                  {/* Section header */}
                  <div className="flex items-center gap-4 border-b border-neutral-700/50 py-4">
                    <span className="w-5 text-[10px] tabular-nums text-neutral-400">
                      {String(++linkIndex).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm tracking-wide text-neutral-300">
                      {item.title}
                    </span>
                  </div>
                  {/* Sub-links */}
                  <div className="ml-9 border-l border-neutral-700/30">
                    {item.links.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 py-3 pl-4 transition-colors duration-150"
                      >
                        <span className="text-[10px] text-neutral-500">└</span>
                        <span className="flex-1 text-xs tracking-wide text-neutral-300 transition-colors duration-150 group-hover:text-neutral-100">
                          {subLink.title}
                        </span>
                        <span className="text-neutral-500 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-amber-600">
                          ▶
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-b border-neutral-700/50 py-4 transition-colors duration-150 hover:border-neutral-700"
              >
                <span className="w-5 text-[10px] tabular-nums text-neutral-400">
                  {String(++linkIndex).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm tracking-wide text-neutral-300 transition-colors duration-150 group-hover:text-neutral-100">
                  {item.title}
                </span>
                <span className="text-neutral-500 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-amber-600">
                  ▶
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <footer className="mt-8 pt-4">
          <p className="text-center text-[10px] tracking-wider text-neutral-500">
            © {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </div>
  );
}
