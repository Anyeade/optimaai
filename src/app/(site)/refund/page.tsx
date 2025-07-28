import Breadcrumb from "@/components/Common/Breadcrumb";

export default function RefundPolicyPage() {
  return (
    <main className="container mx-auto max-w-2xl py-16 px-4">
      <Breadcrumb pageName="Refund Policy" />
      <h1 className="mb-6 text-3xl font-bold text-dark dark:text-white">Refund Policy</h1>
      <p className="mb-4 text-body-color dark:text-dark-6">Optima AI Solutions offers refunds in accordance with our policy. Please review the details below.</p>
      <h2 className="mt-8 mb-2 text-xl font-semibold">Eligibility</h2>
      <p className="mb-4">Refunds are available for paid plans within 14 days of purchase if you are unsatisfied. Contact us with your order details.</p>
      <h2 className="mt-8 mb-2 text-xl font-semibold">How to Request a Refund</h2>
      <p className="mb-4">Email <a href="mailto:hello@optimaai.cc" className="underline">hello@optimaai.cc</a> with your order information to request a refund.</p>
      <h2 className="mt-8 mb-2 text-xl font-semibold">Contact</h2>
      <p>For refund questions, email <a href="mailto:hello@optimaai.cc" className="underline">hello@optimaai.cc</a>.</p>
    </main>
  );
}
