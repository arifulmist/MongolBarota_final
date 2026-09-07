"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { AlumniMember } from "@/lib/alumni-data"
import { User } from "lucide-react"
import Image from "next/image"

interface AlumniCardProps {
  member: AlumniMember
}

export function AlumniCard({ member }: AlumniCardProps) {
  return (
    <Card className="group h-full overflow-hidden border-border/60 hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-5 flex flex-col items-center text-center h-full justify-between gap-4">
        {/* Photo Container / Placeholder */}
        <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-muted/90 via-muted/50 to-muted/20 border border-border/40 flex items-center justify-center transition-colors group-hover:border-primary/30">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="relative flex flex-col items-center justify-center p-4 select-none">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-background/80 dark:bg-card/80 border border-border/50 shadow-inner flex items-center justify-center text-muted-foreground/60 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                <User className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <span className="mt-2 text-[10px] uppercase font-semibold tracking-wider text-muted-foreground/50">
                Mongol Barota
              </span>
            </div>
          )}
        </div>

        {/* Member Details */}
        <div className="w-full space-y-2 flex flex-col items-center justify-center flex-1">
          <h4 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {member.name}
          </h4>
          <div className="pt-1">
            <Badge
              variant="secondary"
              className="text-xs px-3 py-1 font-medium rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              {member.role}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
