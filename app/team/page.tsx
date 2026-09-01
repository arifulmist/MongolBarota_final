import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Cpu, FlaskConical, Github, Linkedin, Mail, Phone, Wifi, Wrench, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const leadership = [
  {
    name: "Sameen Abrar",
    role: "Team Leader",
    department: "Computer Science & Engineering",
    level: "Level 4",
    email: "sameenabrar121@gmail.com",
    phone: "+8801613-392018",
    image: "/Team/team_lead.jpg",
    bio: "Leading the team towards URC 2026 and ARC 2026 with vision and technical expertise in robotics and AI systems.",
    linkedin: "https://www.linkedin.com/in/sameen-abrar/",
    github: "https://github.com/Shinigami2018",
  }
]

const facultyAdvisors = [
  {
    name: "Mohammad Shahjahan Majib",
    role: "Chief Advisor",
    title: "Brigadier General",
    department: "Head, Department of Computer Science and Engineering, MIST",
    email: "head@cse.mist.ac.bd",
    phone: "+880-1769023916",
    image: "/Team/Advisor/1.jpeg",
    bio: "Providing strategic guidance and institutional support for the team's mission towards URC 2026.",
  },
  {
    name: "Lt. Col Md Abul Basar",
    role: "Faculty Adviser",
    department: "Administration Wing, MIST",
    phone: "+8801769023954",
    image: "/Team/Advisor/3.jpeg",
    bio: "Administrative support and operational guidance for team activities and logistics.",
  },
  {
    name: "Shah Md. Ahasan Siddique, CSCA™, CSWA",
    role: "Faculty Adviser",
    title: "Lecturer",
    department: "Department of Mechanical Engineering, MIST",
    email: "ahasan.sid42@gmail.com",
    phone: "+8801710301593",
    image: "/Team/Advisor/4.jpg",
    bio: "Technical guidance in mechanical design and manufacturing processes for Aurora X-II development.",
  },
  {
    name: "Md Rashid Ul Islam",
    role: "Faculty Adviser",
    title: "Lecturer",
    department: "Department of Computer Science and Engineering, MIST",
    email: "rashid@cse.mist.ac.bd",
    phone: "+8801969844062",
    image: "/Team/Advisor/2.jpeg",
    bio: "Software development and computer systems expertise for rover technology and autonomous systems.",
  },
];

const subTeams = [
  {
    id: "mechanical",
    name: "Mechanical Team",
    icon: Wrench,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    description:
      "Responsible for rover chassis, arm design, wheel systems, and mechanical components.",
    responsibilities: [
      "Body, Arm and Wheel module design and production",
      "Science module design and production",
      "Mechanical system integration",
      "Manufacturing and assembly",
    ],
    skills: [
      "CAD Design",
      "Manufacturing",
      "Materials Science",
      "Mechanical Analysis",
    ],
    members: [
      {
        name: "Reduan Ahmed",
        role: "Team Lead",
        department: "Mechanical Engineering",
        image: "/Team/reduan.jpg",
      },
      {
        name: "Tanvir Ahmed",
        role: "Team Member",
        department: "Mechanical Engineering",
        image: "/Team/tanvir.jpg",
      },
      {
        name: "Sheikh Nazmul Islam",
        role: "Team Member",
        department: "Aeronautical Engineering",
        image: "/Team/nazmul.jpg",
      },
      {
        name: "Miraz Bin Mizbah",
        role: "Team Member",
        department: "Naval Architecture and Marine Engineering",
        image: "/Team/miraz.jpg",
      },
      {
        name: "Abid Ekram",
        role: "Team Member",
        department: "Mechanical Engineering",
        image: "/Team/abid.jpg",
      },
      {
        name: "S. M. Azmain Abrar",
        role: "Team Member",
        department: "Mechanical Engineering",
        image: "/Team/abrar.jpg",
      },
      {
        name: "ZR Emon",
        role: "Team Member",
        department: "Mechanical Engineering",
        image: "/Team/emon.jpg",
      },
      {
        name: "M M Fardin",
        role: "Team Member",
        department: "Mechanical Engineering",
        image: "/Team/fardin.jpg",
      },
      {
        name: "Nirzar SD Promi",
        role: "Team Member",
        department: "Mechanical Engineering",
        image: "/Team/promi.jpg",
      },
      {
        name: "Rahik Mohammad",
        role: "Team Member",
        department: "Industrial & Production Engineering",
        image: "/Team/rahik.jpg",
      },
      {
        name: "Md Salman Islam",
        role: "Team Member",
        department: "Mechanical Engineering",
        image: "/Team/salman.jpg",
      },
      {
        name: "Zaber Islam Zihan",
        role: "Team Member",
        department: "Mechanical Engineering",
        image: "/Team/zaber.jpg",
      },
    ],
  },
  {
    id: "electrical",
    name: "Electrical Team",
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    description:
      "Handles power systems, circuit design, and electrical component integration.",
    responsibilities: [
      "Power module design and implementation",
      "Circuit board design and development",
      "Electrical system integration",
      "Power management optimization",
    ],
    skills: [
      "Circuit Design",
      "PCB Development",
      "Power Systems",
      "Embedded Systems",
    ],
    members: [
      {
        name: "Md Mahfuzur Rahman Ullash",
        role: "Team Lead",
        department: "Electrical Electronics and Communication Engineering",
        image: "/Team/Electrical/ullash.jpg",
      },
      {
        name: "Tahiya Iffat Mojumder",
        role: "Team Member",
        department: "Electrical Electronics and Communication Engineering",
        image: "/Team/Electrical/tahiya_iffat_mojumder.png",
      },
      {
        name: "Balajee Bishwas",
        role: "Team Member",
        department: "Electrical Electronics and Communication Engineering",
        image: "/Team/Electrical/balajee_bishwas.png",
      },
      {
        name: "Fateen Nur Fuad",
        role: "Team Member",
        department: "Electrical Electronics and Communication Engineering",
        image: "/Team/Electrical/fateen_nur_fuad.png",
      },
      {
        name: "Md Habibur Rahman",
        role: "Team Member",
        department: "Aeronautical Engineering",
        image: "/Team/Electrical/md_habibur_rahman.jpg",
      },
      {
        name: "Mehrin Islam Prity",
        role: "Team Member",
        department: "Electrical Electronics and Communication Engineering",
        image: "/Team/Electrical/mehrin_islam_prity.png",
      },
      {
        name: "Saber Toha",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/Electrical/saber_toha.png",
      },
      {
        name: "Samiul Kabir",
        role: "Team Member",
        department: "Electrical Electronics and Communication Engineering",
        image: "/Team/Electrical/samiul_kabir.jpg",
      },
      {
        name: "Tasmia Masnur",
        role: "Team Member",
        department: "Electrical Electronics and Communication Engineering",
        image: "/Team/Electrical/tasmia_masnur.png",
      },
    ],
  },
  {
    id: "software",
    name: "Software Team",
    icon: Cpu,
    color: "text-green-600",
    bgColor: "bg-green-100",
    description:
      "Develops software systems, communication protocols, and user interfaces.",
    responsibilities: [
      "Microprocessor interfacing and dashboard design",
      "Antenna and radio frequency control",
      "Camera feed control, connection and display",
      "Drone module design and implementation",
    ],
    skills: [
      "Programming",
      "Communication Systems",
      "UI/UX Design",
      "System Integration",
    ],
    members: [
      {
        name: "Istiaque Ahmed Arik",
        role: "Team Lead",
        department: "Computer Science & Engineering",
        image: "/Team/soft/istiaque_ahhmed_arik.jpg",
      },
      {
        name: "Abdullah Al Sahariar",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/soft/abdullah_al_shahariar.jpg",
      },
      {
        name: "Md Ariful Islam",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/soft/md_ariful_islam.jpg",
      },
      {
        name: "Labiba Ibnat Matin",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/soft/labiba_ibnat_matin.jpg",
      },
      {
        name: "Balajee Biswas",
        role: "Team Member",
        department: "Electrical Electronics and Communication Engineering",
        image: "/Team/soft/balajee_biswas.jpg",
      },
      // {
      //   name: "Md Arif Sadik Molla",
      //   role: "Team Member",
      //   department: "Computer Science & Engineering",
      //   image: "/Team/soft/md_arif_sadik_molla.jpg",
      // },
      // {
      //   name: "Najifa Raksanda",
      //   role: "Team Member",
      //   department: "Computer Science & Engineering",
      //   image: "/Team/soft/najifa_raksanda.jpg",
      // },
      {
        name: "Nujhat Nazifah Nawal",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/soft/nujhat_nazifah_nawal.jpg",
      },
      {
        name: "Syed Zahin Waheed",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/soft/syed_zahin_waheed.jpg",
      },
    ],
  },
  {
    id: "science",
    name: "Science Team",
    icon: FlaskConical,
    color: "text-red-600",
    bgColor: "bg-red-100",
    description:
      "Handles scientific analysis, sample testing, and research methodologies.",
    responsibilities: [
      "Data analysis and decision from soil samples",
      "Chemical reactions and testing procedures",
      "Scientific methodology development",
      "Research documentation",
    ],
    skills: [
      "Chemistry",
      "Data Analysis",
      "Research Methods",
      "Scientific Writing",
    ],
    members: [
      {
        name: "Savera Momtaz",
        role: "Technical Team Lead",
        department: "Computer Science & Engineering",
        image: "/Team/Science/saver_momtaz.jpg",
      },
      {
        name: "Mahir Tajwar",
        role: "Theory Team Lead",
        department: "Petroleum and Mining Engineering",
        image: "/Team/Science/mahit_tajwar.jpg",
      },
      {
        name: "Mehjabeen Tabassum Dewan",
        role: "Team Member",
        department: "Petroleum and Mining Engineering",
        image: "/Team/Science/mehjabeen_tabassum_dewan.jpg",
      },
      {
        name: "Miraz Bin Misbah",
        role: "Team Member",
        department: "Mechanical Engineering",
        image: "/Team/Science/miraz_bin_misbah.jpg",
      },
      {
        name: "Samira Tasnim Huq",
        role: "Team Member",
        department: "Petroleum and Mining Engineering",
        image: "/Team/Science/samira_tasnim_huq.jpg",
      },
      {
        name: "Tanvir Ahmed",
        role: "Team Member",
        department: "Mechanical Engineering",
        image: "/Team/Science/tanvir_ahmed.jpg",
      },
    ],
  },
  {
    id: "management",
    name: "Management Team",
    icon: BarChart3,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    description:
      "Manages team operations, media relations, and financial planning.",
    responsibilities: [
      "Publication, media and outreach management",
      "Human resource management",
      "Finance management and budgeting",
      "Event coordination and logistics",
    ],
    skills: ["Project Management", "Communication", "Finance", "Marketing"],
    members: [
      {
        name: "Md Ariful Islam",
        role: "Team Lead",
        department: "Computer Science & Engineering",
        image: "/Team/Mgt/md_ariful_islam.jpg",
      },
      {
        name: "Ashfia Tabassum",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/Mgt/ashfia_tabassum.jpg",
      },
      {
        name: "Tamim Rizvee",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/Mgt/tamim_rizvee.jpg",
      },
      {
        name: "Tahiya Iffat Mojumder",
        role: "Team Member",
        department: "Electrical Electronics and Communication Engineering",
        image: "/Team/Mgt/tahiya_iffat_mojumder.jpg",
      },
      {
        name: "Mushfique Rahman",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/Mgt/mushfique_rahman.jpg",
      },
      {
        name: "Nazifa Raksanda",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/Mgt/nazifa_raksanda.jpg",
      },
      {
        name: "Abid Ikram",
        role: "Team Member",
        department: "Mechanical Engineering",
        image: "/Team/Mgt/abid_ikram.jpg",
      },
      {
        name: "Rahik Mohammad",
        role: "Team Member",
        department: "Industrial & Production Engineering",
        image: "/Team/Mgt/rahik_mohammad.jpg",
      },
    ],
  },
  {
    id: "communications",
    name: "Communications Team",
    icon: Wifi,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    description:
      "Designs and maintains the rover's wireless communication stack, telemetry channels, and mission control interfaces.",
    responsibilities: [
      "Long-range radio link design and optimization",
      "Wi-Fi mesh and fallback communication planning",
      "Telemetry pipeline, dashboard, and data relay services",
      "Signal integrity testing during field missions",
    ],
    skills: [
      "Wireless Networking",
      "Radio Frequency Systems",
      "Network Protocols",
      "Telemetry & Dashboard Development",
    ],
    members: [
      {
        name: "Sameen Abrar",
        role: "Team Lead",
        department: "Computer Science & Engineering",
        image: "/Team/comms/sameen_abrar.jpg",
      },
      {
        name: "Bijoy Sarkar",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/comms/bijoy_sarkar.jpg",
      },
      {
        name: "Farhan Mugdho",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/comms/farhan_mugdho.jpg",
      },
      {
        name: "Mushfiqur Rahman",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/comms/mushfiqur_rahman.jpg",
      },
      {
        name: "Saber Toha",
        role: "Team Member",
        department: "Computer Science & Engineering",
        image: "/Team/comms/saber_toha.jpg",
      },
    ],
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              The Minds Behind
              <span className="text-primary block">Mars Exploration</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Meet the passionate engineers, researchers, and innovators who make up MIST Mongol Barota. Our
              multidisciplinary team brings together expertise from across engineering fields to push the boundaries of
              Mars rover technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/join">Join Our Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our dedicated leaders who guide the team towards excellence and innovation
            </p>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                    <div className="relative w-full max-w-xs mx-auto lg:mx-0 aspect-square overflow-hidden rounded-3xl">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 320px, 384px"
                      />
                    </div>
                    <div className="flex-1 space-y-4 text-center lg:text-left">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                        <Badge variant="secondary" className="text-sm">
                          {leader.role}
                        </Badge>
                      </div>
                      <div className="grid gap-1 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{leader.department}</span>
                        <span>{leader.level}</span>
                        <span>{leader.bio}</span>
                      </div>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                        <Button asChild variant="outline" size="sm" className="rounded-full">
                          <Link href={`mailto:${leader.email}`}>
                            <Mail className="w-4 h-4" />
                            <span className="ml-2">Email</span>
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="rounded-full">
                          <Link href={`tel:${leader.phone}`}>
                            <Phone className="w-4 h-4" />
                            <span className="ml-2">Call</span>
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="rounded-full">
                          <Link href={leader.linkedin || "#"}>
                            <Linkedin className="w-4 h-4" />
                            <span className="ml-2">LinkedIn</span>
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="rounded-full">
                          <Link href={leader.github || "#"}>
                            <Github className="w-4 h-4" />
                            <span className="ml-2">GitHub</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Faculty Advisors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experienced faculty members providing guidance and institutional support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyAdvisors.map((advisor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="relative mx-auto w-32 h-32 overflow-hidden rounded-3xl">
                    <Image
                      src={advisor.image || "/placeholder.svg"}
                      alt={advisor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="font-semibold text-base">{advisor.name}</h3>
                    <Badge variant="outline" className="text-xs px-3 py-1 rounded-full">
                      {advisor.role}
                    </Badge>
                    {advisor.title && <div className="text-xs text-muted-foreground">{advisor.title}</div>}
                    <div className="text-xs text-muted-foreground">{advisor.department}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{advisor.bio}</p>
                  </div>
                  <div className="flex justify-center gap-3">
                    {advisor.email && (
                      <Button asChild variant="outline" size="sm" className="rounded-full">
                        <Link href={`mailto:${advisor.email}`}>
                          <Mail className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                    {advisor.phone && (
                      <Button asChild variant="outline" size="sm" className="rounded-full">
                        <Link href={`tel:${advisor.phone}`}>
                          <Phone className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-teams */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sub-teams</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Specialized teams working together to create world-class Mars rovers
            </p>
          </div>

          <Tabs defaultValue="mechanical" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
              {subTeams.map((team) => (
                <TabsTrigger key={team.id} value={team.id} className="text-xs md:text-sm">
                  {team.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {subTeams.map((team) => (
              <TabsContent key={team.id} value={team.id} className="space-y-8">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${team.bgColor} rounded-lg mb-4`}>
                    {team.icon && <team.icon className={`w-8 h-8 ${team.color}`} />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{team.name}</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{team.description}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-4 text-lg">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {team.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                    <Card className="h-full">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-4 text-lg">Required Skills</h4>
                        <div className="flex flex-wrap gap-2">
                        {team.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h4 className="font-semibold mb-6 text-center">Team Members</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.members.map((member, i) => (
                      <Card key={i} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 space-y-4">
                          <div className="relative w-65 h-65 mx-auto overflow-hidden rounded-3xl">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 112px, 144px"
                            />
                          </div>
                          <div className="space-y-2 text-center">
                            <h5 className="font-semibold text-base">{member.name}</h5>
                            <Badge variant="secondary" className="text-xs px-3 py-1 rounded-full">
                              {member.role}
                            </Badge>
                            <div className="text-xs text-muted-foreground leading-relaxed">{member.department}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Team Statistics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our diverse and growing team across multiple engineering disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Sub-teams</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Engineering Departments</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
