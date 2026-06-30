import { ReactNode } from 'react';

interface Props {
  title?: string;
  children: ReactNode;
}

export default function Section({
  title,
  children,
}: Props) {
  return (
    <section className="py-20">
      {title && (
        <h2 className="mb-10 text-3xl font-bold">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}