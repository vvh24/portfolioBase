import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Hero Section - Everyman Brand */}
        <div className="text-center space-y-6 max-w-[800px] mx-auto">
          <h1 className="text-gradient-brand">
            AI Solutions for Everyone
          </h1>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            We make AI approachable, practical, and accessible—helping people and organizations of all backgrounds solve real problems with confidence and clarity.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="text-base bg-gradient-brand hover:opacity-90">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-base border-primary-600 text-primary-700 hover:bg-primary-50">
              See How We Can Help
            </Button>
          </div>
        </div>

        {/* Core Principles Section - Everyman Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <Card className="border-l-4 border-l-primary-500">
            <CardHeader>
              <CardTitle className="text-primary-700">Honest Guidance</CardTitle>
              <CardDescription>Clear advice you can trust</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We believe in open, honest communication—so you always know where you stand and how to move forward.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary-500">
            <CardHeader>
              <CardTitle className="text-secondary-700">Practical Solutions</CardTitle>
              <CardDescription>Real results for real people</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                Our team focuses on what works for you—delivering solutions that are easy to understand, implement, and maintain.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent-500">
            <CardHeader>
              <CardTitle className="text-accent-700">Inclusive Support</CardTitle>
              <CardDescription>Here for everyone, every step</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We’re committed to making technology accessible and helpful for all—no matter your background or experience.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Artistic Divider */}
        <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full my-8"></div>

        {/* Process Section */}
        <div className="text-center space-y-8 py-16">
          <h2 className="text-gradient-brand max-w-3xl mx-auto font-heading">
            Our Creative Process
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto font-body">
            From concept to creation, we bring imagination and craftsmanship to every project. Explore our unique approach to design and innovation.
          </p>
          <Button size="lg" className="text-base bg-gradient-innovation hover:opacity-90">
            Learn More
          </Button>
        </div>

        {/* Invitation Section - Friendly Call to Action */}
        <div className="text-center space-y-8 py-16">
          <h2 className="text-gradient-brand max-w-3xl mx-auto">
            Ready to see what approachable AI can do for you?
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Let’s work together to find practical, effective solutions that fit your needs. Everyone’s welcome.
          </p>
          <Button size="lg" className="text-base bg-gradient-innovation hover:opacity-90">
            Connect With Us
          </Button>
        </div>
      </main>
    </div>
  );
}
