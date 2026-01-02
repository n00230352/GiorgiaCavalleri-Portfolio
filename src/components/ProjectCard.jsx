import React from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

// Contract:
// props.project: {
//   slug, title, description, screenshots[{url,caption}], url, github, date, tags[]
// }
// Renders a card with screenshot, title, description, tags, and action links.

export function ProjectCard({ project }) {
	const {
		title,
		description,
		screenshots = [],
		url,
		github,
		tags = [],
		date,
	} = project;
	const screenshot = screenshots[0];
	const year = date ? /(\d{4})/.exec(String(date))?.[0] || String(date) : null;
	// show full description on the card (no truncation)
	const truncate = (str) => str;

	const isVideoFile = (u) => typeof u === "string" && /\.(mp4|webm|ogg)(?:\?.*)?$/i.test(u);
	const isYouTube = (u) => typeof u === "string" && /(?:youtube\.com|youtu\.be)/i.test(u);
	const isVimeo = (u) => typeof u === "string" && /vimeo\.com/.test(u);

	const toYouTubeEmbed = (u) => {
		if (!u) return u;
		const vid = (u.match(/[?&]v=([A-Za-z0-9_-]{6,})/) || u.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/))?.[1];
		return vid ? `https://www.youtube.com/embed/${vid}` : u;
	};

	const renderMedia = (shot, className = "h-full w-full object-cover") => {
		if (!shot || !shot.url) return null;
		const raw = shot.url;
		const src = encodeURI(raw);

		if (isVideoFile(raw)) {
			return (
				<video controls preload="metadata" className={className} playsInline>
					<source src={src} />
					Your browser does not support the video tag.
				</video>
			);
		}

		if (isYouTube(raw)) {
			const embed = toYouTubeEmbed(raw);
			return (
				<iframe
					src={embed}
					title={shot.caption || title}
					className={className}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			);
		}

		if (isVimeo(raw)) {
			const id = raw.split('/').pop();
			const embed = raw.includes('player.vimeo') ? raw : `https://player.vimeo.com/video/${id}`;
			return (
				<iframe src={embed} title={shot.caption || title} className={className} frameBorder="0" allowFullScreen />
			);
		}

		// fallback to image
		return (
			// eslint-disable-next-line @next/next/no-img-element
			<img src={src} alt={shot.caption || `${title} screenshot`} loading="lazy" className={className} />
		);
	};

	return (
		<Card className="flex flex-col h-full overflow-hidden rounded-md shadow-sm hover:shadow-lg transition-shadow transform hover:-translate-y-1 p-0 mb-6">
			<div className="relative aspect-video w-full overflow-hidden rounded-t-md bg-muted">
				{screenshot?.url ? (
					<div className="h-full w-full transition-transform duration-300 hover:scale-105">
						{renderMedia(screenshot, "h-full w-full object-cover")}
					</div>
				) : (
					<div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-700">
						<div className="text-center">
							<div className="text-lg font-semibold">{title}</div>
							{year && <div className="text-sm mt-1">{year}</div>}
						</div>
					</div>
				)}
			</div>

			<CardHeader className="px-4 pt-3">
				<div className="flex items-start justify-between w-full">
					<CardTitle className="text-lg font-semibold">
						{url && url.trim() !== "" ? (
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								{title}
							</a>
						) : (
							title
						)}
					</CardTitle>
					{year && <div className="text-sm text-muted-foreground">{year}</div>}
				</div>
			</CardHeader>

			<CardContent className="px-4 pb-0 flex-1">
				{description && (
					<p className="text-sm text-muted-foreground mt-2">{description}</p>
				)}
			</CardContent>
			<CardFooter className="mt-auto flex gap-3 px-4 pt-2 pb-4">
				{url && url.trim() !== "" && (
					<Button asChild variant="ghost" size="sm">
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Open live site for ${title}`}
							className="text-sm font-medium"
						>
							Live Site
						</a>
					</Button>
				)}
				{/* GitHub link intentionally omitted from closed card; available inside dialog only */}

				<Dialog>
					<DialogTrigger asChild>
						<Button
							size="sm"
							variant="outline"
							className="cursor-pointer ml-auto"
						>
							View More
						</Button>
					</DialogTrigger>
					<DialogContent className="max-w-[95vw] sm:max-w-3xl lg:max-w-5xl p-0 overflow-hidden">
						<DialogHeader className="px-6 pt-6">
							<DialogTitle className="text-2xl md:text-3xl font-bold">
								{title}
							</DialogTitle>
							{date && (
								<div className="text-sm text-muted-foreground">{date}</div>
							)}
						</DialogHeader>
						<div className="px-6 pb-6">
							{screenshots?.length > 0 ? (
								<div className="relative">
									<Carousel className="w-full">
										<CarouselContent>
											{screenshots.map((shot, idx) => (
												<CarouselItem key={idx}>
													<div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
														{renderMedia(shot, "h-full w-full object-cover")}
													</div>
													{shot.caption && (
														<p className="mt-2 text-sm text-muted-foreground">
															{shot.caption}
														</p>
													)}
												</CarouselItem>
											))}
										</CarouselContent>
										{screenshots?.length > 1 && (
											<>
												<CarouselPrevious className="left-2" />
												<CarouselNext className="right-2" />
											</>
										)}
									</Carousel>
								</div>
							) : (
								<div className="aspect-video w-full rounded-md bg-muted flex items-center justify-center text-muted-foreground">
									No screenshots available
								</div>
							)}

							<div className="mt-4 text-sm text-muted-foreground">
								{description}
							</div>

							<DialogFooter className="mt-6 flex gap-3">
								{url && (
									<Button asChild>
										<a href={url} target="_blank" rel="noopener noreferrer">
											Live Site
										</a>
									</Button>
								)}
								{github && github.trim() !== "" && (
									<Button variant="secondary" asChild>
										<a href={github} target="_blank" rel="noopener noreferrer">
											GitHub
										</a>
									</Button>
								)}
								<DialogClose asChild>
									<Button variant="outline">Close</Button>
								</DialogClose>
							</DialogFooter>
						</div>
					</DialogContent>
				</Dialog>
			</CardFooter>
		</Card>
	);
}

export default ProjectCard;
