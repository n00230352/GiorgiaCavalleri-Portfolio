export default function Intro() {
  return (
    <section id="intro" className="hero wrap" aria-labelledby="intro-title">
      <div className="hero-copy">
        <p className="eyebrow">Creative computing · IADT</p>
        <h2 id="intro-title">Giorgia<br /><em>Cavalleri</em></h2>
        <p className="hero-role">UX design &amp;<br />frontend development</p>
        <span className="gold-rule" aria-hidden="true" />
        <p className="hero-description">I’m a Creative Computing student with a passion for UX design. I bring design and technology together to create thoughtful, meaningful digital experiences.</p>
        <a className="text-link" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
        <p className="availability"><span aria-hidden="true" />Open to work &amp; new ideas</p>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame"><img src="/images/myself.jpg" alt="Giorgia Cavalleri" loading="lazy" /></div>
        <div className="portrait-stamp" aria-label="Design with purpose"><span>DESIGN WITH PURPOSE</span><b aria-hidden="true">G<span>✦</span></b><span>CREATE WITH CURIOSITY</span></div>
        <p className="portrait-caption"><span>Thoughtful by design.</span><span>01 / INTRODUCTION</span></p>
      </div>
    </section>
  );
}


