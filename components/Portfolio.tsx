import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <Image
          src="/WhatsApp Image 2025-01-23 at 08.57.44 (1).jpeg"
          alt="Profile Photo"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold">Rania Nofal</h1>
        <p className="text-xl text-gray-600">Marketing Manager | Digital Marketing Specialist</p>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700">
          Innovative and performance-driven marketing professional with extensive experience in developing and implementing effective marketing strategies, managing campaigns, and optimizing brand awareness. Adept at analyzing market trends and customer needs to develop highly effective targeted marketing campaigns. Proven ability to drive brand growth and enhance visibility in competitive markets.
        </p>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-bold">Marketing Manager</h3>
            <p className="text-sm text-gray-500">Bayan Marketing Consultancy, Dubai – 2020 to Present</p>
            <p className="mt-2 text-gray-700">Developed and executed marketing strategies across digital platforms, resulting in a 35% increase in client engagement. Managed a team of 5 marketers, handled budget allocations, and implemented SEO/SEM campaigns to boost brand visibility.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-bold">Digital Marketing Specialist</h3>
            <p className="text-sm text-gray-500">ABC Solutions, Cairo – 2016 to 2020</p>
            <p className="mt-2 text-gray-700">Led content creation and social media strategy, increasing social media followers by 60% and website traffic by 50%. Optimized ad performance and managed email marketing campaigns.</p>
          </CardContent>
        </Card>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-bold">Bachelor of Business Administration</h3>
            <p className="text-sm text-gray-500">American University in Cairo – 2015</p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Marketing Strategy</li>
          <li>Digital Marketing</li>
          <li>SEO/SEM</li>
          <li>Social Media Management</li>
          <li>Content Creation</li>
          <li>Google Analytics</li>
          <li>Team Leadership</li>
          <li>Budget Management</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-2 rounded h-32"
          ></textarea>
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-12">
        <p>&copy; {new Date().getFullYear()} Rania Nofal. All rights reserved.</p>
      </footer>
    </main>
  );
}
