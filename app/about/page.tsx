import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Globe, Lightbulb, Target, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for the highest standards in engineering and innovation, pushing boundaries in Mars rover technology.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Our multidisciplinary approach brings together the best minds from different engineering fields.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to overcome complex challenges.",
  },
  {
    icon: Globe,
    title: "National Pride",
    description: "Representing Bangladesh on the global stage and inspiring the next generation of engineers.",
  },
]

const timeline = [
  {
    year: "2013",
    title: "Team Formation",
    description:
      "MIST Mongol Barota was established with a vision to represent Bangladesh in international robotics competitions.",
  },
  {
    year: "2014",
    title: "First URC Participation",
    description:
      "Became the first Bangladeshi team to participate in University Rover Challenge, placing 12th globally.",
  },
  {
    year: "2015",
    title: "Best Asian Team",
    description: "Achieved 9th position in URC and was nominated as the Best Team from Asia.",
  },
  {
    year: "2021",
    title: "Global Champions",
    description: "Made history by winning the University Rover Challenge 2021, becoming global champions.",
  },
  {
    year: "2024",
    title: "Continued Excellence",
    description: "Secured runner-up position in ARC 2024 and highest SAR score among South Asian teams in URC.",
  },
  {
    year: "2025",
    title: "URC 2025 Finals",
    description:
      "Achieved 14th position worldwide in University Rover Challenge 2025, competing at Mars Desert Research Station in Utah.",
  },
    {
    year: "2026",
    title: "URC 2026 Finals",
    description:
      "Achieved 11th position worldwide in University Rover Challenge 2026, competing at Mars Desert Research Station in Utah.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Pioneering the Future of
              <span className="text-primary block">Space Exploration</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Since 2013, MIST Mongol Barota has been at the forefront of Mars rover technology, representing Bangladesh
              with pride and pushing the boundaries of what's possible in space exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/team">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/rovers">Explore Our Rovers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Mission</h3>
                  <p className="text-muted-foreground text-pretty">
                    To develop cutting-edge Mars rover technology that advances space exploration while representing
                    Bangladesh on the global stage. We aim to inspire the next generation of engineers and contribute to
                    humanity's understanding of Mars.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Vision</h3>
                  <p className="text-muted-foreground text-pretty">
                    To be recognized as a world-class Mars rover team that consistently delivers innovative solutions,
                    fosters international collaboration, and serves as a beacon of excellence in robotics and space
                    technology from South Asia.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
              <Image
                src="/about_pic.jpg"
                alt="Team working on rover"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              These principles guide everything we do, from rover design to team collaboration
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From humble beginnings to global recognition, here's how we've grown over the years
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                    {index < timeline.length - 1 && <div className="w-0.5 h-16 bg-border mt-4" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MIST Connection */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Military Institute of Science and Technology</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              MIST Mongol Barota is proudly affiliated with the Military Institute of Science and Technology (MIST), one
              of Bangladesh's premier engineering institutions. Our team comprises talented students from various
              engineering disciplines including Computer Science, Electrical Engineering, Mechanical Engineering, and
              Petroleum & Mining Engineering.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Engineering Departments</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">40+</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">12+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                We're actively seeking sponsors for the 2026 season. Join us in representing Bangladesh on the global
                stage and inspiring the next generation of engineers. Your support will help us compete in URC & ARC
                2026 and continue our legacy of excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/sponsors">
                    Become a Sponsor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
