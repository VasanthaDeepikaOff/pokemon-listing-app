export default function FAQPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black">Frequently Asked Questions</h1>
      <div className="mt-4 space-y-4">
        <details className="bg-gray-800 p-4 rounded">
          <summary className="cursor-pointer text-yellow-400">What is this site?</summary>
          <p className="mt-2 text-gray-400">This site lets you explore Pokémon details.</p>
        </details>
        <details className="bg-gray-800 p-4 rounded">
          <summary className="cursor-pointer text-yellow-400">Is it free?</summary>
          <p className="mt-2 text-gray-400">Yes, this site is completely free to use.</p>
        </details>
      </div>
    </div>
  );
}
