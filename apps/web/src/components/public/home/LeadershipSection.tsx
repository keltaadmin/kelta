import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import {
  Card,
  } from '@/components/ui/card';

import { LEADERSHIP } from '@/lib/constants/leadership';

export default function LeadershipSection() {
  return (
    <Section title="Leadership">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {LEADERSHIP.map((leader) => (
            <Card key={leader.id}>
              <h3 className="font-semibold">
                {leader.name}
              </h3>

              <p className="text-gray-500">
                {leader.designation}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}