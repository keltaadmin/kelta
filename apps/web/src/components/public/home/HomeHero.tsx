import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';

export default function HomeHero() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <p className="mt-6 text-lg text-gray-600">
          Official Digital Platform of KELTA
        </p>


        <h1 className="text-5xl font-bold">
          Kerala Local Body Technical
          Assistants Association
        </h1>

        

        <div className="mt-8">
          <Button>
            Join KELTA
          </Button>
        </div>
      </Container>
    </section>
  );
}