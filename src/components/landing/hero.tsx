import { Download as DownloadIcon, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { fadePop, markPop, stagger } from "./motion";
import { PerdunMark } from "./nav";
import { PLATFORM_LABELS, usePlatform } from "./platform";

// Deterministic decorative snow over the hero art (hidden under reduced motion).
const FLAKES = [
	{ left: "6%", size: 3, dur: 17, delay: -3, x: "3vw", o: 0.45 },
	{ left: "13%", size: 2, dur: 21, delay: -11, x: "-2vw", o: 0.35 },
	{ left: "21%", size: 4, dur: 15, delay: -7, x: "4vw", o: 0.55 },
	{ left: "29%", size: 2, dur: 23, delay: -15, x: "-3vw", o: 0.3 },
	{ left: "36%", size: 3, dur: 19, delay: -1, x: "2vw", o: 0.5 },
	{ left: "44%", size: 2, dur: 24, delay: -19, x: "-4vw", o: 0.3 },
	{ left: "52%", size: 3, dur: 16, delay: -9, x: "3vw", o: 0.5 },
	{ left: "60%", size: 4, dur: 20, delay: -13, x: "-2vw", o: 0.4 },
	{ left: "67%", size: 2, dur: 22, delay: -5, x: "4vw", o: 0.35 },
	{ left: "74%", size: 3, dur: 18, delay: -17, x: "-3vw", o: 0.5 },
	{ left: "81%", size: 2, dur: 25, delay: -8, x: "2vw", o: 0.3 },
	{ left: "88%", size: 4, dur: 16, delay: -14, x: "-4vw", o: 0.55 },
	{ left: "94%", size: 3, dur: 21, delay: -2, x: "3vw", o: 0.45 },
	{ left: "48%", size: 2, dur: 26, delay: -21, x: "-2vw", o: 0.25 },
];

export function Hero() {
	const platform = usePlatform();

	return (
		<section
			id="top"
			className="relative flex min-h-[100dvh] flex-col overflow-hidden"
		>
			{/* Key art: End City over the void (credits in footer). Clean linear scrims only. */}
			<div className="absolute inset-0">
				<img
					src="/img/end-city.webp"
					alt="An End City rising out of the black void in Minecraft"
					width={3840}
					height={2160}
					fetchPriority="high"
					className="hero-art h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-void/30" />
				<div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-void via-void/60 to-transparent" />
				<div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-void/90 to-transparent" />
				<div aria-hidden="true" className="absolute inset-0 overflow-hidden">
					{FLAKES.map((flake) => (
						<span
							key={`${flake.left}-${flake.size}`}
							className="flake"
							style={
								{
									left: flake.left,
									width: flake.size,
									height: flake.size,
									animationDuration: `${flake.dur}s`,
									animationDelay: `${flake.delay}s`,
									"--flake-x": flake.x,
									"--flake-o": flake.o,
								} as CSSProperties
							}
						/>
					))}
				</div>
			</div>

			<motion.div
				variants={stagger}
				initial="hidden"
				animate="show"
				className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col items-center justify-center px-4 pb-44 pt-36 text-center sm:px-6"
			>
				<motion.div variants={markPop} className="text-snow">
					<div className="hero-float">
						<PerdunMark className="h-24 w-24 drop-shadow-[0_8px_32px_rgba(0,0,0,0.6)] md:h-28 md:w-28" />
					</div>
				</motion.div>

				<motion.h1
					variants={fadePop}
					className="mt-6 font-display text-6xl font-extrabold tracking-tight text-snow drop-shadow-[0_6px_28px_rgba(0,0,0,0.65)] sm:text-7xl lg:text-8xl"
				>
					PERDUN
				</motion.h1>

				<motion.p
					variants={fadePop}
					className="mt-4 max-w-xl text-lg font-medium text-white/85 sm:text-xl"
				>
					Every way you play. One launcher.
				</motion.p>
				<motion.p
					variants={fadePop}
					className="mt-2 max-w-lg text-sm leading-relaxed text-white/75 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] sm:text-base"
				>
					Profiles, Modrinth mods, managed Java and cloud worlds behind a single
					download.
				</motion.p>

				<motion.div
					variants={fadePop}
					className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
				>
					<motion.a
						href="#download"
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						className="inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-neon px-9 py-4 font-display text-base font-extrabold uppercase tracking-wide text-moss transition-colors hover:bg-neon-soft sm:w-auto"
					>
						<DownloadIcon size={19} strokeWidth={2.5} aria-hidden="true" />
						Download for {PLATFORM_LABELS[platform]}
					</motion.a>
					<motion.a
						href="#features"
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						className="inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-white/[0.08] px-9 py-4 font-display text-base font-extrabold uppercase tracking-wide text-snow ring-1 ring-inset ring-white/[0.12] transition-colors hover:bg-white/[0.14] sm:w-auto"
					>
						<Sparkles size={18} aria-hidden="true" />
						See features
					</motion.a>
				</motion.div>
			</motion.div>
		</section>
	);
}
