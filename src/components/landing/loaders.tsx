import { motion } from "motion/react";
import { fadePop, revealOnce, stagger } from "./motion";

const LOADERS = [
	{
		name: "Minecraft",
		note: "Vanilla releases",
		src: "/icons/minecraft-grass.webp",
		href: "https://www.minecraft.net",
	},
	{
		name: "Fabric",
		note: "Lightweight modding",
		src: "/icons/fabric.png",
		href: "https://fabricmc.net",
	},
	{
		name: "Minecraft Forge",
		note: "The classic loader",
		src: "/icons/forge.svg",
		href: "https://files.minecraftforge.net",
	},
	{
		name: "NeoForge",
		note: "Modern Forge fork",
		src: "/icons/neoforge.png",
		href: "https://neoforged.net",
	},
];

const PARTNERS = [
	{
		name: "Modrinth",
		role: "Mods and modpacks",
		body: "Search Modrinth from inside Perdun. Install mods with their dependencies, or drop a whole modpack into its own profile.",
		src: "/icons/modrinth-white.svg",
		href: "https://modrinth.com",
	},
	{
		name: "Eclipse Temurin",
		role: "Managed Java runtimes",
		body: "When no installed Java matches the game version, Perdun downloads a Temurin runtime that fits and keeps it maintained.",
		src: "/icons/adoptium-frost.svg",
		href: "https://adoptium.net",
	},
];

// Live snapshot from the Modrinth API (top modpacks by follows). Real icons,
// real download counts, linking to each project page.
const MODPACKS = [
	{
		title: "Fabulously Optimized",
		downloads: "19.4M",
		src: "/icons/modpacks/fabulously-optimized.webp",
		slug: "fabulously-optimized",
	},
	{
		title: "Cobblemon Official [Fabric]",
		downloads: "11.5M",
		src: "/icons/modpacks/cobblemon-fabric.png",
		slug: "cobblemon-fabric",
	},
	{
		title: "Vanilla Perfected",
		downloads: "2.7M",
		src: "/icons/modpacks/vanilla-perfected.webp",
		slug: "vanilla-perfected",
	},
	{
		title: "Aged",
		downloads: "1.5M",
		src: "/icons/modpacks/aged.png",
		slug: "aged",
	},
	{
		title: "Cobbleverse",
		downloads: "7.3M",
		src: "/icons/modpacks/cobbleverse.png",
		slug: "cobbleverse",
	},
	{
		title: "Fresh & Smooth",
		downloads: "1.6M",
		src: "/icons/modpacks/fresh-smooth.webp",
		slug: "fresh-smooth",
	},
];

/** Mod loaders are not the same thing as ecosystem partners. Two sections. */
export function Loaders() {
	return (
		<div className="mx-auto max-w-[1280px] px-4 sm:px-6">
			<section id="loaders" className="scroll-mt-24">
				<motion.div
					variants={stagger}
					initial="hidden"
					whileInView="show"
					viewport={revealOnce}
					className="rounded-[28px] border border-white/[0.07] bg-panel px-6 py-12 sm:px-10"
				>
					<motion.h2
						variants={fadePop}
						className="text-center font-display text-sm font-extrabold uppercase tracking-[0.24em] text-mist"
					>
						Mod loaders
					</motion.h2>
					<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{LOADERS.map((loader) => (
							<motion.a
								key={loader.name}
								variants={fadePop}
								href={loader.href}
								target="_blank"
								rel="noreferrer"
								className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-coal p-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-neon/40 hover:bg-void"
							>
								<img
									src={loader.src}
									alt=""
									className="h-14 w-14 shrink-0 object-contain"
								/>
								<span className="min-w-0">
									<span className="block truncate font-display text-base font-extrabold text-snow transition-colors duration-300 group-hover:text-neon">
										{loader.name}
									</span>
									<span className="mt-0.5 block text-xs text-mist">
										{loader.note}
									</span>
								</span>
							</motion.a>
						))}
					</div>
				</motion.div>
			</section>

			<section id="ecosystem" className="mt-4 scroll-mt-24">
				<motion.div
					variants={stagger}
					initial="hidden"
					whileInView="show"
					viewport={revealOnce}
					className="grid gap-4 md:grid-cols-2"
				>
					{PARTNERS.map((partner) => (
						<motion.a
							key={partner.name}
							variants={fadePop}
							href={partner.href}
							target="_blank"
							rel="noreferrer"
							className="flex h-full items-start gap-5 rounded-[28px] border border-white/[0.07] bg-panel p-7 transition-[border-color,box-shadow] duration-300 hover:border-neon/40"
						>
							<img
								src={partner.src}
								alt=""
								className="h-12 w-12 shrink-0 object-contain"
							/>
							<span className="min-w-0">
								<span className="block font-display text-xl font-extrabold text-snow">
									{partner.name}
								</span>
								<span className="mt-0.5 block text-xs font-semibold uppercase tracking-[0.16em] text-neon">
									{partner.role}
								</span>
								<span className="mt-3 block text-sm leading-relaxed text-mist">
									{partner.body}
								</span>
							</span>
						</motion.a>
					))}
				</motion.div>
			</section>

			<section className="mt-4">
				<motion.div
					variants={stagger}
					initial="hidden"
					whileInView="show"
					viewport={revealOnce}
					className="rounded-[28px] border border-white/[0.07] bg-panel px-6 py-10 sm:px-10"
				>
					<motion.h2
						variants={fadePop}
						className="text-center font-display text-sm font-extrabold uppercase tracking-[0.24em] text-mist"
					>
						Popular modpacks on Modrinth
					</motion.h2>
					<div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
						{MODPACKS.map((modpack) => (
							<motion.a
								key={modpack.slug}
								variants={fadePop}
								href={`https://modrinth.com/modpack/${modpack.slug}`}
								target="_blank"
								rel="noreferrer"
								className="group flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-coal p-4 text-center transition-[border-color,box-shadow] duration-300 hover:border-neon/40"
							>
								<img
									src={modpack.src}
									alt=""
									width={56}
									height={56}
									loading="lazy"
									className="h-14 w-14 rounded-xl object-cover"
								/>
								<span className="line-clamp-2 text-[11px] font-bold leading-tight text-snow transition-colors duration-300 group-hover:text-neon">
									{modpack.title}
								</span>
								<span className="text-[10px] font-medium uppercase tracking-wide text-mist">
									{modpack.downloads} downloads
								</span>
							</motion.a>
						))}
					</div>
				</motion.div>
			</section>
		</div>
	);
}
