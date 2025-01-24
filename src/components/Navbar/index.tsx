import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  const links = [
    {
      href: "https://instagram.com/itscatthecatsolana/",
      label: "Instagram",
    },
    {
      href: "https://t.me/itscatthecat",
      label: "Telegram",
    },
    {
      href: "https://x.com/itscatthecat",
      label: "Twitter",
    },
    {
      href: "https://dexscreener.com/solana/8ipndnhwyf2gh7wihp2jamab6cdg9zuh6ejybmjognjq",
      label: "Chart",
    },
    {
      href: "https://t.me/idrawcats",
      label: "Memes gallery",
    },
  ];

  return (
    <div className="fixed top-0 z-50 w-full backdrop-blur supports-backdrop-blur:bg-background/60">
      <div className="flex w-full md:items-center md:justify-between py-2 px-2 max-w-3xl mx-auto flex-col gap-4 md:flex-row w-full">
        <img className="w-12 block" src="../img/cat.png" alt="" />
    
        {links.map((link, index) => (
          <Link
            target="_blank"
            className="font-bold text-sm hover:opacity-75 transition-all"
            key={index}
            href={link.href}
            passHref
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
