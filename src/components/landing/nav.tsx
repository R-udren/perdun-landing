import { Download as DownloadIcon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
	{ label: "Features", href: "#features" },
	{ label: "Loaders", href: "#loaders" },
	{ label: "Cloud", href: "#cloud" },
];

export function PerdunMark({ className = "" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 32 32"
			fill="none"
			aria-hidden="true"
			className={className}
		>
			<rect
				x="1.75"
				y="1.75"
				width="28.5"
				height="28.5"
				rx="8.5"
				stroke="currentColor"
				strokeWidth="2.5"
			/>
			<g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
				<path d="M16 8.5v15" />
				<path d="M9.5 12.25l13 7.5" />
				<path d="M22.5 12.25l-13 7.5" />
			</g>
		</svg>
	);
}

export function Nav() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Escape closes the mobile menu; focus can stay on the toggle.
	useEffect(() => {
		if (!open) return;
		const onKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
				scrolled || open
					? "nav-solid border-b border-white/[0.06]"
					: "border-b border-transparent bg-transparent"
			}`}
		>
			<nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-4 sm:px-6">
				<a
					href="#top"
					className="flex items-center gap-2.5 text-snow transition-opacity hover:opacity-85"
				>
					<PerdunMark className="h-8 w-8" />
					<span className="font-display text-xl font-extrabold tracking-tight">
						PERDUN
					</span>
				</a>

				<div className="hidden items-center gap-1 md:flex">
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="rounded-lg px-4 py-2 font-display text-[13px] font-bold uppercase tracking-wide text-white/75 transition-colors hover:bg-white/[0.06] hover:text-snow"
						>
							{link.label}
						</a>
					))}
					<a
						href="#download"
						className="ml-3 inline-flex items-center gap-2 rounded-xl bg-neon px-5 py-2.5 font-display text-[13px] font-extrabold uppercase tracking-wide text-moss transition-[background-color,box-shadow] hover:bg-neon-soft"
					>
						<DownloadIcon size={15} strokeWidth={2.5} aria-hidden="true" />
						Download
					</a>
				</div>

				<button
					type="button"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((value) => !value)}
					className="flex h-11 w-11 items-center justify-center rounded-lg text-snow transition-colors hover:bg-white/[0.06] md:hidden"
				>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</nav>

			{/* Kept mounted (hidden when closed) so aria-controls always points at a real node. */}
			<div id="mobile-menu" hidden={!open} className="md:hidden">
				<div className="mx-4 mb-4 rounded-2xl border border-white/[0.08] bg-coal/95 p-3 shadow-2xl">
					{[
						...NAV_LINKS,
						{ label: "Download", href: "#download", primary: true },
					].map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setOpen(false)}
							className={
								"primary" in link && link.primary
									? "mt-2 flex items-center justify-center gap-2 rounded-xl bg-neon px-4 py-3.5 font-display text-base font-extrabold uppercase tracking-wide text-moss"
									: "block rounded-xl px-4 py-3.5 font-display text-base font-bold uppercase tracking-wide text-white/80 transition-colors hover:bg-white/[0.06] hover:text-snow"
							}
						>
							{"primary" in link && link.primary && (
								<DownloadIcon size={17} strokeWidth={2.5} aria-hidden="true" />
							)}
							{link.label}
						</a>
					))}
				</div>
			</div>
		</header>
	);
}
