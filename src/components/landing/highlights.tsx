import { CloudUpload } from "lucide-react";
import { motion } from "motion/react";
import { fadePop, revealOnce, stagger } from "./motion";
import { PerdunMark } from "./nav";

// Real assets only: brand mark, real loader logos, real Modrinth icons, OS icons.
const OS_ICONS = [
	{ src: "/icons/microsoft.svg", alt: "Windows" },
	{ src: "/icons/linux.svg", alt: "Linux" },
];

const LOADER_ICONS = [
	{ src: "/icons/minecraft-grass.webp", alt: "Minecraft" },
	{ src: "/icons/fabric.png", alt: "Fabric" },
	{ src: "/icons/forge.svg", alt: "Minecraft Forge" },
	{ src: "/icons/neoforge.png", alt: "NeoForge" },
];

const MOD_ICONS = [
	{ src: "/icons/mods/sodium.webp", alt: "Sodium" },
	{ src: "/icons/mods/iris.webp", alt: "Iris Shaders" },
	{ src: "/icons/mods/lithium.webp", alt: "Lithium" },
];

const CARDS = [
	{
		key: "single",
		eyebrow: "One download",
		title: ["Single", "install"],
		href: "#download",
		visual: (
			<>
				<PerdunMark className="h-16 w-16 text-snow" />
				<div className="mt-4 flex items-center justify-center gap-3 opacity-70">
					{OS_ICONS.map((os) => (
						<img
							key={os.alt}
							src={os.src}
							alt=""
							className="h-5 w-5 object-contain"
						/>
					))}
				</div>
			</>
		),
	},
	{
		key: "loaders",
		eyebrow: "Vanilla, Fabric, Forge, NeoForge",
		title: ["Every", "loader"],
		href: "#loaders",
		visual: (
			<div className="flex items-center justify-center gap-3">
				{LOADER_ICONS.map((loader) => (
					<img
						key={loader.alt}
						src={loader.src}
						alt=""
						className="h-14 w-14 rounded-xl border border-white/10 bg-void object-contain p-1.5"
					/>
				))}
			</div>
		),
	},
	{
		key: "mods",
		eyebrow: "Modrinth built in",
		title: ["Mods in", "clicks"],
		href: "#features",
		visual: (
			<div className="flex -space-x-3">
				{MOD_ICONS.map((mod) => (
					<img
						key={mod.alt}
						src={mod.src}
						alt=""
						width={56}
						height={56}
						loading="lazy"
						className="h-14 w-14 rounded-xl border border-white/10 bg-void object-cover"
					/>
				))}
			</div>
		),
	},
	{
		key: "cloud",
		eyebrow: "Perdun Cloud",
		title: ["Worlds that", "travel"],
		href: "#cloud",
		visual: <CloudUpload className="h-16 w-16 text-snow" strokeWidth={1.5} />,
	},
];

export function Highlights() {
	return (
		<section className="relative z-10 mx-auto -mt-28 max-w-[1280px] px-4 pb-4 sm:px-6 md:-mt-32">
			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={revealOnce}
				className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
			>
				{CARDS.map((card) => (
					<motion.a
						key={card.key}
						variants={fadePop}
						href={card.href}
						className="group flex h-60 flex-col items-center justify-center gap-5 rounded-2xl border border-white/[0.07] bg-panel text-center transition-[border-color,box-shadow] duration-300 hover:border-neon/40 md:h-64"
					>
						<div className="flex flex-1 flex-col items-center justify-center">
							{card.visual}
						</div>
						<div className="px-4 pb-5">
							<p className="font-display text-[11px] font-extrabold uppercase tracking-[0.22em] text-mist">
								{card.eyebrow}
							</p>
							<p className="mt-1.5 font-display text-2xl font-extrabold uppercase leading-[1.02] tracking-tight text-snow md:text-3xl">
								{card.title[0]}
								<br />
								{card.title[1]}
							</p>
						</div>
					</motion.a>
				))}
			</motion.div>
		</section>
	);
}
