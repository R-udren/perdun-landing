import { MotionConfig } from "motion/react";
import { Cloud } from "#/components/landing/cloud";
import { Download } from "#/components/landing/download";
import { Features } from "#/components/landing/features";
import { Footer } from "#/components/landing/footer";
import { Hero } from "#/components/landing/hero";
import { Highlights } from "#/components/landing/highlights";
import { Loaders } from "#/components/landing/loaders";
import { Nav } from "#/components/landing/nav";

export default function App() {
	return (
		<MotionConfig reducedMotion="user">
			<div className="min-h-[100dvh] bg-void text-snow">
				<Nav />
				<main>
					<Hero />
					<Highlights />
					<Features />
					<Loaders />
					<Cloud />
					<Download />
				</main>
				<Footer />
			</div>
		</MotionConfig>
	);
}
