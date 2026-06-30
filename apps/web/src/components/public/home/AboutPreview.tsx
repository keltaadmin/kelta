import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function AboutPreview() {
  return (
    <Section title="About KELTA">
      <Container>
        <p className="text-gray-600 leading-8">
          KELTA is the professional association of
          Technical Assistants serving Local Self
          Government Institutions across Kerala.
        </p>
      </Container>
    </Section>
  );
}