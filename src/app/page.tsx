import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AICard from '@/components/AICard'

const aiApplications = [
  {
    title: "ChatGPT",
    description: "Advanced language model capable of human-like conversations and content generation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    category: "Language AI"
  },
  {
    title: "DALL-E",
    description: "AI system that creates realistic images and art from natural language descriptions",
    image: "https://images.unsplash.com/photo-1686191128892-3f829f5e5d9b",
    category: "Image Generation"
  },
  {
    title: "Midjourney",
    description: "AI-powered tool that generates detailed and artistic images from text descriptions",
    image: "https://images.unsplash.com/photo-1684163800538-0733360816e0",
    category: "Image Generation"
  },
  {
    title: "Stable Diffusion",
    description: "Open-source image generation model capable of creating high-quality visuals",
    image: "https://images.unsplash.com/photo-1686191128892-3f829f5e5d9b",
    category: "Image Generation"
  },
  {
    title: "GitHub Copilot",
    description: "AI pair programmer that helps developers write better code faster",
    image: "https://images.unsplash.com/photo-1686191128892-3f829f5e5d9b",
    category: "Development"
  },
  {
    title: "Jasper",
    description: "AI writing assistant that helps create marketing copy and content",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    category: "Content Creation"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiApplications.map((app, index) => (
            <AICard key={index} {...app} />
          ))}
        </div>
      </div>
    </main>
  )
}
