import {
	Check,
	Clock3,
	DownloadCloud,
	RefreshCw,
	Search,
	SlidersHorizontal,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { fadePop, revealOnce, stagger } from "./motion";

// Illustrative mock UIs, same approach as the Modrinth app page: show the real
// panels with real assets. Mod icons are the real Modrinth project icons.
const PROFILE_ROWS = [
	{ name: "Winter survival", tag: "Vanilla · 1.21", dot: "#3ee27f" },
	{ name: "Modded pack", tag: "NeoForge · 1.21", dot: "#f59e0b" },
	{ name: "Creative lab", tag: "Fabric · 1.21", dot: "#e879f9" },
];

const MOD_ROWS = [
	{
		name: "Sodium",
		by: "jellysquid3",
		on: true,
		src: "/icons/mods/sodium.webp",
	},
	{
		name: "Iris Shaders",
		by: "coderbot",
		on: true,
		src: "/icons/mods/iris.webp",
	},
	{
		name: "Lithium",
		by: "jellysquid3",
		on: false,
		src: "/icons/mods/lithium.webp",
	},
];

function MockProfiles() {
	const [selected, setSelected] = useState(0);

	return (
		<div className="w-full rounded-xl border border-white/[0.06] bg-void/70 p-3">
			{PROFILE_ROWS.map((row, index) => (
				<button
					key={row.name}
					type="button"
					onClick={() => setSelected(index)}
					aria-pressed={selected === index}
					className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors not-last:mb-2 ${
						selected === index
							? "bg-neon/10 ring-1 ring-neon/60"
							: "bg-white/[0.04] hover:bg-white/[0.08]"
					}`}
				>
					<span
						className="h-2.5 w-2.5 shrink-0 rounded-full"
						style={{ backgroundColor: row.dot }}
					/>
					<span className="min-w-0 flex-1 truncate text-sm font-semibold text-white/90">
						{row.name}
					</span>
					<span className="shrink-0 whitespace-nowrap rounded-md bg-white/[0.06] px-2 py-0.5 text-[11px] font-medium text-white/55">
						{row.tag}
					</span>
				</button>
			))}
		</div>
	);
}

function MockMods() {
	const [enabled, setEnabled] = useState(() => MOD_ROWS.map((row) => row.on));

	return (
		<div className="w-full rounded-xl border border-white/[0.06] bg-void/70 p-3">
			<div className="mb-2 flex items-center gap-2 rounded-lg border border-white/[0.08] bg-void px-3 py-2 text-xs text-white/55">
				<Search size={13} aria-hidden="true" />
				Search Modrinth
			</div>
			{MOD_ROWS.map((row, index) => (
				<div key={row.name} className="flex items-center gap-3 px-1 py-2">
					<img
						src={row.src}
						alt=""
						width={32}
						height={32}
						loading="lazy"
						className="h-8 w-8 shrink-0 rounded-lg"
					/>
					<span className="min-w-0 flex-1 leading-tight">
						<span className="block truncate text-sm font-semibold text-white/90">
							{row.name}
						</span>
						<span className="block text-[11px] text-white/55">by {row.by}</span>
					</span>
					<button
						type="button"
						role="switch"
						aria-checked={enabled[index]}
						aria-label={`Enable ${row.name}`}
						onClick={() =>
							setEnabled((current) =>
								current.map((value, i) => (i === index ? !value : value)),
							)
						}
						className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
							enabled[index] ? "bg-neon" : "bg-white/[0.14]"
						}`}
					>
						<span
							className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-[left] ${
								enabled[index] ? "left-[18px]" : "left-0.5"
							}`}
						/>
					</button>
				</div>
			))}
			<p className="mt-1 px-1 text-[11px] text-white/55">
				Dependencies resolved automatically.
			</p>
		</div>
	);
}

function MockJava() {
	return (
		<div className="w-full space-y-2">
			<div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-void/70 px-3 py-3">
				<img src="/icons/adoptium-frost.svg" alt="" className="h-8 w-8" />
				<span className="flex-1 text-sm font-semibold text-white/90">
					Eclipse Temurin 21
				</span>
				<span className="rounded-md bg-neon/15 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-neon">
					Managed
				</span>
			</div>
			<p className="flex items-center gap-2 px-1 text-[11px] text-white/55">
				<Check size={13} className="text-neon" aria-hidden="true" />
				Checked against the game version every launch
			</p>
		</div>
	);
}

function MockPlaytime() {
	return (
		<div className="w-full rounded-xl border border-white/[0.06] bg-void/70 p-4">
			<p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
				Last session
			</p>
			<p className="mt-1 font-display text-2xl font-extrabold text-snow">
				2h 14m
			</p>
			<div className="mt-2 flex h-9 items-end gap-1.5" aria-hidden="true">
				{[35, 60, 45, 80, 55, 95, 70].map((height) => (
					<span
						key={height}
						className={`flex-1 rounded-sm ${height === 95 ? "bg-neon" : "bg-white/[0.12]"}`}
						style={{ height: `${height}%` }}
					/>
				))}
			</div>
		</div>
	);
}

function MockUpdates() {
	return (
		<div className="flex w-full items-center gap-3 rounded-xl border border-white/[0.06] bg-void/70 px-3 py-3">
			<img src="/icons/minecraft-grass.webp" alt="" className="h-8 w-8" />
			<span className="flex-1 text-sm font-semibold text-white/90">
				Perdun 0.6.0
			</span>
			<span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-neon">
				<span className="h-1.5 w-1.5 rounded-full bg-neon" />
				Up to date
			</span>
		</div>
	);
}

// Stable bento: explicit 6-column spans. Mock areas use min-heights sized to
// their content, so nothing overflows and titles align within each row.
const BENTO = [
	{
		key: "profiles",
		mock: <MockProfiles />,
		mockClass: "min-h-[236px]",
		title: "A profile for every way you play",
		body: "Keep vanilla and modded setups apart. Every profile carries its own game version and loader, with a name and color so you recognize it at a glance.",
		span: "lg:col-span-3",
	},
	{
		key: "mods",
		mock: <MockMods />,
		mockClass: "min-h-[236px]",
		title: "Modrinth, minus the hunt",
		body: "Search Modrinth inside the launcher, install a release that matches your loader, and dependencies come along. Modpacks land in their own fresh profile.",
		span: "lg:col-span-3",
	},
	{
		key: "java",
		mock: <MockJava />,
		mockClass: "min-h-[132px]",
		title: "Java, handled",
		body: "Perdun finds an installed runtime, checks it against the game version, and downloads a managed Eclipse Temurin runtime when nothing suitable is there.",
		span: "lg:col-span-2",
	},
	{
		key: "playtime",
		mock: <MockPlaytime />,
		mockClass: "min-h-[132px]",
		title: "Playtime, tracked",
		body: "Session time is recorded for your signed-in Perdun ID.",
		span: "lg:col-span-2",
	},
	{
		key: "updates",
		mock: <MockUpdates />,
		mockClass: "min-h-[132px] flex items-center",
		title: "Kept current",
		body: "Perdun checks for newer releases and installs signed updates matched to your operating system and architecture.",
		span: "lg:col-span-2",
	},
];

const TRIO = [
	{
		icon: SlidersHorizontal,
		title: "Launch preferences",
		body: "Memory, Java options and window resolution. Changes stay explicit with Save and Reset.",
	},
	{
		icon: Clock3,
		title: "Yours, in your language",
		body: "English and Russian out of the box, one Perdun ID for the launcher and the site.",
	},
	{
		icon: RefreshCw,
		title: "Crash reports, on your terms",
		body: "Reports you choose to send are kept for 30 days. Nothing leaves without you.",
	},
];

export function Features() {
	return (
		<section
			id="features"
			className="mx-auto max-w-[1280px] scroll-mt-24 px-4 py-24 sm:px-6"
		>
			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={revealOnce}
				className="mx-auto max-w-2xl text-center"
			>
				<motion.p
					variants={fadePop}
					className="font-display text-sm font-extrabold uppercase tracking-[0.22em] text-neon"
				>
					Features
				</motion.p>
				<motion.h2
					variants={fadePop}
					className="mt-3 font-display text-4xl font-extrabold tracking-tight text-snow sm:text-5xl"
				>
					Everything between you and the game
				</motion.h2>
				<motion.p
					variants={fadePop}
					className="mt-4 text-base leading-relaxed text-mist"
				>
					Install once. Profiles, mods, Java and updates handled for you.
				</motion.p>
			</motion.div>

			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={revealOnce}
				className="mt-14 grid gap-4 lg:grid-cols-6"
			>
				{BENTO.map((card) => (
					<motion.div key={card.key} variants={fadePop} className={card.span}>
						<div className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-panel p-6 transition-[border-color,box-shadow] duration-300 hover:border-white/[0.14] hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
							<div className={`${card.mockClass} flex items-center`}>
								{card.mock}
							</div>
							<h3 className="mt-5 font-display text-xl font-extrabold tracking-tight text-snow">
								{card.title}
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-mist">
								{card.body}
							</p>
						</div>
					</motion.div>
				))}
			</motion.div>

			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={revealOnce}
				className="mt-14 grid gap-8 border-t border-white/[0.06] pt-12 md:grid-cols-3"
			>
				{TRIO.map((item) => (
					<motion.div key={item.title} variants={fadePop}>
						<div className="text-center md:text-left">
							<div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-panel md:mx-0">
								<item.icon size={20} className="text-neon" aria-hidden="true" />
							</div>
							<h3 className="mt-4 font-display text-lg font-extrabold tracking-tight text-snow">
								{item.title}
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-mist">
								{item.body}
							</p>
						</div>
					</motion.div>
				))}
			</motion.div>

			<motion.div
				variants={fadePop}
				initial="hidden"
				whileInView="show"
				viewport={revealOnce}
				className="mt-14 flex items-center justify-center gap-2 text-sm text-mist"
			>
				<DownloadCloud size={17} className="text-neon" aria-hidden="true" />
				Download, verify and repair installations with one action.
			</motion.div>
		</section>
	);
}
