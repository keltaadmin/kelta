import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import {
  Card,
} from '@/components/ui/card';

export default function ObjectivesSection() {
  const objectives = [
    'Professional Development',
    'Member Welfare',
    'Technical Excellence',
    'Knowledge Sharing',
  ];

  return (
    <Section title="Objectives">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {objectives.map((item) => (
            <Card key={item}>
              <h3 className="font-semibold">
                {item}
              </h3>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}