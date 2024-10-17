import React from "react";
import Link from "next/link";
function Footer() {
  const links = [
    {
      title: "ABOUT",
      links: ["How it works", "News", "Investors", "Plus", "Luxe"],
    },
    {
      title: "COMMUNITY",
      links: ["Accessibility", "Not a real site", "Awesome clone", "Referrals"],
    },
    {
      title: "HOST",
      links: [
        "Host home",
        "Host experience",
        "Responsible hosting",
        "Resources",
      ],
    },
    {
      title: "SUPPORT",
      links: ["Help", "Safety", "Cancellations", "Support"],
    },
  ];

  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-400">
        {links.map((link) => (
          <div key={link.title} className="space-y-4 text-xs  text-gray-800">
            <h4 className="text-xl text-bold">{link.title}</h4>
            {link.links.map((item) => (
              <Link key={item} href={item} className="block">
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
