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
    rest.get('https://jsonplaceholder.typicode.com/posts', (req: any, res: any, ctx: any) => {
        const { user } = req.params;

        if (user !== "error") {
            return res(
                ctx.status(200),
                ctx.set({ 'X-Header': 'Mocked value' }),
                ctx.json([
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "title1",
                        "body": "body1"
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "title2",
                        "body": "body2"
                    },
                ]),
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