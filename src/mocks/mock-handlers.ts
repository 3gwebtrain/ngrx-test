export const createMockHandlers = (rest: any) => [
    rest.get('https://api.github.com/users/:user', (req: any, res: any, ctx: any) => {
        const { user } = req.params;

        if (user !== "error") {
            return res(
                ctx.status(200),
                ctx.set({ 'X-Header': 'Mocked value' }),
                ctx.json({
                    name: `mocked-${user}`,
                    bio: 'mocked-bio',
                }),
            )
        };

        if (user === "error") {
            return res(
                // Send a valid HTTP status code
                ctx.status(403),
                // And a response body, if necessary
                ctx.json({
                    errorMessage: `User not found`,
                }),
            )
        }

    }),
]