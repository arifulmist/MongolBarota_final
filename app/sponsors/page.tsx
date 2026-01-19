import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  ArrowRight,
  Award,
  BarChart,
  Building,
  Check,
  Crown,
  Gift,
  Globe,
  Handshake,
  Heart,
  Lightbulb,
  Mail,
  Megaphone,
  Phone,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const sponsorshipTiers = [
  {
    name: "Title Sponsor",
    subtitle: "Premium Partnership",
    amount: "BDT 25,00,000",
    amountText: "BDT Twenty Five Lacs Only",
    icon: Crown,
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-950",
    borderColor: "border-purple-200 dark:border-purple-800",
    popular: true,
    benefitCount: 12,
    benefits: [
      "Logo on main rover body and banners",
      "Corporate mention in print and media",
      "Company banner in particular events and venue",
      "Logo on posters",
      "Advertisement at the start of the seminar",
      "Company stall in the venue (size on discussion)",
      "Promotional advertisement in the MM screen (during breaks and leisure)",
      "Logo on gift hampers and packages",
      "Logo on merchandise (non-commercial)",
      "Logo on merchandise (commercial)",
      "Brand/product value survey/analysis (interviewing participants and visitors)",
      "Advertisement on Digital Platforms, Social Media and event",
    ],
  },
  {
    name: "Platinum Sponsor",
    subtitle: "Platinum Partnership",
    amount: "BDT 15,00,000",
    amountText: "BDT Fifteen Lacs Only",
    icon: Award,
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-950",
    borderColor: "border-blue-200 dark:border-blue-800",
    benefitCount: 10,
    benefits: [
      "Logo on main rover body and banners",
      "Corporate mention in print and media",
      "Company banner in particular events and venue",
      "Logo on posters",
      "Advertisement at the start of the seminar",
      "Company stall in the venue (size on discussion)",
      "Promotional advertisement in the MM screen (during breaks and leisure)",
      "Logo on merchandise (non-commercial)",
      "Brand/product value survey/analysis (interviewing participants and visitors)",
      "Advertisement on Digital Platforms, Social Media and event",
    ],
  },
  {
    name: "Gold Sponsor",
    subtitle: "Gold Partnership",
    amount: "BDT 10,00,000",
    amountText: "BDT Ten Lacs Only",
    icon: Star,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100 dark:bg-yellow-950",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    benefitCount: 8,
    benefits: [
      "Logo on main rover body and banners",
      "Corporate mention in print and media",
      "Company banner in particular events and venue",
      "Logo on posters",
      "Advertisement at the start of the seminar",
      "Promotional advertisement in the MM screen (during breaks and leisure)",
      "Logo on merchandise (non-commercial)",
      "Advertisement on Digital Platforms, Social Media and event",
    ],
  },
  {
    name: "Silver Sponsor",
    subtitle: "Silver Partnership",
    amount: "BDT 5,00,000",
    amountText: "BDT Five Lacs Only",
    icon: Star,
    color: "text-gray-600",
    bgColor: "bg-gray-100 dark:bg-gray-900",
    borderColor: "border-gray-200 dark:border-gray-800",
    benefitCount: 6,
    benefits: [
      "Logo on main rover body and banners",
      "Corporate mention in print and media",
      "Company banner in particular events and venue",
      "Logo on posters",
      "Promotional advertisement in the MM screen (during breaks and leisure)",
      "Logo on merchandise (non-commercial)",
    ],
  },
];

const previousSponsors = [
  {
    name: "Military Institute of Science and Technology",
    // tier: "Institutional Support",
    logo: "/mist.png",
    description: "Our home institution providing comprehensive support",
    website: "https://mist.ac.bd",
  },
]

// const budgetBreakdown = [
//   { category: "Mechanical", amount: "BDT 4,87,400", percentage: 34.5 },
//   { category: "Electrical", amount: "BDT 1,50,000", percentage: 10.6 },
//   { category: "Software", amount: "BDT 2,00,000", percentage: 14.2 },
//   { category: "Communication", amount: "BDT 1,80,000", percentage: 12.8 },
//   { category: "Drone", amount: "BDT 1,64,000", percentage: 11.6 },
//   { category: "Science", amount: "BDT 2,30,000", percentage: 16.3 },
// ]

const sponsorshipBenefits = [
  {
    icon: Building,
    title: "University Affiliation",
    description:
      "Align your brand with the next generation of leaders, pioneers, and innovators. Showcase your company as an active collaborator in shaping the future.",
  },
  {
    icon: Globe,
    title: "Brand Exposure",
    description:
      "Gain prominent visibility through logo placements on the rover, team uniforms, event materials, and digital platforms reaching international audiences.",
  },
  {
    icon: Megaphone,
    title: "Media Coverage",
    description:
      "Get exposure through national and international media channels when your logo is presented by Mongol Barota's Mars rover and merchandise.",
  },
  {
    icon: Handshake,
    title: "Initiating New Partnerships",
    description:
      "Be at the forefront of industry-academy collaborations, creating opportunities for further partnerships and establishing presence as a partner for advancement.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description:
      "Connect with MIST's growing student body, providing direct access to thousands of potential customers, interns, collaborators, and future employees.",
  },
  {
    icon: Users,
    title: "Brand Community",
    description:
      "Build a powerful network of like-minded advocates who actively support and amplify your brand, evolving into devoted users and long-term allies.",
  },
  {
    icon: Gift,
    title: "Branded Gift Exposure",
    description:
      "Provide branded gifts for international participants, judges, organizers, and volunteers, creating lasting brand impressions across a global audience.",
  },
  {
    icon: Target,
    title: "Long-term Legacy",
    description:
      "Build loyal customer base, convert potential leaders to brand ambassadors, and create partnerships with other organizations of the institution.",
  },
  {
    icon: Lightbulb,
    title: "Exclusive Access",
    description:
      "Receive exclusive invitations to seminars, keynote events, and product showcases to speak at ceremonies and promote products/services.",
  },
  {
    icon: BarChart,
    title: "Activation Opportunities",
    description:
      "Set up promotional booths during national events, facilitating direct product demonstrations, on-the-spot promotions, and targeted sales engagement.",
  },
]

export default function SponsorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Seeking Sponsors & Partners
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Partner with Us for
              <span className="text-primary block">URC & ARC 2026</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              We're actively seeking sponsors to support our mission in the 2026 season. Join us in pushing the
              boundaries of space exploration and representing Bangladesh with pride on the international stage.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Target Audience</h4>
                  <p className="text-sm text-muted-foreground">
                    University Students, Youths, International Professionals, Faculty, Professors (18-60 years)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Competition Reach</h4>
                  <p className="text-sm text-muted-foreground">500+ Finalists, 114+ teams from 15+ countries</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Media Reach</h4>
                  <p className="text-sm text-muted-foreground">
                    National & International audience through local, global media, and digital platforms
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="#sponsorship-tiers">
                  View Sponsorship Options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Sponsors - Updated Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Support Network</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're grateful for the institutional support that has helped us achieve international recognition. Now
              we're seeking industry partners to join us for the 2026 season.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {previousSponsors.map((sponsor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow mb-8">
                <CardContent className="p-8">
                  <div className="relative h-20 mb-6 flex items-center justify-center">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      width={160}
                      height={80}
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {/* {sponsor.tier} */}
                  </Badge>
                  <h3 className="font-semibold mb-3">{sponsor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{sponsor.description}</p>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={sponsor.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action for New Sponsors */}
          <div className="max-w-3xl mx-auto mt-12">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Your Logo Could Be Here</h3>
                <p className="text-muted-foreground mb-6">
                  Join us as a sponsor and gain visibility across international competitions, media coverage, and direct
                  access to thousands of students and professionals. Be part of Bangladesh's space exploration journey.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="#sponsorship-tiers">
                    Explore Sponsorship Packages
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section id="sponsorship-tiers" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sponsorship Packages for 2026</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the partnership level that aligns with your organization's goals and budget
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {sponsorshipTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  tier.popular ? "ring-2 ring-primary" : ""
                } ${tier.borderColor}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${tier.bgColor} rounded-lg mb-4`}>
                    <tier.icon className={`w-6 h-6 ${tier.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                  <div className="mt-4">
                    <div className="text-2xl font-bold text-primary">{tier.amount}</div>
                    <div className="text-xs text-muted-foreground">{tier.amountText}</div>
                  </div>
                  <Badge variant="outline" className="mt-3">
                    {tier.benefitCount} Benefits Included
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <ul className="space-y-3 flex-1">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full mt-6 ${
                      tier.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                    }`}
                  >
                    <Link href="/contact">Choose This Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* Sponsorship Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive benefits of supporting Bangladesh's premier Mars rover team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorshipBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Competition Timeline 2026</h2>
              <p className="text-lg text-muted-foreground">Key dates for URC 2026</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">SAR Submission</h3>
                  <p className="text-4xl font-bold mb-2">27 Feb 2026</p>
                  <p className="opacity-90">System Acceptance Review</p>
                </CardContent>
              </Card>

              <Card className="bg-secondary">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">URC Finals</h3>
                  <p className="text-4xl font-bold mb-2">27-30 May 2026</p>
                  <p className="text-muted-foreground">Utah, USA</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Partnership?</h2>
              <p className="text-lg mb-8 opacity-90">
                Join us in building more than just sponsorship—become a valued partner in shaping the future of
                innovation and student achievement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="tel:+8801778665529">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Team Lead
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
