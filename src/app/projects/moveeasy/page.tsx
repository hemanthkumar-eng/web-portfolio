import Link from "next/link";

export default function MoveEasyPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/#work" className="text-primary hover:underline mb-8 block">
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-4">MoveEasy</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"].map(
            (tag, i) => (
              <span
                key={i}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
              >
                {tag}
              </span>
            )
          )}
        </div>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-lg text-gray-300 mb-8">
            Created a responsive website to promote and showcase shipping
            services. Emphasized a clean, structured design and user-friendly
            navigation, allowing visitors to easily browse shipping options and
            service details.
          </p>
          <div className="whitespace-pre-line text-gray-300">
            {`MoveEasy is a modern shipping services platform designed to make moving and shipping processes seamless and stress-free. The website showcases our comprehensive range of services with a focus on user experience and accessibility.

Key Features:
- Responsive Design: Fully adaptive layout that works perfectly across all devices
- Service Showcase: Detailed presentation of various shipping and moving services
- User-friendly Navigation: Intuitive menu structure and clear call-to-actions
- Service Calculator: Interactive tool for estimating shipping costs
- Customer Testimonials: Real feedback from satisfied customers
- Contact Integration: Easy-to-use contact forms and service request system

Technical Implementation:
- Clean, semantic HTML5 structure
- Modern CSS with Bootstrap framework
- Interactive elements with JavaScript
- Optimized for performance and SEO
- Cross-browser compatibility
- Mobile-first approach`}
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/Hemanthx96/shippers-web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <span>View on GitHub</span>
          </a>
          <a
            href="https://hemanthx96.github.io/shippers-web/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
