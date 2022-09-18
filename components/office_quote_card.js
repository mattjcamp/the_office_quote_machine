export default function OfficeQuoteCard({ quote, author }) {
  return (
    <div class="w-2/3 md:mt-48 pt-10">
      <p class="md:text-xl">{quote}</p>
      <p class="mt-2 mb-2 text-right text-sm">{author}</p>
    </div>
  );
}
