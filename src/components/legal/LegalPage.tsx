import { Container } from "@/components/ui/Container";

export function LegalPage({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section className="bg-paper pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-3xl text-ink md:text-4xl">{title}</h1>
        <div className="mt-8 space-y-4">
          {paragraphs.map((p) => (
            <p key={p} className="text-sm leading-relaxed text-stone">
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
