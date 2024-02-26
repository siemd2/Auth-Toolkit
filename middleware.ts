import authConfig from "./auth.config";

import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    console.log("ROUTE: ", req.nextUrl.pathname);
    console.log("IS LOGGEDIN: ", isLoggedIn);
})

// All routes in the below matcher will not invoke the middleware,
// Everything else will invoke middleware and need to be authenticated
export const config = {
    // this regular expression from Clerk is much better than the default next auth one
    // this will protect the entire app by default, and then we can open up specific routes that we want to be public
    // this is better because there is usually more private routes than public ones
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}