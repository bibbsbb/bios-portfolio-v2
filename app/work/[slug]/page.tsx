import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/site/Nav';
import { CaseStudy } from '@/components/site/CaseStudy';
import { getProject, projects } from '@/lib/work';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return { title: `${p.name} | Brandon Bibbins`, description: p.summary };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) notFound();
  const next = projects[(i + 1) % projects.length];
  return (
    <>
      <Nav />
      <CaseStudy p={projects[i]} next={next} />
    </>
  );
}
