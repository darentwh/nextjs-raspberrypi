import { unstable_noStore as noStore } from 'next/cache';
async function fastApiRequest(path) {
    noStore();
    const response = await fetch(path);
    const data = await response.json();
    return data;
}
export default async function Home() {
    var response = await fastApiRequest('http://raspberrypi.local:3000/api/catphrase');
    //const response2 = await fastApiRequest('http://raspberrypi.local:3000/api/catphrase');
    return (
        <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
            <p>
                {JSON.stringify(response)}
            </p>
        </main>
    );
  }