import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Mail, MapPin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  "Quick Links": [
    { name: "About Us", href: "/about" },
    { name: "Our Rovers", href: "/rovers" },
    { name: "Competitions", href: "/competitions" },
    { name: "Achievements", href: "/achievements" },
    { name: "Alumni", href: "/alumni" },
  ],
  Resources: [
    { name: "News", href: "/news" },
    { name: "Media Coverage", href: "/media" },
  ],
  Support: [
    { name: "Become a Sponsor", href: "/sponsors" },
    { name: "Donate", href: "/support" },
    { name: "Contact Us", href: "/contact" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/mongolbarota.mist",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mist_mongolbarota",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@marsroverteammist9242",
    icon: Youtube,
  },
  {
    name: "Email",
    href: "mailto:mars.rover.mist@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-12 w-12 bg-white rounded-full p-3 overflow-hidden">
                <Image
                  src="/footer_logo.webp"
                  alt="MIST Mongol Barota Logo"
                  width={70}
                  height={70}
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <div className="text-xl font-bold">MIST</div>
                <div className="text-lg font-semibold text-primary">
                  MONGOL BAROTA
                </div>
              </div>
            </Link>

            <p className="text-secondary-foreground/80 max-w-md text-pretty">
              Pioneering Mars exploration from Bangladesh. We are MIST's premier
              robotics team, competing globally and pushing the boundaries of
              space technology.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Mirpur Cantonment, Dhaka-1216, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>mars.rover.mist@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10"
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-semibold text-lg">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-secondary-foreground/20" />

        <div className="flex justify-center items-center">
          <div className="text-sm text-secondary-foreground text-center">
            © MIST Mongol Barota. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
