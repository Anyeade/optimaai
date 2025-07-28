import Breadcrumb from "@/components/Common/Breadcrumb";

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto max-w-2xl py-16 px-4">
      <Breadcrumb pageName="Privacy Policy" />
      <h1 className="mb-6 text-3xl font-bold text-dark dark:text-white">Privacy Policy</h1>
      <p className="mb-4 text-body-color dark:text-dark-6">This Privacy Policy explains how Optima AI Solutions collects, uses, and protects your information when you use our products and services. Please review this policy carefully. For questions, contact hello@optimaai.cc.</p>
      <h2 className="mt-8 mb-2 text-xl font-semibold">Information We Collect</h2>
      <p className="mb-4">We only collect information necessary to provide and improve our services. We do not sell your data.</p>
      <h2 className="mt-8 mb-2 text-xl font-semibold">How We Use Information</h2>
      <p className="mb-4">Your information is used solely for providing, maintaining, and improving our products. We do not share your data with third parties except as required by law.</p>
      <h2 className="mt-8 mb-2 text-xl font-semibold">Contact</h2>
      <p>For privacy questions, email <a href="mailto:hello@optimaai.cc" className="underline">hello@optimaai.cc</a>.</p>
    </main>
  );
}
