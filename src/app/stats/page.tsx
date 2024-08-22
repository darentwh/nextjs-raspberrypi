// "use client"; // This is a client component 👈🏽
import { getSystemDetails } from "@/lib/system";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import NavigationButton from '@/components/ui/button/button';
export default async function Home() {
    const systemInfo2 = await getSystemDetails();
    return (
        <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Raspberry Pi</h1>
        <NavigationButton destination="/stats" label="refresh" />
        <Card className="w-full max-w-md">
            <CardHeader>
            <CardTitle>System Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <div className="space-y-2">
                {[
                ["Hostname", systemInfo2.os.hostname()],
                ["Platform", systemInfo2.os.platform()],
                ["Architecture", systemInfo2.os.arch()],
                ["CPU Temperature", `${systemInfo2.cpuTemp.toFixed(1)}°C`],
                ].map(([label, value]) => (
                <div key={label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{label}:</span>
                    <span className="text-foreground font-medium">{value}</span>
                </div>
                ))}
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">CPU Usage</h3>
                {systemInfo2.cpuUsage.map((usage, index) => (
                <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Core {index}</span>
                    <span>{usage}%</span>
                    </div>
                    <Progress value={parseFloat(usage)} className="h-2" />
                </div>
                ))}
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Memory Usage</h3>
                <div className="flex justify-between text-sm text-muted-foreground">
                <span>Used</span>
                <span>{systemInfo2.memoryUsage.used.toFixed(2)} / {systemInfo2.memoryUsage.total.toFixed(2)} GB</span>
                </div>
                <Progress 
                value={(systemInfo2.memoryUsage.used / systemInfo2.memoryUsage.total) * 100} 
                className="h-2" 
                />
            </div>
            </CardContent>
        </Card>
        </main>
    );
}