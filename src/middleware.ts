// Next
import { NextResponse } from "next/server";

// Clerk
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, request) => {
  const url = request.nextUrl;
  const searchParams = url.searchParams.toString();
  const headers = request.headers;

  const customSubDomain = headers
    .get("host")
    ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
    .filter(Boolean)[0]; // Extracting the sub-domain
  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  // If there is a custom sub domain then rewrite the URL to that sub domain
  if (customSubDomain !== undefined) {
    console.log("Execute this part.");
    return NextResponse.rewrite(
      new URL(`/${customSubDomain}${pathWithSearchParams}`, request.url)
    );
  }

  // If /sign-in or /sign-up redirect to /agency/sign-in
  if (url.pathname === "/sign-in" || url.pathname === "/sign-up") {
    return NextResponse.redirect(new URL("agency/sign-in", request.url));
  }

  // If / then rewrite to /site
  if (
    url.pathname === "/" ||
    (url.pathname === "site" && url.hostname === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL("/site", request.url));
  }

  // If /agency or /subaccount rewrite the URL to and request data from path supplied
  if (
    url.pathname.startsWith("/agency") ||
    url.pathname.startsWith("/subaccount")
  ) {
    return NextResponse.rewrite(
      new URL(`${pathWithSearchParams}`, request.url)
    );
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
