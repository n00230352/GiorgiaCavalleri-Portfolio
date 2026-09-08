export default function Navbar() {
  return (
    <header className="site-header wrap">
      <a className="wordmark" href="#me" aria-label="Giorgia Cavalleri home">GC<span>✦</span></a>
      <nav aria-label="Main navigation">
        <a href="#projects">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Let’s connect <span aria-hidden="true">↗</span></a>
      </nav>
      <span className="header-year">Dublin, Ireland · {new Date().getFullYear()}</span>
    </header>
  );
}


