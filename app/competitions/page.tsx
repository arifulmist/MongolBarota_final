"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  ExternalLink,
  FlaskConical,
  MapPin,
  Navigation,
  Target,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const competitions = [
  {
    id: "urc",
    name: "University Rover Challenge",
    organizer: "Mars Society, USA",
    location: "Mars Desert Research Station, Utah, USA",
    description:
      "The premier international Mars rover competition bringing together university teams from around the globe to test their rovers in Mars-like conditions.",
    website: "https://urc.marssociety.org",
    image: "/urc_image.jpg",
    missions: [
      {
        name: "Science Mission",
        icon: FlaskConical,
        description:
          "Collect and analyze Martian soil samples for potential life signs while considering geological context. Teams must demonstrate scientific methodology and equipment operation.",
        points: "25 points",
      },
      {
        name: "Extreme Retrieval and Delivery",
        icon: Target,
        description:
          "Assist astronauts with field tasks including object retrieval and navigation through difficult terrain. Tests rover mobility and manipulation capabilities.",
        points: "25 points",
      },
      {
        name: "Equipment Servicing Mission",
        icon: Wrench,
        description:
          "Demonstrate dexterity by delivering cached samples and performing maintenance on a mock lander. Requires precise robotic arm control.",
        points: "25 points",
      },
      {
        name: "Autonomous Traversal Mission",
        icon: Navigation,
        description:
          "Navigate autonomously through a series of gates using GPS coordinates and computer vision. No human intervention allowed during execution.",
        points: "25 points",
      },
    ],
    ourHistory: [
    {
        year: "2026",
        result: "11th Place",
        score: "Onsite Finals",
        note: "Strong global performance",
      },
      {
        year: "2025",
        result: "14th Place",
        score: "Onsite Finals",
        note: "Strong global performance",
      },
      {
        year: "2024",
        result: "Finals Qualified",
        score: "90.15% SAR",
        note: "Highest South Asian score",
      },
      {
        year: "2021",
        result: "Global Champions",
        score: "1st Place",
        note: "Historic victory",
      },
      {
        year: "2015",
        result: "9th Place",
        score: "Best Asian Team",
        note: "Regional recognition",
      },
      {
        year: "2014",
        result: "12th Place",
        score: "First participation",
        note: "Bangladesh debut",
      },
    ],
  },
  {
    id: "arc",
    name: "Anatolian Rover Challenge",
    organizer: "ITU Rover Team, Turkey",
    location: "Ankara, Turkey",
    description:
      "A prestigious European rover competition that tests teams' engineering skills through challenging missions in a Mars-analog environment.",
    website: "https://www.anatolianrover.space/",
    image: "/arc.jpeg",
    missions: [
      {
        name: "Science Mission",
        icon: FlaskConical,
        description:
          "Analyze soil samples and identify potential signs of life using onboard scientific instruments and methodologies.",
        points: "Variable",
      },
      {
        name: "Delivery Mission",
        icon: Target,
        description:
          "Transport objects and assist crew members with various tasks while navigating challenging terrain.",
        points: "Variable",
      },
      {
        name: "Maintenance Mission",
        icon: Wrench,
        description:
          "Perform complex maintenance tasks on equipment using the rover's robotic arm and end effector.",
        points: "Variable",
      },
      {
        name: "Autonomous Mission",
        icon: Navigation,
        description:
          "Complete autonomous navigation tasks using GPS and computer vision without human intervention.",
        points: "Variable",
      },
    ],
    ourHistory: [
      {
        year: "2024",
        result: "2nd Place",
        score: "Runner-up",
        note: "Silver medal achievement",
      },
      {
        year: "2023",
        result: "5th Place",
        score: "Top 5 finish",
        note: "Consistent performance",
      },
      {
        year: "2022",
        result: "3rd Place",
        score: "Bronze medal",
        note: "Podium finish",
      },
    ],
  },
  {
    id: "erc",
    name: "European Rover Challenge",
    organizer: "European Space Foundation",
    location: "Kielce, Poland",
    description:
      "One of Europe's largest space robotics events, bringing together teams to compete in Mars rover challenges and space technology demonstrations.",
    website: "https://roverchallenge.eu/",
    image: "/erc.webp",
    missions: [
      {
        name: "Navigation Mission",
        icon: Navigation,
        description:
          "Navigate through waypoints and obstacles using autonomous systems and manual control.",
        points: "Variable",
      },
      {
        name: "Science Mission",
        icon: FlaskConical,
        description:
          "Collect and analyze samples using scientific equipment and report findings.",
        points: "Variable",
      },
      {
        name: "Maintenance Mission",
        icon: Wrench,
        description:
          "Perform maintenance tasks on space equipment using robotic manipulation.",
        points: "Variable",
      },
    ],
    ourHistory: [
      {
        year: "2016",
        result: "21st Place",
        score: "International debut",
        note: "European expansion",
      },
    ],
  },
];

function CompetitionContent({
  competition,
}: {
  competition: (typeof competitions)[0];
}) {
  return (
    <div className="space-y-12">
      {/* Competition Overview */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {competition.name}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {competition.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium">Organizer:</span>
              <span className="text-muted-foreground">
                {competition.organizer}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Location:</span>
              <span className="text-muted-foreground">
                {competition.location}
              </span>
            </div>
          </div>

          <Button asChild variant="outline">
            <Link
              href={competition.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="relative">
          <Image
            src={competition.image || "/placeholder.svg"}
            alt={competition.name}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Missions */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-center">
          Competition Missions
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {competition.missions.map((mission, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <mission.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{mission.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {mission.points}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {mission.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Our History */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-center">
          Our Performance History
        </h3>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {competition.ourHistory.map((entry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="text-sm font-medium">{entry.year}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-lg">
                          {entry.result}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {entry.score}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">{entry.note}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CompetitionsPage() {
  const [selectedCompetition, setSelectedCompetition] = useState("urc");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Competitions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Competing on the
              <span className="text-primary block">Global Stage</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              From Utah's Mars Desert to Turkey's challenging terrain, we test
              our rovers against the world's best teams in prestigious
              international competitions.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/achievements">
                View Our Results
                <Trophy className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Competition Tabs/Dropdown */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Mobile Dropdown */}
          <div className="md:hidden mb-8">
            <select
              value={selectedCompetition}
              onChange={(e) => setSelectedCompetition(e.target.value)}
              className="w-full p-3 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="urc">University Rover Challenge</option>
              <option value="arc">Anatolian Rover Challenge</option>
              <option value="erc">European Rover Challenge</option>
            </select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:block">
            <Tabs defaultValue="urc" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="urc">
                  University Rover Challenge
                </TabsTrigger>
                <TabsTrigger value="arc">Anatolian Rover Challenge</TabsTrigger>
                <TabsTrigger value="erc">European Rover Challenge</TabsTrigger>
              </TabsList>

              {competitions.map((competition) => (
                <TabsContent key={competition.id} value={competition.id}>
                  <CompetitionContent competition={competition} />
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Mobile Content */}
          <div className="md:hidden">
            {competitions.map(
              (competition) =>
                selectedCompetition === competition.id && (
                  <div key={competition.id}>
                    <CompetitionContent competition={competition} />
                  </div>
                )
            )}
          </div>
        </div>
      </section>

      {/* Competition Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Competition Statistics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our track record across international Mars rover competitions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">
                  Total Competitions
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-sm text-muted-foreground">
                  Global Championship
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">
                  Podium Finishes
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  90.15%
                </div>
                <div className="text-sm text-muted-foreground">
                  Highest SAR Score
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
