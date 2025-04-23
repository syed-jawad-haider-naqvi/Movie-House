// pages/help/index.js
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function HelpHome() {
  return (<>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Help Center</h1>
      <p className="mb-4">Choose a topic below to learn more:</p>

      <ul className="list-disc pl-5 marker:text-black">
        <li>
          <Link href="/help/faqs" className="text-blue-700 hover:underline">
            FAQs
          </Link>
        </li>
        <li>
          <Link href="/help/contact" className="text-blue-700 hover:underline">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/help/privacy" className="text-blue-700 hover:underline">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
    </>
  );
}
