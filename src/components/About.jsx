const skills = [
  ['◇', 'UX / UI design', 'Thoughtful interfaces with people at their heart.'],
  ['✧', 'Web development', 'Responsive experiences built for the web.'],
  ['⌘', 'Creative computing', 'Exploring where design meets technology.'],
];
const process = [
  ['Discover', 'Understand the people, the purpose, and the problem.'],
  ['Design', 'Explore ideas and shape them into clear interfaces.'],
  ['Develop', 'Bring the experience to life with care and precision.'],
  ['Refine', 'Test, learn, and make each detail work better.'],
];

export default function About() {
  return (
    <section id="about" className="about-section wrap" aria-label="About my skills and process">
      <div className="skills-column"><h2 className="eyebrow">What I bring</h2>
        <div className="skills-list">{skills.map(([icon, title, description]) => <div className="skill" key={title}><span aria-hidden="true">{icon}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div>
      </div>
      <div className="process-column"><h2 className="eyebrow">My process</h2>
        <ol>{process.map(([title, description], index) => <li key={title}><span className="process-number" aria-hidden="true">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
      </div>
      <div className="about-note"><span className="note-star" aria-hidden="true">✦</span><p className="eyebrow">A little about me</p><p className="editorial-quote">A curious mind.<br />A creative eye.<br /><em>A human approach.</em></p><p>I’m studying Creative Computing at IADT, exploring how thoughtful design and frontend development can make everyday interactions feel more intuitive.</p><span className="signature">Giorgia.</span></div>
    </section>
  );
}

