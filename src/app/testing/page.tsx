async function fastApiRequest(path) {
    const response = await fetch(path);
    const data = await response.json();
    return data;
}
export default async function Home() {
    const response = await fastApiRequest('http://raspberrypi.local:3000/api/hello');
    //const response2 = await fastApiRequest('http://raspberrypi.local:3000/api/catphrase');
    return (
        <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
            <p>
                {JSON.stringify(response)}
            </p>
        </main>
    );
  }