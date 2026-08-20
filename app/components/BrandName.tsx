import React from "react";

export function BrandName({
	name,
	className,
}: {
	name: string;
	className?: string;
}) {
	if (!name) return null;

	const regex =
		/(AL-SADIQ BRICKS KILN)(?:\s*(?:⁴ˢᵗᵃʳˢ|⁴ˢᵀᴬᴿˢ|\(4\s*Stars\)|4STARS))?/i;

	if (regex.test(name)) {
		const match = name.match(regex);
		if (match) {
			const fullMatch = match[0];
			const index = match.index ?? 0;
			const before = name.substring(0, index);
			const after = name.substring(index + fullMatch.length);

			return (
				<span className={className}>
					{before}
					AL-SADIQ BRICKS KILN
					<sup className="ml-1 -top-[0.45em] text-[0.55em] font-extrabold uppercase tracking-wider text-inherit select-none align-super inline-block">
						4STARS
					</sup>
					{after}
				</span>
			);
		}
	}

	return <span className={className}>{name}</span>;
}

export default BrandName;
