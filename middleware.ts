import { NextResponse } from "next/server";

export function middleware(request: Request) {
	const url = new URL(request.url);

	if (url.pathname === "/contact") {
		const response = NextResponse.next();
		response.headers.set("x-hide-footer", "true");
		return response;
	}
	return NextResponse.next();
}

export const config = {
	matcher: ["/contact"]
};
