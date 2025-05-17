import { getHelloMessage, getHelloMessage2 } from "@/lib/api";

export default async function HomePage() {
  const data = await getHelloMessage();
  const data1 = await getHelloMessage2();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Next.js</h1>
      <p className="mt-4">Message from Laravel:</p>
      <pre className="">{data.message}</pre>
      <pre className="">{data1.message1}</pre>
    </main>
  );
}
