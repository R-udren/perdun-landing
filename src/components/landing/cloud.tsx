import { CloudUpload, Moon, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { fadePop, revealOnce, stagger } from "./motion";

const POINTS = [
	{
		icon: CloudUpload,
		title: "Uploads queue themselves",
		body: "After a tracked session ends, changed worlds upload in the background and interrupted uploads retry.",
	},
	{
		icon: Moon,
		title: "The window can close",
		body: "A background process keeps the queue moving after the launcher is shut.",
	},
	{
		icon: Share2,
		title: "Sharing stays clean",
		body: "Publish a profile or modpack configuration and friends import their own independent copy. Worlds and credentials are never part of it.",
	},
];

export function Cloud() {
	return (
		<section
			id="cloud"
			className="mx-auto max-w-[1280px] scroll-mt-24 px-4 py-24 sm:px-6"
		>
			<div className="relative overflow-hidden rounded-[28px] border border-white/[0.07]">
				{/* The End: your worlds live somewhere else until you call them down (credits in footer). */}
				<img
					src="/img/the-end.png"
					alt=""
					aria-hidden="true"
					width={1920}
					height={960}
					loading="lazy"
					className="absolute inset-0 h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-void/90 via-void/70 to-void/25" />
				<div className="absolute inset-0 bg-gradient-to-t from-void/50 to-transparent" />

				<div className="relative grid gap-12 px-6 py-16 sm:px-10 md:grid-cols-2 md:py-24">
					<motion.div
						variants={fadePop}
						initial="hidden"
						whileInView="show"
						viewport={revealOnce}
					>
						<div>
							<p className="font-display text-sm font-extrabold uppercase tracking-[0.22em] text-neon">
								Perdun Cloud
							</p>
							<h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-snow sm:text-5xl">
								Your worlds follow you
							</h2>
							<p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
								Perdun Cloud holds your saved worlds as private archives. Upload
								from one computer, pull them into a compatible profile on
								another, without overwriting what is already there. Storage
								usage sits right in your account.
							</p>
						</div>
					</motion.div>

					<motion.div
						variants={stagger}
						initial="hidden"
						whileInView="show"
						viewport={revealOnce}
						className="space-y-4"
					>
						{POINTS.map((point) => (
							<motion.div key={point.title} variants={fadePop}>
								<div className="rounded-2xl border border-white/[0.08] bg-void/85 p-5 transition-colors duration-300 hover:border-neon/40">
									<div className="flex items-center gap-3">
										<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-panel">
											<point.icon
												size={18}
												className="text-neon"
												aria-hidden="true"
											/>
										</div>
										<h3 className="font-display text-base font-extrabold tracking-tight text-snow">
											{point.title}
										</h3>
									</div>
									<p className="mt-3 text-sm leading-relaxed text-mist">
										{point.body}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
