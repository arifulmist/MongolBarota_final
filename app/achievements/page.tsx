import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, Medal, Star, Trophy } from "lucide-react";
import Image from "next/image";

const achievements = [
    {
    year: "2026",
    title: "URC 2025 Global Competition",
    competition: "University Rover Challenge",
    location: "Utah, USA",
    result: "11th Place Worldwide",
    description:
      "Competed at the Mars Desert Research Station in Utah with CELESTE-I , achieving 11th position among the world's best university rover teams.",
    image: "/Achievements/26.jpg",
    icon: Star,
    color: "text-primary",
    bgColor: "bg-primary/10",
    highlights: [
      "11th Place Global",
      "Onsite Finals Competition",
      "CELESTE-I Performance",
    ],
    teamSize: "15 members",
    rover: "CELESTE-I",
  },
  {
    year: "2025",
    title: "URC 2025 Global Competition",
    competition: "University Rover Challenge",
    location: "Utah, USA",
    result: "14th Place Worldwide",
    description:
      "Competed at the Mars Desert Research Station in Utah with Aurora X, achieving 14th position among the world's best university rover teams.",
    image: "/Achievements/25.jpg",
    icon: Star,
    color: "text-primary",
    bgColor: "bg-primary/10",
    highlights: [
      "14th Place Global",
      "Onsite Finals Competition",
      "Aurora X Performance",
    ],
    teamSize: "18 members",
    rover: "Aurora X",
  },
  {
    year: "2024",
    title: "ARC 2024 Runner-up",
    competition: "Anatolian Rover Challenge",
    location: "Ankara, Turkey",
    result: "2nd Place",
    description:
      "Secured second place in the Anatolian Rover Challenge 2024 with Aurora X, demonstrating exceptional performance in all mission categories.",
    image: "/Achievements/ARC_24.jpeg",
    icon: Medal,
    color: "text-gray-600",
    bgColor: "bg-gray-100",
    highlights: [
      "Silver Medal Achievement",
      "Consistent Performance Across Missions",
      "International Recognition",
    ],
    teamSize: "15 members",
    rover: "Aurora X",
  },
  {
    year: "2023",
    title: "ARC 2023 Top 5 Finish",
    competition: "Anatolian Rover Challenge",
    location: "Ankara, Turkey",
    result: "5th Place",
    description:
      "Maintained consistent performance with a top 5 finish in ARC 2023, showcasing the team's reliability and technical competence.",
    image: "/Achievements/ARC_23.jpg",
    icon: Award,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    highlights: [
      "Top 5 Global Finish",
      "Consistent Performance",
      "Technical Innovation",
    ],
    teamSize: "16 members",
    rover: "Aurora X",
  },
  {
    year: "2022",
    title: "ARC 2022 Bronze Medal",
    competition: "Anatolian Rover Challenge",
    location: "Istanbul, Turkey",
    result: "3rd Place",
    description:
      "Earned a bronze medal at ARC 2022, marking our first podium finish in the Anatolian Rover Challenge series.",
    image: "/Achievements/ARC_22.jpeg",
    icon: Award,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    highlights: [
      "First ARC Podium",
      "Bronze Medal",
      "Breakthrough Performance",
    ],
    teamSize: "14 members",
    rover: "Phoenix",
  },
  {
    year: "2021",
    title: "URC 2021 Global Champions",
    competition: "University Rover Challenge",
    location: "Virtual Competition",
    result: "1st Place Worldwide",
    description:
      "Made history by becoming the first Bangladeshi team to win the University Rover Challenge, achieving global championship status.",
    image: "/Achievements/URC_21.jpg",
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    highlights: [
      "Global Champions",
      "Historic Victory",
      "First Bangladeshi Winners",
    ],
    teamSize: "12 members",
    rover: "Phoenix",
    featured: true,
  },
  {
    year: "2016",
    title: "ERC 2016 Participation",
    competition: "European Rover Challenge",
    location: "Kielce, Poland",
    result: "21st Place",
    description:
      "Expanded our international presence by participating in the European Rover Challenge, gaining valuable experience in European competitions.",
    image: "/Achievements/ERC_2016.png",
    icon: Star,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    highlights: [
      "European Debut",
      "International Expansion",
      "Learning Experience",
    ],
    teamSize: "10 members",
    rover: "Explorer-0100",
  },
  {
    year: "2015",
    title: "URC 2015 Best Asian Team",
    competition: "University Rover Challenge",
    location: "Utah, USA",
    result: "9th Place & Best Asian Team",
    description:
      "Achieved 9th position globally and was nominated as the Best Team from Asia, establishing our regional leadership.",
    image: "/Achievements/URC_2015.jpg",
    icon: Award,
    color: "text-green-600",
    bgColor: "bg-green-100",
    highlights: ["Best Asian Team", "9th Place Global", "Regional Recognition"],
    teamSize: "8 members",
    rover: "Mongol Barota",
  },
  {
    year: "2014",
    title: "URC 2014 Bangladesh Debut",
    competition: "University Rover Challenge",
    location: "Utah, USA",
    result: "12th Place",
    description:
      "Made history as the first Bangladeshi team to participate in the University Rover Challenge, placing 12th globally in our debut.",
    image: "/Achievements/URC_2014.jpg",
    icon: Star,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    highlights: [
      "Bangladesh Debut",
      "12th Place Global",
      "Historic Participation",
    ],
    teamSize: "6 members",
    rover: "Mongol Barota",
  },
];

export default function AchievementsPage() {
  const featuredAchievement = achievements.find((a) => a.featured)
  const otherAchievements = achievements.filter((a) => !a.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Our Achievements
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              A Legacy of
              <span className="text-primary block">Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              From our historic debut in 2014 to becoming global champions,
              explore our journey of achievements that have put Bangladesh on
              the world map of Mars rover competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Achievement */}
      {featuredAchievement && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge
                variant="secondary"
                className="mb-4 bg-yellow-100 text-yellow-800"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Featured Achievement
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Greatest Victory
              </h2>
            </div>

            <Card className="max-w-6xl mx-auto overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] lg:aspect-square bg-gradient-to-br from-muted/40 via-background to-muted/60 p-6 sm:p-10">
                  <Image
                    src={featuredAchievement.image || "/Achievements/URC_21.jpg"}
                    alt={featuredAchievement.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-amber-950 shadow-lg shadow-amber-500/40 border border-amber-300/60">
                      <Trophy className="w-3 h-3 mr-1 text-amber-900" />
                      Champions
                    </Badge>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-medium text-primary mb-2">
                        {featuredAchievement.year}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">
                        {featuredAchievement.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {featuredAchievement.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">
                          Competition:
                        </span>
                        <div className="font-medium">
                          {featuredAchievement.competition}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Result:</span>
                        <div className="font-medium">
                          {featuredAchievement.result}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Team Size:
                        </span>
                        <div className="font-medium">
                          {featuredAchievement.teamSize}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Rover:</span>
                        <div className="font-medium">
                          {featuredAchievement.rover}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Key Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredAchievement.highlights.map((highlight, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Achievement Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Achievement Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Follow our journey from debut to championship across international
              competitions
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {otherAchievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`grid lg:grid-cols-3 gap-0 ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative flex min-h-[220px] items-center justify-center bg-gradient-to-br from-muted/30 via-background to-muted/50 p-6 ${
                        index % 2 === 1 ? "lg:col-start-3" : ""
                      }`}
                    >
                      <Image
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        fill
                        className="object-contain drop-shadow-xl"
                        sizes="(min-width: 1024px) 320px, 100vw"
                      />
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-primary text-primary-foreground shadow-lg shadow-primary/40 border border-primary/30">
                          <Calendar className="w-3 h-3 mr-1 text-primary-foreground" />
                          {achievement.year}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-6 lg:p-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-2 ${achievement.bgColor} rounded-lg flex-shrink-0`}
                          >
                            <achievement.icon
                              className={`w-5 h-5 ${achievement.color}`}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">
                              {achievement.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {achievement.description}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">
                              Competition:
                            </span>
                            <div className="font-medium">
                              {achievement.competition}
                            </div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Location:
                            </span>
                            <div className="font-medium">
                              {achievement.location}
                            </div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Result:
                            </span>
                            <div className="font-medium">
                              {achievement.result}
                            </div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Rover:
                            </span>
                            <div className="font-medium">
                              {achievement.rover}
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex flex-wrap gap-2">
                            {achievement.highlights.map((highlight, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="text-xs"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              By the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our achievements quantified across years of competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-sm text-muted-foreground">
                  Global Championship
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Medal className="w-8 h-8 text-gray-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">
                  Podium Finishes
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">
                  Competition Participations
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">11</div>
                <div className="text-sm text-muted-foreground">
                  Years of Excellence
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
