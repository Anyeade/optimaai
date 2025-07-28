import Breadcrumb from "@/components/Common/Breadcrumb";

export default function LegalNoticePage() {
  return (
    <main className="container mx-auto max-w-2xl py-16 px-4">
      <Breadcrumb pageName="Legal Notice" />
      <h1 className="mb-6 text-3xl font-bold text-dark dark:text-white">Legal Notice</h1>
      <p className="mb-4 text-body-color dark:text-dark-6">This Legal Notice provides information about Optima AI Solutions, our website, and our legal responsibilities. For questions, contact hello@optimaai.cc.</p>
      <h2 className="mt-8 mb-2 text-xl font-semibold">Company Information</h2>
      <p className="mb-4">Optima AI Solutions Inc.<br/>Remote, Worldwide<br/>Email: <a href="mailto:hello@optimaai.cc" className="underline">hello@optimaai.cc</a></p>
      <h2 className="mt-8 mb-2 text-xl font-semibold">Disclaimer</h2>
      <p className="mb-4">All content is provided for informational purposes only. We strive for accuracy but do not guarantee completeness or timeliness.</p>
    </main>
  );
}
