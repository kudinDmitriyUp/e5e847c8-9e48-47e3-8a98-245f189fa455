"use client";

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Zap, Code, Award, Users, MessageCircle, HelpCircle, Github, Linkedin, Twitter, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="medium"
      background="fluid"
      cardStyle="gradient-radial"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="CompClub"
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Products", id: "products" },
            { name: "Team", id: "team" },
            { name: "Join Us", id: "contact" },
            { name: "FAQ", id: "faq" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Connect. Code. Create."
          description="Join our thriving computer club where students collaborate on innovative projects, sharpen their coding skills, and build lasting connections with fellow tech enthusiasts."
          buttons={[
            { text: "Join Our Club", href: "#contact" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          imageSrc="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&_wi=1"
          imageAlt="Computer workstation with development setup"
          mediaAnimation="slide-up"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="About Us"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Building Tomorrow's Tech Leaders"
          description="Our computer club is dedicated to fostering a community of passionate developers, designers, and tech innovators. We organize hackathons, coding workshops, and collaborative projects that push the boundaries of what's possible. From beginners to advanced programmers, everyone finds their place in our inclusive community."
          metrics={[
            { value: "200+", title: "Active Members" },
            { value: "50+", title: "Projects Completed" }
          ]}
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&_wi=1"
          imageAlt="Team collaborating on coding project"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="What We Offer"
          description="Explore the exciting opportunities and activities available to club members"
          tag="Club Features"
          tagIcon={Code}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Weekly Coding Workshops",              description: "Learn from industry professionals through hands-on workshops covering web development, mobile apps, data science, and more.",              phoneOne: {
                imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&_wi=2"
              },
              phoneTwo: {
                imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&_wi=2"
              }
            },
            {
              id: 2,
              title: "Hackathons & Competitions",              description: "Compete with peers in exciting hackathons, coding challenges, and tech competitions. Win prizes and showcase your skills.",              phoneOne: {
                imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&_wi=3"
              },
              phoneTwo: {
                imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&_wi=3"
              }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[
            { text: "Explore More", href: "#team" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-4">Our Product Offerings</h2>
          <p className="text-center mb-12">Explore the tools and resources we've built for our community</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" alt="CompClub Platform dashboard" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">CompClub Platform</h3>
              <p className="text-lg font-bold text-green-600">Free</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80" alt="Code Learning Kit" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Code Learning Kit</h3>
              <p className="text-lg font-bold text-green-600">$49</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&q=80" alt="Hackathon Toolkit" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hackathon Toolkit</h3>
              <p className="text-lg font-bold text-green-600">$29</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" alt="Mentorship Program" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mentorship Program</h3>
              <p className="text-lg font-bold text-green-600">$99</p>
            </div>
          </div>
        </div>
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Our Impact"
          description="See the impressive achievements of our computer club community"
          tag="Statistics"
          tagIcon={Award}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              value: "200+",              title: "Club Members",              items: [
                "From diverse academic backgrounds",                "All skill levels welcome",                "Inclusive and supportive"
              ]
            },
            {
              id: "2",              value: "50+",              title: "Projects Delivered",              items: [
                "Web applications built",                "Open source contributions",                "Real-world client work"
              ]
            },
            {
              id: "3",              value: "15+",              title: "Events Per Year",              items: [
                "Hackathons and competitions",                "Expert-led workshops",                "Networking events"
              ]
            },
            {
              id: "4",              value: "98%",              title: "Member Satisfaction",              items: [
                "Strong community bond",                "Quality learning experience",                "Career development support"
              ]
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Leadership"
          description="The passionate leaders driving our club forward"
          tag="Team"
          tagIcon={Users}
          tagAnimation="slide-up"
          members={[
            {
              id: "1",              name: "Alex Chen",              role: "Club President",              description: "Full-stack developer passionate about mentoring. Leads strategic initiatives and oversees all club operations.",              imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&_wi=1",              imageAlt: "Alex Chen, Club President",              socialLinks: [
                { icon: Github, url: "https://github.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "2",              name: "Maya Patel",              role: "Vice President",              description: "Data science enthusiast focused on community engagement. Organizes workshops and social events.",              imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&_wi=1",              imageAlt: "Maya Patel, Vice President",              socialLinks: [
                { icon: Github, url: "https://github.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "3",              name: "Jordan Lee",              role: "Event Coordinator",              description: "Creative problem-solver organizing hackathons and competitions. Ensures memorable experiences for all members.",              imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&_wi=2",              imageAlt: "Jordan Lee, Event Coordinator",              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://example.com" }
              ]
            },
            {
              id: "4",              name: "Sam Torres",              role: "Tech Lead",              description: "Backend expert driving our technical infrastructure. Mentors developers and manages projects.",              imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&_wi=2",              imageAlt: "Sam Torres, Tech Lead",              socialLinks: [
                { icon: Github, url: "https://github.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Member Success Stories"
          description="Hear what our community members have to say about their experience"
          tag="Testimonials"
          tagIcon={MessageCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              handle: "@sarah_codes",              testimonial: "Joining the computer club transformed my coding skills. The mentorship and collaborative projects gave me real-world experience I couldn't get elsewhere.",              imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&_wi=1",              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",              name: "Michael Rodriguez",              handle: "@mrodriguez_dev",              testimonial: "The hackathons organized by this club are incredible. I've built my portfolio, made lasting friendships, and gained confidence in my abilities.",              imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&_wi=1",              imageAlt: "Michael Rodriguez"
            },
            {
              id: "3",              name: "Emily Wang",              handle: "@emily_codes",              testimonial: "As someone new to programming, the welcoming community and diverse skill levels made it easy to learn. The workshops are top-notch!",              imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&_wi=2",              imageAlt: "Emily Wang"
            },
            {
              id: "4",              name: "David Kim",              handle: "@davidkim_tech",              testimonial: "The networking opportunities at club events led to internship offers. This community opens doors and builds connections that last.",              imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&_wi=2",              imageAlt: "David Kim"
            },
            {
              id: "5",              name: "Jessica Lopez",              handle: "@jess_develops",              testimonial: "Best decision I made was joining CompClub. The supportive environment and quality projects have accelerated my career growth significantly.",              imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&_wi=3",              imageAlt: "Jessica Lopez"
            },
            {
              id: "6",              name: "Alex Thompson",              handle: "@alexthompson99",              testimonial: "Outstanding club with passionate members and leaders. We celebrate wins together, learn from failures, and always push each other to be better.",              imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&_wi=3",              imageAlt: "Alex Thompson"
            }
          ]}
          speed={40}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about joining and participating in our computer club"
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "Who can join the computer club?",              content: "Everyone is welcome! Whether you're a complete beginner or an experienced programmer, we have something for you. Our club celebrates diversity and includes members from all academic backgrounds and skill levels."
            },
            {
              id: "2",              title: "What are the membership requirements?",              content: "There are no strict requirements. Simply show interest in technology and a willingness to learn and collaborate. Most of our members are students, but we welcome professionals and enthusiasts of all ages."
            },
            {
              id: "3",              title: "How often does the club meet?",              content: "We hold weekly meetings every Tuesday at 6 PM in the Technology Building, Room 301. We also organize special events like hackathons and workshops throughout the semester."
            },
            {
              id: "4",              title: "Do I need to know how to code to join?",              content: "Absolutely not! Many of our members started as beginners. We offer beginner-friendly workshops and pair new members with experienced mentors to help them get started."
            },
            {
              id: "5",              title: "What projects does the club work on?",              content: "We work on diverse projects including web applications, mobile apps, machine learning models, open-source contributions, and more. Members can propose projects and find collaborators."
            },
            {
              id: "6",              title: "Are there any costs to join?",              content: "Membership is completely free! We occasionally host paid workshops with industry experts, but basic membership and most activities are covered by club funds."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="CompClub"
          columns={[
            {
              items: [
                { label: "About", href: "#about" },
                { label: "Team", href: "#team" },
                { label: "Features", href: "#features" },
                { label: "Products", href: "#products" }
              ]
            },
            {
              items: [
                { label: "Events", href: "#" },
                { label: "Workshops", href: "#" },
                { label: "Projects", href: "#" }
              ]
            },
            {
              items: [
                { label: "Discord", href: "https://discord.com" },
                { label: "GitHub", href: "https://github.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            },
            {
              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
