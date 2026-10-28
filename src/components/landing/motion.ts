import type { Variants } from "motion/react";

/** Bouncy spring pop used for scroll reveals. */
export const fadePop: Variants = {
	hidden: { opacity: 0, y: 28, scale: 0.97 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring", stiffness: 240, damping: 19, mass: 0.9 },
	},
};

/** Overshooting pop for the hero mark. */
export const markPop: Variants = {
	hidden: { opacity: 0, scale: 0.4, y: 26 },
	show: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { type: "spring", stiffness: 320, damping: 13 },
	},
};

export const stagger: Variants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

export const revealOnce = { once: true, amount: 0.25 } as const;
