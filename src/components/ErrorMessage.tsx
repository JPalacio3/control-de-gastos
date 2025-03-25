import { PropsWithChildren } from "react";

export default function ErrorMessage({ children }: PropsWithChildren) {
	return (
		<p
			className="p-2 text-white font-bold text-sm animate-bounce
		text-center backdrop-blur-0 bg-red-600 rounded-lg "
		>
			{children}
		</p>
	);
}
