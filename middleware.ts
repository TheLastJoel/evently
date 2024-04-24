import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
 

const isPublicRoute = createRouteMatcher([
    '/',
    '/events/:id',
    '/api/webhooks/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
]);


export default clerkMiddleware((auth, req) => {
    
    if(!isPublicRoute(req)) auth().protect()

},{debug: process.env.NODE_ENV === 'development'})
 
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
    '/', // Run middleware on index page
    '/(api|trpc)(.*)'], // Run middleware on API routes
};
