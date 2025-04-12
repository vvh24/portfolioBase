import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <main className="container mx-auto space-y-12 pt-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to My Project
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A modern web application built with Next.js, Tailwind CSS, and shadcn/ui components.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <Card>
            <CardHeader>
              <CardTitle>Modern Design</CardTitle>
              <CardDescription>Built with the latest web technologies</CardDescription>
            </CardHeader>
            <CardContent>
              Using shadcn/ui components for a consistent and beautiful design system.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Responsive</CardTitle>
              <CardDescription>Looks great on all devices</CardDescription>
            </CardHeader>
            <CardContent>
              Fully responsive layout that adapts to any screen size.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customizable</CardTitle>
              <CardDescription>Easy to modify and extend</CardDescription>
            </CardHeader>
            <CardContent>
              Built with customization in mind, easily adapt to your needs.
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-4">
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
