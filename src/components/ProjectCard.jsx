import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import useEmblaCarousel from 'embla-carousel-react';

const categories = ['Web design · Development', 'UX / UI design · Mobile app', 'Game design · Unreal Engine', 'UX / UI design · React', 'Web development · React'];

function ExpandableMedia({ shot, title, shots, shotIndex }) {
  const [largeIndex, setLargeIndex] = useState(shotIndex);
  const touchStart = useRef(null);
  const largeShot = shots[largeIndex];
  const largeSrc = encodeURI('/' + largeShot.url.replace(/^\//, ''));
  const largeIsVideo = /\.(mp4|webm|ogg)(?:\?.*)?$/i.test(largeShot.url);
  const move = (direction) => setLargeIndex(current => Math.max(0, Math.min(shots.length - 1, current + direction)));
  const videoRef = useRef(null);
  const playbackTime = useRef(0);
  const src = encodeURI('/' + shot.url.replace(/^\//, ''));
  const isVideo = /\.(mp4|webm|ogg)(?:\?.*)?$/i.test(shot.url);
  const label = shot.caption || title;

  const onOpenChange = (open) => {
    if (open) setLargeIndex(shotIndex);
    if (open && videoRef.current) {
      playbackTime.current = videoRef.current.currentTime;
      videoRef.current.pause();
    }
  };

  return (
    <Dialog onOpenChange={onOpenChange}>
      {isVideo ? (
        <div className="relative">
          <video ref={videoRef} className="aspect-[16/10] w-full object-contain" src={src} controls playsInline preload="metadata" aria-label={label} />
          <DialogTrigger className="absolute top-3 right-3 border border-black bg-white px-3 py-2 text-xs text-black" aria-label={`Expand video: ${label}`}>Expand ↗</DialogTrigger>
        </div>
      ) : (
        <DialogTrigger className="group relative block w-full cursor-zoom-in" aria-label={`Expand image: ${label}`}>
          <img className="aspect-[16/10] w-full object-contain" src={src} alt={label} loading="lazy" />
          <span className="absolute right-3 bottom-3 border border-black bg-white px-2 py-1 text-xs text-black" aria-hidden="true">↗</span>
        </DialogTrigger>
      )}
      <DialogContent className="w-[calc(100%-2rem)] max-w-[1200px] sm:max-w-[1200px] max-h-[92dvh] overflow-y-auto rounded-none border-black bg-white p-4 pt-12 text-[#292a26] sm:p-6 sm:pt-12" aria-describedby={undefined} onKeyDown={(event) => {
        if (event.target.tagName === 'VIDEO') return;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          move(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}>
        <DialogTitle className="sr-only">{title}: {largeShot.caption || 'Project media'}</DialogTitle>
        <div className="flex h-[60dvh] items-center justify-center" onTouchStart={(event) => {
          touchStart.current = largeIsVideo ? null : { x: event.touches[0].clientX, y: event.touches[0].clientY };
        }} onTouchEnd={(event) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start) return;
          const dx = event.changedTouches[0].clientX - start.x;
          const dy = event.changedTouches[0].clientY - start.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
        }}>
          {largeIsVideo
            ? <video key={largeSrc} className="max-h-full w-full object-contain" src={largeSrc} controls playsInline preload="metadata" aria-label={largeShot.caption || title} onLoadedMetadata={(event) => { if (largeIndex === shotIndex) event.currentTarget.currentTime = playbackTime.current; }} />
            : <img className="max-h-full w-full object-contain" src={largeSrc} alt={largeShot.caption || title} />}
        </div>
        {shots.length > 1 && (
          <div className="flex items-center justify-between gap-4 border-t border-black/15 pt-3">
            <button type="button" className="px-3 py-2 text-sm disabled:opacity-25" disabled={largeIndex === 0} onClick={() => move(-1)} aria-label="Previous enlarged image">← Previous</button>
            <span className="text-xs" aria-live="polite">{largeIndex + 1} / {shots.length}</span>
            <button type="button" className="px-3 py-2 text-sm disabled:opacity-25" disabled={largeIndex === shots.length - 1} onClick={() => move(1)} aria-label="Next enlarged image">Next →</button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
function ProjectGallery({ project }) {
  const shots = project.screenshots || [];
  const [viewportRef, api] = useEmblaCarousel({ loop: false });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setSelected(api.selectedScrollSnap());
      api.slideNodes().forEach((slide) => {
        slide.querySelectorAll('video').forEach((video) => video.pause());
      });
    };
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  return (
    <div role="region" aria-roledescription="carousel" aria-label={`${project.title} images`}>
      <div ref={viewportRef} className="overflow-hidden border border-black bg-[#f5f4f0]">
        <div className="flex touch-pan-y">
          {shots.map((shot, shotIndex) => {

            return (
              <div key={shot.url} className="min-w-0 flex-[0_0_100%]" role="group" aria-roledescription="slide" aria-label={`${shotIndex + 1} of ${shots.length}`} inert={shotIndex !== selected}>
                <ExpandableMedia shot={shot} title={project.title} shots={shots} shotIndex={shotIndex} />
              </div>
            );
          })}
        </div>
      </div>
      {shots.length > 1 && (
        <div className="mt-3 flex items-center justify-between gap-4">
          <button type="button" onClick={() => api?.scrollPrev()} disabled={selected === 0} className="px-2 py-1 text-xl disabled:opacity-25" aria-label={`Previous image for ${project.title}`}>←</button>
          <div className="flex flex-wrap justify-center" aria-label="Choose an image">
            {shots.map((shot, shotIndex) => <button key={shot.url} type="button" className="grid size-7 place-items-center" onClick={() => api?.scrollTo(shotIndex)} aria-label={`Show image ${shotIndex + 1} for ${project.title}`} aria-current={selected === shotIndex ? 'true' : undefined}><span className={`size-1.5 rounded-full ${selected === shotIndex ? 'bg-black' : 'bg-black/20'}`} /></button>)}
          </div>
          <button type="button" onClick={() => api?.scrollNext()} disabled={selected === shots.length - 1} className="px-2 py-1 text-xl disabled:opacity-25" aria-label={`Next image for ${project.title}`}>→</button>
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ project, index = 0 }) {
  const github = project.github?.trim();
  const liveUrl = project.url?.trim();
  return (
    <article className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-[8%]">
      <div className={index % 2 === 0 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2 md:row-start-1'}>
        <p className="mb-3 text-[10px] tracking-[0.12em] text-[#71695c] uppercase">{categories[index]}</p>
        <h3 className="mb-4 text-2xl leading-tight font-bold tracking-[-0.035em] uppercase sm:text-3xl">{project.title}</h3>
        <p className="max-w-lg text-sm leading-[1.85] text-[#605a51] sm:text-base">{project.description}</p>
        {(github || liveUrl) && (
          <div className="mt-5 flex w-fit flex-wrap gap-7 border-b border-[#292a26]/40 pb-2 text-[10px] tracking-[0.12em] uppercase">
            {github && <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${project.title}`}>GitHub ↗</a>}
            {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live site for ${project.title}`}>Live Site ↗</a>}
          </div>
        )}
      </div>
      <div className={`min-w-0 ${index % 2 === 0 ? 'md:col-start-2 md:row-start-1' : 'md:col-start-1 md:row-start-1'}`}>
        <ProjectGallery project={project} />
      </div>
    </article>
  );
}
