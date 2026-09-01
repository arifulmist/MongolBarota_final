"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Building,
  CheckCircle2,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  PhoneCall,
  User,
  Youtube,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const contactInfo = [
  {
    category: "Team Leadership",
    contacts: [
      {
        name: "Sameen Abrar",
        role: "Team Leader",
        department: "Level 4 Student, CSE",
        email: "sameenabrar121@gmail.com",
        phone: "+8801613-392018",
      },
    ],
  },
  {
    category: "Faculty Advisors",
    contacts: [
      {
        name: "Mohammad Shahjahan Majib, ndc, psc",
        role: "Chief Adviser",
        department: "Brigadier General, Head, Dept of CSE, MIST",
        email: "head@cse.mist.ac.bd",
        phone: "+880-1769023916",
      },
      {
        name: "Lt. Col Md Abul Basar, psc",
        role: "Faculty Adviser",
        department: "Computer Science & Engineering, MIST",
        email: "bashar7075@gmail.com",
        phone: "+8801769023954",
      },
      {
        name: "Shah Md. Ahasan Siddique, CSCA™, CSWA",
        role: "Faculty Adviser",
        department: "Lecturer, Department of Mechanical Engineering, MIST",
        email: "ahasan.sid42@gmail.com",
        phone: "+8801710301593",
      },
      {
        name: "Md Rashid Ul Islam",
        role: "Faculty Adviser",
        department:
          "Lecturer, Department of Computer Science and Engineering, MIST",
        email: "rashid@cse.mist.ac.bd",
        phone: "+8801969-844062",
      },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/mongolbarota.mist",
    icon: Facebook,
    color: "text-blue-600",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mist_mongolbarota",
    icon: Instagram,
    color: "text-pink-600",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@marsroverteammist9242",
    icon: Youtube,
    color: "text-red-600",
  },
]

const heroHighlights = [
  {
    label: "Response Window",
    value: "24-48 Hours",
  },
  {
    label: "Location",
    value: "Mirpur Cantonment, Dhaka",
  },
  {
    label: "Inquiries",
    value: "Sponsorship, Media & Recruitment",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-6">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Let's build the future of
                <span className="text-primary block">Mars Exploration together</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 text-pretty">
                Sponsors, collaborators, media partners, and aspiring teammates—this is your direct line to the people
                shaping Bangladesh's flagship rover program.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <Card key={item.label} className="bg-background/60 border-primary/10">
                    <CardContent className="p-4">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
                      <div className="mt-2 text-sm font-semibold text-foreground">{item.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="relative border-primary/20 shadow-xl shadow-primary/10">
              <CardContent className="p-8 space-y-6">
                <Badge variant="secondary" className="w-fit">Direct contact channel</Badge>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">General inquiries</div>
                      <Link href="mailto:mars.rover.mist@gmail.com" className="font-semibold hover:text-primary">
                        mars.rover.mist@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Team Lead</div>
                      <Link href="tel:+8801613392018" className="font-semibold hover:text-primary">
                        +8801613392018
                      </Link>
                    </div>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="#contact-form">
                    Send a message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground">
                  We route every note to the right sub-team—mechanical, electrical, software, science, management, or
                  communications—so you get informed responses fast.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 xl:grid-cols-[1.1fr_0.9fr]">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Tell us about your mission</h2>
                <p className="text-muted-foreground text-pretty">
                  Share as much context as you can so we can connect you with the right engineering lead, faculty advisor,
                  or media liaison. We reply to every message.
                </p>
              </div>
              <Card className="border-primary/10 shadow-lg shadow-primary/5">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization (Optional)</Label>
                        <Input
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Your company or institution"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Sponsorship, media, recruitment..."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us more about your inquiry, timeline, or collaboration goals."
                      />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-muted-foreground">
                        By submitting, you agree to let us reach out over email or phone to follow up on your request.
                      </p>
                      <Button type="submit" className="w-full sm:w-auto">
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/15 to-primary/5 border-primary/20">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">Mission Control — MIST Mongol Barota</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Military Institute of Science and Technology (MIST)
                      <br />Mirpur Cantonment, Dhaka 1216, Bangladesh
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">Email</div>
                        <Link href="mailto:mars.rover.mist@gmail.com" className="font-medium hover:text-primary">
                          mars.rover.mist@gmail.com
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">Phone</div>
                        <Link href="tel:+8801613392018" className="font-medium hover:text-primary">
                         +8801613392018
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">Response Time</div>
                      <p className="text-sm text-muted-foreground">We typically respond within 24-48 hours on business days.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {contactInfo.map((category, index) => (
                <Card key={index} className="border-muted/60">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs uppercase tracking-wide">
                        {category.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {category.contacts.map((contact, i) => (
                      <div key={i} className="rounded-lg border border-muted/50 p-4 hover:border-primary/40 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <User className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <div>
                              <div className="font-semibold text-sm">{contact.name}</div>
                              <div className="text-xs text-muted-foreground leading-relaxed">
                                {contact.role}
                                <br />
                                {contact.department}
                              </div>
                            </div>
                            <div className="space-y-2 text-xs text-muted-foreground">
                              {contact.email && (
                                <Link href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-primary">
                                  <Mail className="w-3 h-3" />
                                  {contact.email}
                                </Link>
                              )}
                              {contact.phone && (
                                <Link href={`tel:${contact.phone}`} className="flex items-center gap-2 hover:text-primary">
                                  <Phone className="w-3 h-3" />
                                  {contact.phone}
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Quick Actions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-primary/10 bg-gradient-to-br from-primary/10 to-background">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Stay in the loop</h2>
                  <p className="text-muted-foreground text-pretty">
                    Follow the development of Aurora X-II, competition run footage, live mission testing, and team
                    milestones across our active channels.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      asChild
                      variant="outline"
                      className="h-auto flex-col items-center gap-2 py-4 text-center"
                    >
                      <Link href={social.url} target="_blank" rel="noopener noreferrer">
                        <social.icon className={`w-6 h-6 ${social.color}`} />
                        <span className="text-xs font-semibold uppercase tracking-wide">{social.name}</span>
                        <span className="text-[10px] text-muted-foreground">Follow</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-muted/60">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Quick actions</h2>
                  <p className="text-muted-foreground text-pretty">
                    Ready to move fast? Jump straight to the resources that match your goals with MIST Mongol Barota.
                  </p>
                </div>
                <div className="grid gap-3">
                  <Button asChild variant="secondary" className="justify-start gap-3">
                    <Link href="/join">
                      <User className="h-4 w-4" />
                      Join our engineering roster
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start gap-3">
                    <Link href="/sponsors">
                      <Building className="h-4 w-4" />
                      Review sponsorship packages
                    </Link>
                  </Button>
                  {/* <Button asChild variant="outline" className="justify-start gap-3">
                    <Link href="/gallery">
                      <Mail className="h-4 w-4" />
                      Request media assets
                    </Link>
                  </Button> */}
                  <Button asChild variant="outline" className="justify-start gap-3">
                    <Link href="/about">
                      <Building className="h-4 w-4" />
                      Learn more about our journey
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsor CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto border-primary/20 bg-gradient-to-br from-primary/12 via-background to-secondary/10">
            <CardContent className="p-12">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold">Partner with the 2026 Rover Missions</h2>
                    <p className="text-muted-foreground text-pretty">
                      Sponsorship keeps Aurora X-II field-ready for URC & ARC 2026—from advanced science payloads to
                      resilient communications. Let’s craft a partnership that amplifies your brand globally.
                    </p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      Branding across rover hardware, crew apparel, and high-visibility media moments
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      Access to technical showcases, on-campus activations, and recruitment touchpoints
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      Detailed reporting on engagement, reach, and impact throughout the 2026 competition cycle
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/sponsors">Explore sponsorship deck</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full">
                    <Link href="mailto:mars.rover.mist@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email sponsorship desk
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="w-full">
                    <Link href="tel:+8801778665529">
                      <Phone className="mr-2 h-4 w-4" />
                      Speak with the team lead
                    </Link>
                  </Button>
                  <p className="text-xs text-muted-foreground text-pretty">
                    Prefer sharing a proposal deck first? Attach it in your email or request a secure upload link.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
