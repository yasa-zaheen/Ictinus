// Clerk
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/site",
  "/api/uploadthing",
  "/agency/sign-in(.*)", // Enabling all catch-ons to be public
  "/agency/sign-up(.*)", // Enabling all catch-ons to be public
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
