import { RoverModal } from "@/components/rover-modal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Calendar, Cpu, Eye, Medal, Trophy, Zap } from "lucide-react"
import Image from "next/image"

const rovers = [
   {
    id: "CELESTE-I",
    name: "CELESTE-I",
    year: "2026-Present",
    status: "Active",
    description:
      "Our latest and most advanced rover, designed for URC 2025 with cutting-edge AI and autonomous navigation.",
    image: "/CELESTE-i.jpg",
    achievements: ["URC 2026 Finals Qualified",],
    specs: {
      weight: "50 kg",
      dimensions: "1.2m x 0.8m x 0.6m",
      power: "24V Li-ion Battery",
      communication: "Long-range Radio + LoRa",
      autonomy: "Computer Vision + GPS Navigation",
      arm: "5-DOF Robotic Arm",
    },
    features: [
      "Advanced autonomous navigation system",
      "High-precision robotic arm with end effector",
      "Comprehensive science analysis module",
      "Real-time video streaming capability",
      "Robust suspension system for rough terrain",
    ],
  },
  {
    id: "aurora-x",
    name: "Aurora X",
    year: "2024-2025",
    status: "Active",
    description:
      "Our latest and most advanced rover, designed for URC 2025 with cutting-edge AI and autonomous navigation.",
    image: "/AuroraX.jpg",
    achievements: ["URC 2024 Finals Qualified", "ARC 2024 Runner-up", "Highest SAR Score (90.15%)"],
    specs: {
      weight: "50 kg",
      dimensions: "1.2m x 0.8m x 0.6m",
      power: "24V Li-ion Battery",
      communication: "Long-range Radio + LoRa",
      autonomy: "Computer Vision + GPS Navigation",
      arm: "6-DOF Robotic Arm",
    },
    features: [
      "Advanced autonomous navigation system",
      "High-precision robotic arm with end effector",
      "Comprehensive science analysis module",
      "Real-time video streaming capability",
      "Robust suspension system for rough terrain",
    ],
  },
  {
    id: "phoenix",
    name: "Phoenix",
    year: "2021",
    status: "Champion",
    description:
      "The rover that made history by winning URC 2021, establishing Bangladesh as a force in Mars rover competitions.",
    image: "/rover2.jpeg",
    achievements: ["URC 2021 Global Champions", "First Place Worldwide", "Historic Victory"],
    specs: {
      weight: "45 kg",
      dimensions: "1.1m x 0.7m x 0.5m",
      power: "24V Battery System",
      communication: "Radio Frequency Control",
      autonomy: "GPS + Computer Vision",
      arm: "5-DOF Manipulator",
    },
    features: [
      "Championship-winning design",
      "Reliable navigation system",
      "Efficient power management",
      "Robust communication system",
      "Proven competition performance",
    ],
  },
  {
    id: "explorer-0100",
    name: "Explorer-0100",
    year: "2016",
    status: "Veteran",
    description:
      "Our European Rover Challenge participant, representing our expansion into international competitions.",
    image: "/rover3.png",
    achievements: ["ERC 2016 Participant", "21st Position Globally", "International Expansion"],
    specs: {
      weight: "40 kg",
      dimensions: "1.0m x 0.6m x 0.5m",
      power: "12V Battery System",
      communication: "Basic Radio Control",
      autonomy: "Manual Navigation",
      arm: "4-DOF Arm",
    },
    features: [
      "Lightweight design",
      "Modular construction",
      "Basic science capabilities",
      "Reliable mechanical systems",
      "Learning platform for team",
    ],
  },
  {
    id: "mongol-barota",
    name: "Mongol Barota",
    year: "2014-2015",
    status: "Pioneer",
    description:
      "Our first rover that started it all, pioneering Bangladesh's entry into international Mars rover competitions.",
    image: "/rover4.jpg",
    achievements: ["First Bangladeshi URC Team", "URC 2015 Best Asian Team", "9th Position Globally"],
    specs: {
      weight: "35 kg",
      dimensions: "0.9m x 0.5m x 0.4m",
      power: "12V Lead-acid Battery",
      communication: "Basic RF System",
      autonomy: "Manual Control",
      arm: "3-DOF Basic Arm",
    },
    features: [
      "Historic first rover",
      "Proof of concept design",
      "Foundation for future rovers",
      "Basic mobility system",
      "Simple but effective",
    ],
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Active":
      return <Zap className="w-4 h-4 text-green-500" />
    case "Champion":
      return <Trophy className="w-4 h-4 text-yellow-500" />
    case "Veteran":
      return <Medal className="w-4 h-4 text-blue-500" />
    case "Pioneer":
      return <Award className="w-4 h-4 text-purple-500" />
    default:
      return <Eye className="w-4 h-4 text-gray-500" />
  }
}

export default function RoversPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Our Rovers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Engineering Excellence
              <span className="text-primary block">Across Generations</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              From our pioneering first rover to the cutting-edge Aurora X, explore the evolution of our Mars rover
              technology and the innovations that have made us global champions.
            </p>
          </div>
        </div>
      </section>

      {/* Rovers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {rovers.map((rover, index) => (
              <Card key={rover.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image */}
                  <div
                    className={`relative aspect-video lg:aspect-square bg-muted/30 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <Image
                      src={rover.image || "/placeholder.svg"}
                      alt={rover.name}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background text-foreground border">
                        <Calendar className="w-3 h-3 mr-1" />
                        {rover.year}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background text-foreground border">
                        {getStatusIcon(rover.status)}
                        <span className="ml-1">{rover.status}</span>
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-3">{rover.name}</h2>
                        <p className="text-muted-foreground text-lg">{rover.description}</p>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h3 className="font-semibold mb-3">Key Achievements</h3>
                        <div className="flex flex-wrap gap-2">
                          {rover.achievements.map((achievement, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Specs Preview */}
                      <div>
                        <h3 className="font-semibold mb-3">Specifications</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Weight:</span>
                            <span className="ml-2 font-medium">{rover.specs.weight}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Power:</span>
                            <span className="ml-2 font-medium">{rover.specs.power}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Dimensions:</span>
                            <span className="ml-2 font-medium">{rover.specs.dimensions}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Arm:</span>
                            <span className="ml-2 font-medium">{rover.specs.arm}</span>
                          </div>
                        </div>
                      </div>

                      <RoverModal rover={rover}>
                        <Button className="bg-primary hover:bg-primary/90">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </RoverModal>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Evolution */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Evolution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              See how our rover technology has advanced over the years, from basic mobility to advanced AI systems
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Cpu className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Processing Power</h3>
                  <p className="text-sm text-muted-foreground">From basic microcontrollers to Jetson Orin AGX</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Eye className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Computer Vision</h3>
                  <p className="text-sm text-muted-foreground">Advanced AI-powered navigation and object recognition</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Power Systems</h3>
                  <p className="text-sm text-muted-foreground">Efficient battery management and power distribution</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Performance</h3>
                  <p className="text-sm text-muted-foreground">From participation to global championship</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
