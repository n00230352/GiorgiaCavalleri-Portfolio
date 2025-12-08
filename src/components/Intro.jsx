import TextType from "@/components/animations/TextType"
import { Button } from "@/components/ui/button"

export default function Intro() {
  return (
    <header id="intro" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                Portfolio
              </p>

              <h1 className="text-7xl lg:text-8xl font-light leading-tight">
                Giorgia
                <br />
                Cavalleri
              </h1>

              <div className="text-lg text-muted-foreground font-light">
                <TextType
                  texts={[
                    "Frontend Developer",
                    "UI Designer",
                    "Based in Dublin",
                  ]}
                  showCursor={false}
                />
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Creating clean, thoughtful interfaces. Focused on simplicity, design, and user experience.
            </p>

            <div className="flex gap-4 pt-4">
              <Button asChild size="sm" variant="default">
                <a href="#projects">Work</a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href="#contact">Contact</a>
              </Button>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="images/giorgia.JPG"
                alt="Giorgia Cavalleri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}