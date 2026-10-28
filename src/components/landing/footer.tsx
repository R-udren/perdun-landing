import { PerdunMark } from "./nav";

const SITE_LINKS = [
	{ label: "Features", href: "#features" },
	{ label: "Loaders", href: "#loaders" },
	{ label: "Cloud", href: "#cloud" },
	{ label: "Download", href: "#download" },
];

const ECOSYSTEM_LINKS = [
	{ label: "Modrinth", href: "https://modrinth.com" },
	{ label: "Fabric", href: "https://fabricmc.net" },
	{ label: "Minecraft Forge", href: "https://files.minecraftforge.net" },
	{ label: "NeoForge", href: "https://neoforged.net" },
	{ label: "Eclipse Adoptium", href: "https://adoptium.net" },
];

export function Footer() {
	return (
		<footer className="border-t border-white/[0.06] bg-coal">
			<div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto_auto]">
				<div>
					<p className="flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight text-snow">
						<PerdunMark className="h-7 w-7" />
						PERDUN
					</p>
					<p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
						Every way you play. One launcher.
					</p>
				</div>

				<nav aria-label="Site">
					<p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-snow">
						Site
					</p>
					<ul className="mt-3 space-y-2">
						{SITE_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="text-sm text-mist transition-colors hover:text-neon"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<nav aria-label="Ecosystem">
					<p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-snow">
						Ecosystem
					</p>
					<ul className="mt-3 space-y-2">
						{ECOSYSTEM_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									target="_blank"
									rel="noreferrer"
									className="text-sm text-mist transition-colors hover:text-neon"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>

			<div className="border-t border-white/[0.06]">
				<div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-4 py-6 text-xs text-mist/80 sm:px-6 md:flex-row md:items-center md:justify-between">
					<p>Not affiliated with Mojang or Microsoft.</p>
					<p>
						Game imagery: hero art &copy; Mojang (Minecraft Dungeons), block
						icon rendered from game textures; photos by Xbox M&eacute;xico and
						LorenzoF06 via Wikimedia Commons (CC BY / CC BY-SA).{" "}
						<span className="whitespace-nowrap">&copy; 2026 Perdun.</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
