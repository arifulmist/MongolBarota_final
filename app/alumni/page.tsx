"use client"

import { AlumniCard } from "@/components/alumni-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { alumniData } from "@/lib/alumni-data"
import {
  Award,
  BarChart3,
  Calendar,
  Cpu,
  FlaskConical,
  GraduationCap,
  History,
  Radio,
  Sliders,
  Sparkles,
  Trophy,
  Users,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useMemo, useRef, useState } from "react"

// Helper function to pick sub-team icon
function getSubTeamIcon(subTeamName: string) {
  const name = subTeamName.toLowerCase()
  if (name.includes("lead")) return Award
  if (name.includes("elec")) return Zap
  if (name.includes("soft") && name.includes("comm")) return Radio
  if (name.includes("soft")) return Cpu
  if (name.includes("comm")) return Wifi
  if (name.includes("sci")) return FlaskConical
  if (name.includes("manage")) return BarChart3
  if (name.includes("mech")) return Wrench
  if (name.includes("advisor")) return GraduationCap
  if (name.includes("control")) return Sliders
  return Users
}

export default function AlumniPage() {
  // Default to latest competition (URC 2026)
  const [selectedCompetitionId, setSelectedCompetitionId] = useState<string>("urc-2026")
  const teamSectionRef = useRef<HTMLDivElement>(null)

  // Current active competition
  const activeCompetition = useMemo(() => {
    return alumniData.find((comp) => comp.id === selectedCompetitionId) || alumniData[0]
  }, [selectedCompetitionId])

  // Total members in active competition
  const activeMemberCount = useMemo(() => {
    if (!activeCompetition) return 0
    return activeCompetition.subTeams.reduce((acc, st) => acc + st.members.length, 0)
  }, [activeCompetition])

  // Handle competition selection and smooth scroll down
  const handleSelectCompetition = (id: string) => {
    setSelectedCompetitionId(id)

    // Smooth scroll down to the team section
    setTimeout(() => {
      if (teamSectionRef.current) {
        const navOffset = 130 // offset for sticky navbar + competition selector bar
        const elementPosition = teamSectionRef.current.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navOffset
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 50)
  }

  return (
    <div className="min-h-screen">
      {/* 1. Alumni Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20 border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-3.5 py-1 text-sm gap-1.5 shadow-sm">
              <History className="w-3.5 h-3.5 text-primary" />
              Alumni Archive
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance tracking-tight">
              Honoring the People of
              <span className="text-primary block mt-1">MIST Mongol Barota</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Celebrating the students, engineers, and faculty who built, competed, and represented
              MIST Mongol Barota across global Mars rover competitions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-md">
                <Link href="/team">Current Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/achievements">
                  <Trophy className="w-4 h-4 mr-2" />
                  View Achievements
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Competition / Year Selector (Sticky Sub-nav) */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b py-3 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span>Select Edition:</span>
            </div>

            {/* Competition Year Selector Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {alumniData.map((comp) => {
                const isSelected = selectedCompetitionId === comp.id
                return (
                  <Button
                    key={comp.id}
                    variant={isSelected ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleSelectCompetition(comp.id)}
                    className={`rounded-full px-4 text-xs font-semibold transition-all shrink-0 ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-md scale-105"
                        : "hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {comp.competition}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Active Competition Dedicated Section (Target for Smooth Scroll) */}
      <section ref={teamSectionRef} className="py-16 scroll-mt-36">
        <div className="container mx-auto px-4 space-y-16">
          {/* Competition Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-2">
              <Badge variant="outline" className="px-3.5 py-1 text-xs">
                {activeCompetition.competitionFullName}
              </Badge>
              {activeCompetition.note && (
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 text-xs px-3.5 py-1"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  {activeCompetition.note}
                </Badge>
              )}
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              {activeCompetition.competition}
            </h2>

            <p className="text-muted-foreground text-sm md:text-base text-pretty">
              Showing historical roster of {activeMemberCount} members and advisors who represented
              MIST Mongol Barota for {activeCompetition.competition}.
            </p>
          </div>

          {/* Sub-teams and Member Cards */}
          <div className="space-y-16">
            {activeCompetition.subTeams.map((subTeam) => {
              const SubTeamIcon = getSubTeamIcon(subTeam.name)

              return (
                <div key={subTeam.name} className="space-y-8">
                  {/* Sub-Team Header */}
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                        <SubTeamIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                          {subTeam.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {subTeam.members.length}{" "}
                          {subTeam.members.length === 1 ? "Member" : "Members"}
                        </p>
                      </div>
                    </div>

                    <Badge variant="outline" className="text-xs">
                      {activeCompetition.competition}
                    </Badge>
                  </div>

                  {/* Member Card Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {subTeam.members.map((member, i) => (
                      <AlumniCard
                        key={`${activeCompetition.id}-${subTeam.name}-${member.name}-${i}`}
                        member={member}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Heritage Statistics Section */}
      <section className="py-20 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-3">
            <Badge variant="outline">Alumni Heritage</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">A Tradition of Innovation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From URC 2022 through URC 2026, over a decade of excellence in robotics engineering.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12+</div>
                <div className="text-sm font-medium text-foreground">Years of Heritage</div>
                <div className="text-xs text-muted-foreground mt-1">Since 2013</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-sm font-medium text-foreground">Featured URC Rosters</div>
                <div className="text-xs text-muted-foreground mt-1">2026, 2025, 2023, 2022</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Global</div>
                <div className="text-sm font-medium text-foreground">Competition Finalists</div>
                <div className="text-xs text-muted-foreground mt-1">USA & International</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm font-medium text-foreground">Student Driven</div>
                <div className="text-xs text-muted-foreground mt-1">Engineering Leadership</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
