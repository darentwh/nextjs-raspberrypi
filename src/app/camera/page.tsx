export default async function Home() {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        {/* <img
          src="/api/image"
          alt="Raspberry Pi"
          className="w-2/3"
        /> */}
        <img src="/api/mjpeg" />
      </main>
    );
}  