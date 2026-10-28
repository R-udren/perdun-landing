import { useEffect, useState } from "react";

export type Platform = "windows" | "linux";

export const PLATFORM_LABELS: Record<Platform, string> = {
	windows: "Windows",
	linux: "Linux",
};

/** Best-effort visitor OS for CTA labels. Defaults to Windows (the primary target) on the server. */
export function usePlatform(): Platform {
	const [platform, setPlatform] = useState<Platform>("windows");

	useEffect(() => {
		const ua = navigator.userAgent;
		if (/Linux|X11/i.test(ua) && !/Android/i.test(ua)) setPlatform("linux");
	}, []);

	return platform;
}
