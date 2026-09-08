export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-grid wrap">
        <div className="footer-invitation"><h2>Let’s create<br />something<br /><em>meaningful.</em></h2><span aria-hidden="true">✦</span></div>
        <div><h3 className="eyebrow">Let’s connect</h3><a href="mailto:giorgiacav05@gmail.com">giorgiacav05@gmail.com ↗</a><p>Based in Dublin, Ireland</p><p className="footer-note">Open to opportunities,<br />collaborations &amp; conversations.</p></div>
        <div><h3 className="eyebrow">Find me elsewhere</h3><a href="https://github.com/n00230352" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/giorgiacavalleri" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
        <a className="footer-monogram" href="#me" aria-label="Back to top">GC<span aria-hidden="true">✦</span></a>
      </div>
      <div className="footer-bottom wrap"><p>© {new Date().getFullYear()} Giorgia Cavalleri</p><a href="#me">Back to top ↑</a></div>
    </footer>
  );
}


