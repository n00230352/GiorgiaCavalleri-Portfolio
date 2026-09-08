export default function AboutMe() {
  return (
    <section id="about-me" className="bg-white text-[#fffdf2]" aria-labelledby="about-me-title">
      <svg className="block h-[36px] w-full sm:h-[60px] lg:h-[80px]" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path fill="#242424" d="M0 22 C100 22 125 100 270 86 C390 74 455 42 565 70 C670 96 715 137 810 111 C925 81 986 0 1135 6 C1260 10 1350 37 1440 28 L1440 120 L0 120 Z" />
      </svg>
      <div className="bg-[#242424]">
        <div className="mx-auto grid w-[88%] max-w-[1280px] grid-cols-1 items-center gap-9 pt-9 pb-16 sm:pt-12 sm:pb-24 md:grid-cols-[1.15fr_1fr] md:gap-[10%] lg:pt-16 lg:pb-28">
          <h2 id="about-me-title" className="m-0 [font-family:'Arial_Black',Arial,Helvetica,sans-serif] text-[clamp(40px,6.4vw,94px)] max-[600px]:text-[clamp(39px,10.5vw,63px)] leading-[0.9] font-black tracking-[-0.065em] md:col-start-2 md:row-start-1 md:text-right">
            <span className="block">ABOUT</span>
            <span className="block">ME</span>
          </h2>
          <div className="space-y-5 text-sm leading-[1.9] text-[#deddd6] sm:text-base md:col-start-1 md:row-start-1">
            <p>Hi, I’m Giorgia Cavalleri, a Creative Computing student at IADT, based in Dublin. I have a passion for UX design and frontend development, and I’m interested in how design and technology come together to shape meaningful user experiences.</p>
            <p>From exploring ideas in Figma to building interfaces with React, I enjoy creating digital experiences that feel clear, intuitive, and thoughtful. I’m always open to learning, trying new approaches, and finding ways to make everyday interactions a little easier.</p>
          </div>
        </div>
      </div>
      <svg className="block h-[40px] w-full sm:h-[64px] lg:h-[84px]" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path fill="#242424" d="M0 0 H1440 V36 C1240 -4 1090 16 910 55 C710 98 555 120 350 106 C175 102 70 76 0 44 Z" />
      </svg>
    </section>
  );
}
