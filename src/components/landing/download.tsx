import { motion } from "motion/react";
import { useState } from "react";
import { fadePop, revealOnce, stagger } from "./motion";
import { PLATFORM_LABELS, type Platform, usePlatform } from "./platform";

// TODO: set the real installer URLs once builds publish. While a value is null,
// its button reports honestly instead of pretending to download.
const DOWNLOAD_URLS: Record<Platform, string | null> = {
	windows: null,
	linux: null,
};

const PLATFORM_ICONS: Record<Platform, { src: string; iconClass: string }> = {
	windows: { src: "/icons/microsoft.svg", iconClass: "h-5 w-5" },
	linux: { src: "/icons/linux.svg", iconClass: "h-5 w-5" },
};

const ALL_PLATFORMS: Platform[] = ["windows", "linux"];

const PRIMARY_CLASS =
	"inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-neon px-12 py-5 font-display text-lg font-extrabold uppercase tracking-wide text-moss transition-colors hover:bg-neon-soft";
const SECONDARY_CLASS =
	"inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xl bg-white/[0.06] px-7 py-3.5 font-display text-sm font-extrabold uppercase tracking-wide text-snow ring-1 ring-inset ring-white/[0.12] transition-colors hover:bg-white/[0.1]";

function PlatformAction({
	os,
	primary,
	onMissing,
}: {
	os: Platform;
	primary: boolean;
	onMissing: (os: Platform) => void;
}) {
	const url = DOWNLOAD_URLS[os];
	const shared = {
		className: primary ? PRIMARY_CLASS : SECONDARY_CLASS,
	};
	const children = (
		<>
			<img
				src={PLATFORM_ICONS[os].src}
				alt=""
				className={PLATFORM_ICONS[os].iconClass}
			/>
			Download for {PLATFORM_LABELS[os]}
		</>
	);

	if (url) {
		return (
			<motion.a
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.97 }}
				href={url}
				{...shared}
			>
				{children}
			</motion.a>
		);
	}
	return (
		<motion.button
			type="button"
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.97 }}
			onClick={() => onMissing(os)}
			{...shared}
		>
			{children}
		</motion.button>
	);
}

export function Download() {
	const platform = usePlatform();
	const [pending, setPending] = useState<Platform | null>(null);

	return (
		<section
			id="download"
			className="mx-auto max-w-[1280px] scroll-mt-24 px-4 pb-24 sm:px-6"
		>
			<motion.div
				variants={fadePop}
				initial="hidden"
				whileInView="show"
				viewport={revealOnce}
				className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-panel px-6 py-20 text-center sm:px-10"
			>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_50%_70%_at_50%_0%,rgba(62,226,127,0.16),transparent_70%)]"
				/>
				<div className="relative mx-auto max-w-2xl">
					<h2 className="font-display text-5xl font-extrabold tracking-tight text-snow sm:text-6xl">
						Ready to play?
					</h2>
					<p className="mt-4 text-base leading-relaxed text-mist">
						Profiles, Modrinth, managed Java and Perdun Cloud. One install, all
						of it.
					</p>
				</div>

				<motion.div
					variants={stagger}
					initial="hidden"
					whileInView="show"
					viewport={revealOnce}
					className="relative mt-10 flex flex-col items-center gap-3"
				>
					<motion.div
						variants={fadePop}
						className="flex flex-col items-center gap-3"
					>
						<PlatformAction os={platform} primary onMissing={setPending} />
						<div className="mt-2 flex flex-wrap justify-center gap-3">
							{ALL_PLATFORMS.filter((os) => os !== platform).map((os) => (
								<PlatformAction
									key={os}
									os={os}
									primary={false}
									onMissing={setPending}
								/>
							))}
						</div>
					</motion.div>
				</motion.div>

				<div aria-live="polite" className="relative mx-auto mt-8 max-w-2xl">
					{pending && DOWNLOAD_URLS[pending] === null && (
						<p className="rounded-xl border border-white/[0.08] bg-coal px-4 py-3 text-sm text-mist">
							The {PLATFORM_LABELS[pending]} installer is not available yet.
							Check back soon.
						</p>
					)}
				</div>
			</motion.div>
		</section>
	);
}
