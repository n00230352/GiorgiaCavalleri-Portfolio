export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

            <div className="space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Always open to learning through new opportunities, collaborations, and conversations around technology and design.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:giorgiacav05@gmail.com"
                  className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-200"
                >
                  <span className="text-base sm:text-lg">giorgiacav05@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <aside className="space-y-6 sm:space-y-8">
            <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "GitHub", handle: "@giorgiacavalleri", url: "https://github.com/n00230352" },
                { name: "LinkedIn", handle: "Giorgia Cavalleri", url: "https://www.linkedin.com/in/giorgiacavalleri" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="text-foreground group-hover:text-primary transition-colors duration-200">{social.name}</div>
                    <div className="text-sm text-muted-foreground">{social.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}