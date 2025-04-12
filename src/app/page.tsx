import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Hero Section - Using brand colors for psychological impact */}
        <div className="text-center space-y-6 max-w-[800px] mx-auto">
          <h1 className="font-mono tracking-tighter text-gradient-brand">
            Challenge The AI Status Quo
          </h1>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            We liberate Fortune 100 companies through radical honesty and evidence-based AI disruption. No corporate speak. No incremental changes. Pure revolutionary transformation.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="text-base bg-gradient-brand hover:opacity-90">
              Start Your Revolution
            </Button>
            <Button variant="outline" size="lg" className="text-base border-primary-600 text-primary-700 hover:bg-primary-50">
              View Case Studies
            </Button>
          </div>
        </div>

        {/* Core Principles Section - Using color psychology for impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <Card className="border-l-4 border-l-primary-500">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-primary-700">Radical Honesty</CardTitle>
              <CardDescription>Unfiltered insights that drive real change</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We deliver uncomfortable truths that conventional consultants won't touch. Because real transformation starts with radical honesty.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary-500">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-secondary-700">Disruptive Innovation</CardTitle>
              <CardDescription>Beyond optimization to revolution</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We don't just improve your AI systems—we completely reimagine them. Creating market shifts, not incremental gains.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent-500">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-accent-700">Evidence-Based Rebellion</CardTitle>
              <CardDescription>Data-driven disruption that works</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                Our revolutionary approaches are backed by solid data and psychological research. We're rebels with results.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Revolution Section - Using gradient for visual impact */}
        <div className="text-center space-y-8 py-16">
          <h2 className="font-mono tracking-tighter text-gradient-brand max-w-3xl mx-auto">
            Ready to Break Free from AI Conformity?
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Join the ranks of Fortune 100 companies who've dared to challenge the established order and revolutionize their industries.
          </p>
          <Button size="lg" className="text-base bg-gradient-innovation hover:opacity-90">
            Schedule Your Strategy Session
          </Button>
        </div>
      </main>
    </div>
  );
}
