import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const HelpPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const renderContent = () => {
    if (!slug) {
      return <p>Welcome to the Help Center. Choose a topic below.</p>;
    }

    switch (slug[0]) {
      case 'faqs':
        return <p>Here are some frequently asked questions. <br /><hr /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti qui soluta magnam quis dolore rem est perspiciatis illo. Quibusdam, accusantium.</p>;
      case 'contact':
        return <p>Contact us at l217509@lhr.nu.edu.pk</p>;
      case 'privacy':
        return <p>We take your privacy seriously. Here's our policy.</p>;
      default:
        return <p>Help topic not found.</p>;
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Help Center</h1>
      {renderContent()}

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Quick Links</h2>
        <ul className="list-disc pl-5 marker:text-black mt-2">
          <li><Link href="/help/faqs" className="text-blue-600 hover:underline">FAQs</Link></li>
          <li><Link href="/help/contact" className="text-blue-600 hover:underline">Contact</Link></li>
          <li><Link href="/help/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default HelpPage;
