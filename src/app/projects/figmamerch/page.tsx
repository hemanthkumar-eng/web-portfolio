import Link from "next/link";

export default function FigmaMerchPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/#work" className="text-primary hover:underline mb-8 block">
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-4">Figma Merch Store</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "React",
            "Node.js",
            "PostgreSQL",
            "Redux",
            "Stripe",
            "Material-UI",
          ].map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-lg text-gray-300 mb-8">
            The Figma Merch Store was an e-commerce website designed for selling
            Figma-branded merchandise. It allowed users to browse products, view
            detailed product descriptions, add items to their cart, and complete
            purchases through a checkout process.
          </p>
          <div className="whitespace-pre-line text-gray-300">
            {`Figma Merch Store is a full-featured e-commerce platform built specifically for selling Figma-branded merchandise. The store provides a seamless shopping experience with a design-focused interface that reflects Figma's brand identity.

Key Features:
- Product Catalog: Organized display of merchandise with filtering and sorting
- Shopping Cart: Real-time cart management with persistent storage
- Secure Checkout: Multi-step checkout process with Stripe integration
- User Accounts: Personal accounts for order history and saved items
- Inventory Management: Real-time stock tracking and updates
- Admin Dashboard: Complete control over products, orders, and inventory

Technical Stack:
- Frontend: React with Redux Toolkit
- UI Framework: Material-UI
- State Management: Redux
- Styling: Styled Components
- Backend: Node.js with Express
- Database: PostgreSQL
- Payment Processing: Stripe
- Image Storage: Cloudinary
- Hosting: Vercel`}
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/yourusername/figma-merch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <span>View on GitHub</span>
          </a>
          <a
            href="https://figmamerch.demo.com"
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
