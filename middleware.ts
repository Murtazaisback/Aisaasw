import { clerkMiddleware } from '@clerk/nextjs/server';

// Define your public routes
const publicRoutes = [
  '/',
  '/api/webhooks/clerk',
  '/api/webhooks/stripe',
];

// Create a regex pattern that matches all routes except the public ones
const excludePublicRoutesPattern = `^(${publicRoutes.join('|')})$`;

export default clerkMiddleware({
  // Middleware options here if needed
});

export const config = {
  matcher: [
    // Exclude public routes
    `!/${excludePublicRoutesPattern}`,
    "/((?!.+\\.[\\w]+$|_next).*)", // Matches all routes except file extensions and _next paths
    "/(api|trpc)(.*)"              // Matches API and trpc routes
  ],
};
