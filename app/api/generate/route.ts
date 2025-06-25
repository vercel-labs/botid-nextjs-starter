import { checkBotId } from "botid/server";
import { NextResponse } from "next/server";

const expensiveOperation = async () => {
  return new Promise((resolve) => {
    const randomNumber = Math.random() * 100;
    resolve(randomNumber);
  });
};

export async function POST(req: Request) {
  const { isBot } = await checkBotId();

  if (isBot) {
    return NextResponse.json(
      { error: "Bot is not allowed to access this endpoint" },
      { status: 401 }
    );
  }

  const result = await expensiveOperation();
  return NextResponse.json({ result });
}
