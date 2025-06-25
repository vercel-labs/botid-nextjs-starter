## BotID Starter Repo

This is a minimal Next.js app that uses Vercel BotID to protect a route from advanced bots.

## Getting Started

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser notice:

- `layout.tsx` containing `<BotIdClient>` protecting `/api/generate
- `api/generate/routs.ts` calling `checkBotId` and using the result to block the user
- `generate-button.tsx` fetching the protected route and showing the result on the page

## Using BotID

For up-to-date information, please check out the [BotID documentation](https://vercel.com/docs/botid).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
