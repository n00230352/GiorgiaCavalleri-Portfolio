export default function Intro() {
  return (
    <header id="intro" className="min-h-screen flex items-center">
      <div className="container mx-auto w-full px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10">
          {/* Left: image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 overflow-hidden shadow-lg">
              <img
                src="/images/giorgia.JPG"
                alt="Giorgia Cavalleri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-3 sm:space-y-2">
              <div className="text-sm text-muted-foreground tracking-wider">
                PORTFOLIO / 2025
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
                Giorgia Cavalleri
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-8 gap-6">
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div>
                   <div className="text-foreground">Student <span className="text-muted-foreground">@ IADT</span></div>
                   <div className="text-xs text-muted-foreground">2023 — Present</div>
                </div>
              </div>

             
            </div>

            <div className="space-y-6 max-w-lg">
              <p className="text-base sm:text-lg ">
                I’m a Creative Computing student at IADT with a passion for UX design and experience in frontend development, interested in how design and technology come together to shape meaningful user experiences.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Open to work
                </div>
                <div>Dublin, Ireland</div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </header>
  );
}
