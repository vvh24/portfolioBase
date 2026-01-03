"use client";
import Link from "next/link";
import RoundedButton from "@/components/ui/rounded-button";
import { useState, useRef, useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource/lora"; // Import Lora font for headings
import "@fontsource/poppins/500.css"; // Import Poppins Medium for subheadings
import "@fontsource/inter"; // Import Inter for body text

export default function shopriteUXUIDesignPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [beforeIndex, setBeforeIndex] = useState(0);
  const [protoIndex, setProtoIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - (carousel?.offsetLeft || 0);
      scrollLeft = carousel?.scrollLeft || 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - (carousel?.offsetLeft || 0);
      const walk = (x - startX) * 2; // Adjust scroll speed
      if (carousel) carousel.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
      isDragging = false;
    };

    if (carousel) {
      carousel.addEventListener("mousedown", handleMouseDown);
      carousel.addEventListener("mousemove", handleMouseMove);
      carousel.addEventListener("mouseup", handleMouseUpOrLeave);
      carousel.addEventListener("mouseleave", handleMouseUpOrLeave);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("mousedown", handleMouseDown);
        carousel.removeEventListener("mousemove", handleMouseMove);
        carousel.removeEventListener("mouseup", handleMouseUpOrLeave);
        carousel.removeEventListener("mouseleave", handleMouseUpOrLeave);
      }
    };
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Carousel images (max 4 each)
  const beforeImages = [
    '/images/before1_shoprite.png',
    '/images/before2_shoprite.png',
    '/images/before3_shoprite.png',
    '/images/before4_shoprite.png',
  ].slice(0, 4);

  const protoImages = [
    '/images/proto1_shoprite.png',
    '/images/proto2_shoprite.png',
    '/images/proto3_shoprite.png',
    '/images/proto4_shoprite.png',
  ].slice(0, 4);

  const nextBefore = () => setBeforeIndex((i) => (i + 1) % beforeImages.length);
  const prevBefore = () => setBeforeIndex((i) => (i - 1 + beforeImages.length) % beforeImages.length);
  const nextProto = () => setProtoIndex((i) => (i + 1) % protoImages.length);
  const prevProto = () => setProtoIndex((i) => (i - 1 + protoImages.length) % protoImages.length);

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
  {/* Rely on global header in layout.tsx */}

      {/* Main Content */}
  <main className="container mx-auto px-4 py-24 space-y-16 font-inter">
        {/* HERO — Project Banner + Summary (required) */}
        <section id="hero" className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-6">
          {/* Left: Wide banner / visual placeholder */}
          <div>
            <figure className="rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <div className="w-full h-72 md:h-96 bg-gray-200 flex items-center justify-center">
               <img src="/images/shoprite_digitalcoupons.png" alt="Project banner" className="w-full h-auto object-cover" />
              </div>
            </figure>
          </div>

          {/* Right: Title, impact, quick facts */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900" style={{ fontFamily: 'Lora, serif' }}>Redesigning ShopRite’s Digital Coupon System</h1>

            {/* Quick facts chips */}
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Timeline: May — Dec 2025</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Methods: Interviews, Observation, Prototyping</span>
            </div>

            {/* Short bullets summarizing impact */}
            <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
              <li>Improve ease of loading digital coupons on kiosks.</li>
              <li>Reduce customer frustration and task abandonment.</li>
              <li>Support accessibility and confidence for all users.</li>
            </ul>

            {/* Optional quick actions */}
            <div className="flex gap-3 mt-4">
              <a href="#research" className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md text-sm no-underline">See Research</a>
              <a href="#features" className="inline-flex items-center px-4 py-2 border border-gray-200 text-gray-800 rounded-md text-sm no-underline">View Features</a>
            </div>
          </div>
        </section>

        {/* 2) CONTEXT + WHY IT MATTERS */}
        <section id="context" className="py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading text-gray-900 mb-4">Context & Why It Matters</h2>
              <p className="text-gray-700 mb-6">As a Customer Service Representative at ShopRite, I witness daily struggles with our digital coupon system that prevent customers from accessing savings they're entitled to. Digital coupons function as manufacturer discounts that stack with existing sales, providing significant value to cost-conscious shoppers. However, the current system creates barriers that often result in customer frustration and lost savings opportunities.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                    <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center mb-3" aria-hidden>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 20c0-2.21 3.582-4 6-4s6 1.79 6 4" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">Customer Impact</h3>
                    <p className="text-sm text-gray-600 mt-2">Missed savings due to confusion. Accessibility and language barriers limit participation.</p>
                </div>
                  <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                    <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center mb-3" aria-hidden>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a4 4 0 0 0-4-4h-1" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20H4v-2a4 4 0 0 1 4-4h1" />
                        <circle cx="9" cy="7" r="3" strokeWidth="1.5" stroke="currentColor" fill="none" />
                        <circle cx="17" cy="7" r="3" strokeWidth="1.5" stroke="currentColor" fill="none" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">Employee Impact</h3>
                    <p className="text-sm text-gray-600 mt-2">High volume of repeated assistance requests.</p>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                    <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center mb-3" aria-hidden>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18h18" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 13v6" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v10" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 5v14" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">Business Impact</h3>
                    <p className="text-sm text-gray-600 mt-2">Lower customer satisfaction and increased churn.</p>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3) THE PROBLEM */}
      <section id="problem" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-heading text-gray-900 mb-4">The Problem</h2>
              <p className="text-gray-700 mb-4">Customers frequently struggle to use ShopRite’s digital coupon system across both the in-store kiosks and mobile app, creating barriers to accessing savings they are entitled to.</p>

              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Small text and dense layouts make coupons difficult to read, especially for older customers.</li>
                <li>Unclear visual hierarchy in the app and kiosk screens reduces discoverability.</li>
                <li>Customers lack confirmation that coupons were successfully loaded.</li>
                <li>Language barriers, particularly for Spanish-speaking customers, prevent independent use.</li>
                <li>The process requires loading coupons one by one, leading to frustration and abandonment.</li>
              </ul>
            </div>
            {/* Visual: Current system screenshots placeholder */}
            <div>
              <figure className="rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                <img src="/images/theproblem_shoprite.png" alt="Project banner" className="w-full h-auto object-cover" />
              </figure>
            </div>
          </div>
        </section>

  {/* 4) GOALS */}
        <section id="goals" className="py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading text-gray-900 mb-4">Goals</h2>
            <p className="text-gray-700 mb-6">This project focused on improving usability, accessibility, and confidence in the digital coupon experience while reducing employee workload at the service desk.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                <h4 className="font-semibold">Customer Goal</h4>
                <p className="text-sm text-gray-600 mt-2">Enable customers to independently find, load, and trust digital coupons without stress or embarrassment.</p>
              </div>
              <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                <h4 className="font-semibold">Staff Goal</h4>
                <p className="text-sm text-gray-600 mt-2">Reduce repetitive coupon assistance requests and free up staff time during peak hours.</p>
              </div>
              <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                <h4 className="font-semibold">Accessibility Goal</h4>
                <p className="text-sm text-gray-600 mt-2">Improve readability, clarity, and language support to assist older adults and non-English speakers.</p>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-2">Success Metrics</h4>
            <ul className="list-disc pl-5 text-gray-700 mb-6">
              <li>Reduced customer reliance on staff for coupon loading.</li>
              <li>Faster task completion at kiosks.</li>
              <li>Increased confidence and successful coupon usage.</li>
            </ul>

            <figure className="rounded-lg overflow-hidden bg-white border border-white">
              <img src="/images/thegoal_shoprite.png" alt="Project banner" className="w-90 h-80 object-cover mx-auto" />
            </figure>
          </div>
        </section>

        {/* 5) RESEARCH OVERVIEW (Methods) */}
        <section id="research" className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading text-gray-900 mb-4">Research Overview</h2>
            <p className="text-gray-700 mb-6">A mixed-methods research approach was used to understand both customer behavior and employee operational challenges related to digital coupons.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                <h4 className="font-semibold">Employee interviews</h4>
                <p className="text-sm text-gray-600 mt-2">Structured interviews with ShopRite employees to identify recurring customer issues, operational strain, and system pain points.</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                <h4 className="font-semibold">Customer interviews</h4>
                <p className="text-sm text-gray-600 mt-2">Semi-structured interviews with customers across age groups and language backgrounds to understand firsthand experiences and frustrations.</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                <h4 className="font-semibold">Observation log</h4>
                <p className="text-sm text-gray-600 mt-2">A 4-day in-store observational study documenting real customer interactions at kiosks, including points of confusion, frustration, and staff intervention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6) PARTICIPANTS + DATA COLLECTED */}
        <section id="participants" className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading text-gray-900 mb-4">Participants & Data Collected</h2>
            <p className="text-gray-700 mb-4">A concise breakdown of who we spoke with and the data collected during the study.</p>

            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
              <li><strong>Total employee interviews:</strong> 7</li>
              <li><strong>Total customer interviews:</strong> 7</li>
              <li><strong>Observation study duration:</strong> 4 days</li>
              <li><strong>Total Observed Customer Interactions:</strong> 137 digital coupon assistance cases</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="rounded-lg overflow-hidden bg-gray-100 border border-gray-200 p-6">
                <img src="/images/datacollected_shoprite.png" alt="Project banner" />
                <figcaption className="text-sm text-gray-600 mt-3">Participants breakdown</figcaption>
              </figure>

              <figure className="rounded-lg overflow-hidden bg-gray-100 border border-gray-200 p-6">
                <img src="/images/agebreakdown_shoprite.png" alt="Project banner"/>
                <figcaption className="text-sm text-gray-600 mt-3">Observation interactions per day.<br></br> During the 4 days of observation must of my interactions involve customers from 40 and up. </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 7) KEY INSIGHTS — INTERVIEWS */}
        <section id="insights" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading text-gray-900 mb-4">Key Insights — Interviews</h2>
            <p className="text-gray-700 mb-6">Insights synthesized from customer and employee interviews highlighting the most critical usability, accessibility, and operational issues in the ShopRite digital coupon system.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                <h4 className="font-semibold">Information Overload</h4>
                <p className="text-sm text-gray-700 mt-2">Customers feel overwhelmed by the number of coupons and steps required to load them individually.</p>
                <p className="text-xs text-gray-500 mt-3"><strong>Evidence:</strong> Multiple customers and employees reported customers scrolling through long lists and abandoning the process before completion.</p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                <h4 className="font-semibold">Navigation Friction</h4>
                <p className="text-sm text-gray-700 mt-2">Customers struggle to locate specific coupons using search and filters.</p>
                <p className="text-xs text-gray-500 mt-3"><strong>Evidence:</strong> Employees consistently observed customers typing full product names that returned no results, leading to confusion and repeated help requests.</p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                <h4 className="font-semibold">Desire for Automation</h4>
                <p className="text-sm text-gray-700 mt-2">Both customers and employees expressed a strong desire for a “Load All” or auto-load feature.</p>
                <p className="text-xs text-gray-500 mt-3"><strong>Evidence:</strong> This was the most frequently mentioned improvement across interviews, with customers comparing ShopRite unfavorably to competitors.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                <h4 className="font-semibold">Accessibility Gaps</h4>
                <p className="text-sm text-gray-700 mt-2">Small text, low contrast, and unclear button states create barriers for older customers and those with low vision.</p>
                <p className="text-xs text-gray-500 mt-3"><strong>Evidence:</strong> Employees noted frequent complaints such as “I can’t see the button” and repeated tapping due to unclear confirmations.</p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                <h4 className="font-semibold">Language Barriers</h4>
                <p className="text-sm text-gray-700 mt-2">Spanish-speaking customers face significant difficulty due to the English-only interface.</p>
                <p className="text-xs text-gray-500 mt-3"><strong>Evidence:</strong> Employees reported that Spanish-speaking customers are more likely to ask for help or abandon the process entirely.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="rounded-lg overflow-hidden bg-gray-100 border border-gray-200 p-6">
                <img src="/images/insights_shoprite.png" alt="Project banner" className="w-full h-auto object-cover" />
                <figcaption className="text-sm text-gray-600 mt-3">Top requested improvements</figcaption>
              </figure>

              <div className="space-y-4">
                <figure className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                  <blockquote className="text-gray-700 italic">“I wish there was a button to load everything at once.”</blockquote>
                  <figcaption className="text-xs text-gray-500 mt-2">— Customer interview</figcaption>
                </figure>

                <figure className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                  <blockquote className="text-gray-700 italic">“We help someone with coupons every few minutes during busy times.”</blockquote>
                  <figcaption className="text-xs text-gray-500 mt-2">— Employee interview</figcaption>
                </figure>

                <figure className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                  <blockquote className="text-gray-700 italic">“People with language barriers have difficulty downloading digitals.”</blockquote>
                  <figcaption className="text-xs text-gray-500 mt-2">— Employee interview</figcaption>
                </figure>

                <figure className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                  <blockquote className="text-gray-700 italic">“I don’t know how to use these machines.”</blockquote>
                  <figcaption className="text-xs text-gray-500 mt-2">— Customer interview</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 8) KEY INSIGHTS — OBSERVATIONS */}
        <section id="observations" className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading text-gray-900 mb-4">Key Insights — Observations</h2>
            <p className="text-gray-700 mb-6">Analysis of in-store observation sessions reveals recurring behaviors and breakdowns during real customer interactions with the digital coupon kiosks.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-white border border-gray-100 rounded-lg">
                <h4 className="font-semibold">Who Struggled Most</h4>
                <p className="text-sm text-gray-700 mt-2">Older customers, less tech-comfortable users, and Spanish-speaking customers required the most assistance.</p>
                <p className="text-xs text-gray-500 mt-3"><strong>Evidence:</strong>The majority of observed interactions involved customers over 40 and customers who hesitated or asked for confirmation at each step.</p>
              </div>

              <div className="p-4 bg-white border border-gray-100 rounded-lg">
                <h4 className="font-semibold">Observed User Behaviors</h4>
                <p className="text-sm text-gray-700 mt-2">Customers frequently hesitated, mis-tapped buttons, and asked staff to confirm whether coupons were successfully loaded.</p>
                <p className="text-xs text-gray-500 mt-3"><strong>Evidence:</strong>Repeated tapping, verbal uncertainty (“Did it work?”), and reliance on staff were observed across multiple days.</p>
              </div>

              <div className="p-4 bg-white border border-gray-100 rounded-lg">
                <h4 className="font-semibold">Common Failure Points</h4>
                <p className="text-sm text-gray-700 mt-2">Search failures, unclear “Load to Card” confirmation, small touch targets, and login confusion.</p>
                <p className="text-xs text-gray-500 mt-3"><strong>Evidence:</strong>Many customers abandoned the task or stopped interacting once help arrived, indicating low confidence in the system.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <figure className="rounded-lg overflow-hidden bg-white border border-gray-100 p-6">
                <img src="/images/struggledmost_shoprite.png" alt="Project banner"/>
                <figcaption className="text-sm text-gray-600 mt-3">Issue frequency (observations)</figcaption>
              </figure>

              <figure className="rounded-lg overflow-hidden bg-white border border-gray-100 p-6">
                <img src="/images/userbehaviors_shoprite.png" alt="Project banner"/>
                <figcaption className="text-sm text-gray-600 mt-3">Age group distribution</figcaption>
              </figure>

              <figure className="rounded-lg overflow-hidden bg-white border border-gray-100 p-6">
                <img src="/images/failurepoints_shoprite.png" alt="Project banner"/>
                <figcaption className="text-sm text-gray-600 mt-3">Language barrier notes</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 10) PERSONAS */}
        <section id="personas" className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading text-gray-900 mb-4">Personas</h2>
            <p className="text-gray-700 mb-6">Representative personas from interviews and observations. Two derived from interviews and two from observations.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Interview Persona 1 */}
              <div className="p-6 bg-white border border-gray-100 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center"><img src="/images/ana_shoprite.png" alt="Ana — The Overwhelmed Saver" className="w-full h-full object-cover" /></div>
                  <div>
                    <h4 className="font-semibold">Ana — The Overwhelmed Saver</h4>
                    <p className="text-sm text-gray-600">Retired shopper on a fixed income, shops weekly.</p>
                    <p className="text-sm text-gray-600"><strong>Primary Platform:</strong>In-Store Kiosk</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <strong>Goals</strong>
                    <p>Save money without feeling rushed or embarrassed</p>
                  </div>
                  <div>
                    <strong>Frustrations</strong>
                    <p>Small text, unclear confirmation, fear of making mistakes</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-700">
                  <p><strong>Behaviors:</strong> Hesitates during login, repeatedly asks staff for confirmation.</p>
                  <p><strong>Needs:</strong> Larger text, clear feedback, reassurance after each step.</p>
                  <p className="italic mt-2">“I just want to know it worked.”</p>
                </div>
              </div>

              {/* Interview Persona 2 */}
              <div className="p-6 bg-white border border-gray-100 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-40 flex items-center justify-center"><img src="/images/carlos_shoprite.png" alt="Carlos — The Language Dependent Shopper" className="w-full h-full object-cover" /></div>
                  <div>
                    <h4 className="font-semibold">Carlos — The Language Dependent Shopper</h4>
                    <p className="text-sm text-gray-600">Spanish-speaking customer, shops for family.</p>
                    <p className="text-sm text-gray-600"><strong>Primary Platform:</strong>In-Store Kiosk</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <strong>Goals</strong>
                    <p>Understand and apply coupons independently</p>
                  </div>
                  <div>
                    <strong>Frustrations</strong>
                    <p>English-only interface, unclear instructions</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-700">
                  <p><strong>Behaviors:</strong> Relies on staff or avoids coupons altogether.</p>
                  <p><strong>Needs:</strong> Spanish language toggle, visual guidance.</p>
                  <p className="italic mt-2">“No entiendo qué hacer después.”</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Observation Persona 1 */}
              <div className="p-6 bg-white border border-gray-100 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center"><img src="/images/james_shoprite.png" alt="James — The Time Pressed Shopper" className="w-full h-full object-cover" /></div>
                  <div>
                    <h4 className="font-semibold">James — The Time Pressed Shopper</h4>
                    <p className="text-sm text-gray-600">Busy professional, shops after work.</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <strong>Goals</strong>
                    <p>Quickly load relevant coupons</p>
                  </div>
                  <div>
                    <strong>Frustrations</strong>
                    <p>Slow process, uncertainty if coupons applied</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-700">
                  <p><strong>Behaviors:</strong> Uses search, abandons when errors occur.</p>
                  <p><strong>Needs:</strong> Fast confirmation, fewer steps.</p>
                  <p className="italic mt-2">“I don’t have time to guess if it worked.”</p>
                </div>
              </div>

              {/* Observation Persona 2 */}
              <div className="p-6 bg-white border border-gray-100 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center"><img src="/images/maria_shoprite.png" alt="Maria — The Budget Conscious Planner" className="w-full h-full object-cover" /></div>
                  <div>
                    <h4 className="font-semibold">Maria — The Budget Conscious Planner</h4>
                    <p className="text-sm text-gray-600">Works full-time, shops weekly for household.</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <strong>Goals</strong>
                    <p>Maximize savings efficiently</p>
                  </div>
                  <div>
                    <strong>Frustrations</strong>
                    <p>Loading coupons one by one, search failures</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-700">
                  <p><strong>Behaviors:</strong> Scrolls extensively, compares ShopRite to competitors.</p>
                  <p><strong>Needs:</strong> Auto-load coupons, smarter search.</p>
                  <p className="italic mt-2">“It takes too long to load everything.”</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11) JOURNEY MAP */}
        <section id="journeys" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading text-gray-900 mb-4">Kiosk Journey Map</h2>
            <p className="text-gray-700 mb-6">Journey map that highlight steps, emotions, pain points, and opportunities for Kiosk.</p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {/* Kiosk journey */}
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                <h3 className="font-semibold mb-3">Login → Browse → Load → Logout</h3>
                <figure className="mt-4 rounded-lg overflow-hidden bg-gray-100 p-6">
                  <img src="/images/journeymap_shoprite.png" alt="Project banner"/>
                  <figcaption className="text-sm text-gray-600 mt-2">Kiosk journey map</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 9) CORE PROBLEMS IDENTIFIED (table-style) */}
        <section id="core-problems" className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading text-gray-900 mb-4">Core Problems Identified</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["No 'Load All' option", "Interview + Observation support"],
                ["Weak search / findability", "Interview + Observation support"],
                ["Low confidence / lack of confirmation feedback", "Interview + Observation support"],
                ["Accessibility: small text/buttons", "Interview +Observation support"],
                ["Language support gap (Spanish)", "Interview + Observation support"],
                ["Coupon reliability (errors)", "Interview + Observation support"],
              ].map((row, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-lg">
                  <div className="w-3 h-3 bg-purple-700 rounded-full mt-2" aria-hidden />
                  <div>
                    <div className="text-gray-800 font-medium">{row[0]}</div>
                    <div className="text-sm text-gray-600">{row[1]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12) DESIGN SOLUTIONS */}
        <section id="design" className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading text-gray-900 mb-4">Design Solutions</h2>
            <p className="text-gray-700 mb-6">Solutions balance usability improvements with realistic implementation tradeoffs and business considerations.</p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="text-left px-4 py-2 text-sm text-gray-600">Solution</th>
                    <th className="text-left px-4 py-2 text-sm text-gray-600">What it improves</th>
                    <th className="text-left px-4 py-2 text-sm text-gray-600">Notes / tradeoffs</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Load All / Smart Load", "Faster access to coupons", "Load All improves discoverability but may reduce marketing exposure; Smart Load balances both"],
                    ["Confirmation feedback", "User confidence & error reduction", "Add clear 'Coupon Loaded' message and brief summary"],
                    ["Improved search", "Findability & discovery", "Add tolerance, suggestions, and fuzzy matching"],
                    ["Accessibility mode", "Inclusive access for low-vision/keyboard users", "Large text and high contrast; toggle adds maintenance"],
                    ["Spanish toggle", "Reduces language-related errors", "Adds translation work and content maintenance"],
                    ["Eligibility clarity", "Fewer failed loads & support requests", "Display eligibility upfront to reduce confusion"],
                  ].map((row, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-4 py-3 text-gray-800 align-top">{row[0]}</td>
                      <td className="px-4 py-3 text-gray-700 align-top">{row[1]}</td>
                      <td className="px-4 py-3 text-gray-700 align-top">{row[2]}</td>
                      <td className="px-4 py-3 text-gray-700 align-top">{row[3]}</td>
                      <td className="px-4 py-3 text-gray-700 align-top">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 13) PROTOTYPE HIGHLIGHTS (Kiosk redesign) */}
        <section id="prototype" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading text-gray-900 mb-4">Prototype Highlights — Kiosk Redesign</h2>
            <p className="text-gray-700 mb-4">Key changes made to the kiosk experience to improve discoverability, clarity, and accessibility.</p>

            <ul className="list-disc pl-5 text-gray-700 mb-6">
              <li>Improved navigation with clear categories and persistent search bar.</li>
              <li>Language toggle for non-English speakers.</li>
              <li>Larger tap targets and an accessibility toggle for high-contrast/large text.</li>
              <li>Smart Load logic to prioritize marketing vs immediate discovery.</li>
              <li>Clear load state and confirmation summary after coupon load.</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Before/After carousel */}
              <div className="rounded-lg overflow-hidden bg-gray-100 border border-gray-200 p-4">
                <div className="relative">
                  <div className="w-full h-56 md:h-72 bg-white flex items-center justify-center rounded-md p-3">
                    <img src={beforeImages[beforeIndex]} alt={`Before ${beforeIndex + 1}`} className="max-w-full max-h-full object-contain" />
                  </div>

                  <button onClick={prevBefore} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1 shadow">‹</button>
                  <button onClick={nextBefore} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1 shadow">›</button>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2">
                  {beforeImages.map((_, i) => (
                    <button key={i} onClick={() => setBeforeIndex(i)} className={`w-2 h-2 rounded-full ${i === beforeIndex ? 'bg-gray-900' : 'bg-gray-300'}`} aria-label={`Go to slide ${i + 1}`} />
                  ))}
                </div>

                <figcaption className="text-sm text-gray-600 mt-3">Current kiosk screens</figcaption>
              </div>

              {/* Prototype carousel */}
              <div className="rounded-lg overflow-hidden bg-gray-100 border border-gray-200 p-4">
                <div className="relative">
                  <div className="w-full h-56 md:h-72 bg-white flex items-center justify-center rounded-md p-3">
                    <img src={protoImages[protoIndex]} alt={`Prototype ${protoIndex + 1}`} className="max-w-full max-h-full object-contain" />
                  </div>

                  <button onClick={prevProto} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1 shadow">‹</button>
                  <button onClick={nextProto} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1 shadow">›</button>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2">
                  {protoImages.map((_, i) => (
                    <button key={i} onClick={() => setProtoIndex(i)} className={`w-2 h-2 rounded-full ${i === protoIndex ? 'bg-gray-900' : 'bg-gray-300'}`} aria-label={`Go to slide ${i + 1}`} />
                  ))}
                </div>

                <figcaption className="text-sm text-gray-600 mt-3">Prototype UI grid</figcaption>
              </div>
            </div>
          </div>
        </section>
        
        {/* Navigation Button */}
         <div className="flex justify-between items-center">
            <Link href="/projects" className="px-5 py-3 border border-gray-200 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors no-underline">Back to Projects</Link>
          </div>
      </main>
    </div>
  );
}