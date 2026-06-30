import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import {
  Card,
} from '@/components/ui/card';

export default function ServicesSection() {
  const services = [
    'Membership Services',
    'Training Programs',
    'Documentation Support',
    'Technical Assistance',
  ];

  return (
    <Section title="Services">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service}>
              <h3 className="font-semibold">
                {service}
              </h3>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}