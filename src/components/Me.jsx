export default function Me() {
  return (
    <section id="me" className="bg-white text-[#292a26]" aria-labelledby="me-title">
      <div className="mx-auto grid w-[88%] max-w-[1280px] min-h-[min(760px,calc(100svh-100px))] grid-cols-[1.2fr_1fr] items-center gap-[7%] py-16 max-[600px]:min-h-0 max-[600px]:grid-cols-1 max-[600px]:gap-[38px] max-[600px]:pt-14 max-[600px]:pb-10">
        <div className="min-w-0 text-center">
          <h1 id="me-title" className="m-0 [font-family:'Arial_Black',Arial,Helvetica,sans-serif] text-[clamp(40px,6.4vw,94px)] leading-[0.86] font-black tracking-[-0.075em] max-[600px]:text-[clamp(39px,10.5vw,63px)]">
            <span className="block">GIORGIA</span>
            <span className="block">CAVALLERI</span>
          </h1>
          <p className="mt-7 mb-0 text-xs font-medium tracking-[0.15em] uppercase max-[600px]:mt-5 max-[600px]:text-[10px]">Portfolio</p>
        </div>
        <figure className="m-0 aspect-[4/5] max-h-[590px] w-full overflow-hidden bg-[#c9cbc2] max-[600px]:mx-auto max-[600px]:max-h-[440px] max-[600px]:w-[86%]">

          <img className="h-full w-full scale-[1.15] object-cover object-center" src="/images/Image%20(1).jpg" alt="Giorgia Cavalleri" fetchPriority="high" />
        </figure>
      </div>
    </section>
  );
}
