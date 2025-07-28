import Breadcrumb from "@/components/Common/Breadcrumb";

export default function TermsPage() {
  return (
    <main className="container mx-auto max-w-2xl py-16 px-4">
      <Breadcrumb pageName="Terms of Service" />
      <h1 className="mb-6 text-3xl font-bold text-dark dark:text-white">Terms of Service</h1>
      <p className="mb-4 text-body-color dark:text-dark-6">These Terms of Service govern your use of Optima AI Solutions products and services. By using our services, you agree to these terms. Please read them carefully.</p>
      <h2 className="mt-8 mb-2 text-xl font-semibold">Use of Service</h2>
      <p className="mb-4">You agree to use our products in compliance with all applicable laws and not for any unlawful purpose.</p>
      <h2 className="mt-8 mb-2 text-xl font-semibold">Limitation of Liability</h2>
      <p className="mb-4">Optima AI Solutions is not liable for any damages arising from the use of our products. Use at your own risk.</p>
      <h2 className="mt-8 mb-2 text-xl font-semibold">Contact</h2>
      <p>For questions, email <a href="mailto:hello@optimaai.cc" className="underline">hello@optimaai.cc</a>.</p>
    </main>
  );
}
