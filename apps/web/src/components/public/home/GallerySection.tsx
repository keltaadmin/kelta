export default function GallerySection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-bold">
          Photo Gallery
        </h2>

        <div className="grid gap-4 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl bg-slate-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
}