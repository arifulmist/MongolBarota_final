"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rovers", href: "/rovers" },
  { name: "Competitions", href: "/competitions" },
  { name: "Achievements", href: "/achievements" },
  { name: "Team", href: "/team" },
  { name: "Alumni", href: "/alumni" },
  { name: "Research Paper", href: "/researchPaper" },
  // { name: "Media", href: "/media" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Join Us", href: "/join" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div
              className={`relative h-10 w-10 transition-transform duration-300 group-hover:scale-110 ${
                mounted && resolvedTheme === "dark" ? "rounded-full overflow-hidden bg-white" : ""
              }`}
            >
              <Image
                src={
                  mounted && resolvedTheme === "dark"
                    ? "/logo_black.svg"
                    : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mars_rover_1-eOMKJSkn4YwCVsyKyUvwLrGMkg1hOo.png"
                }
                alt="MIST Mongol Barota Logo"
                fill
                className={`object-contain ${mounted && resolvedTheme === "dark" ? "p-1" : ""}`}
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                MIST
              </div>
              <div className="text-sm font-semibold text-primary">MONGOL BAROTA</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:scale-105 relative overflow-hidden group ${
                    isActive
                      ? "text-primary-foreground bg-primary font-semibold"
                      : "text-foreground hover:text-primary hover:bg-accent/50"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/support">Become a Sponsor</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="transition-all duration-300 hover:scale-110 hover:bg-accent/50"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item, index) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-lg font-medium transition-all duration-300 hover:translate-x-2 px-3 py-2 rounded-md ${
                          isActive
                            ? "text-primary-foreground font-semibold bg-primary border-l-4 border-primary-foreground"
                            : "text-foreground hover:text-primary hover:bg-accent/50"
                        }`}
                        onClick={() => setIsOpen(false)}
                        style={{
                          animation: isOpen ? `slideInRight 0.3s ease-out ${index * 50}ms both` : "none",
                        }}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                  <div className="pt-4 border-t">
                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                    >
                      <Link href="/support" onClick={() => setIsOpen(false)}>
                        Become a Sponsor
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
