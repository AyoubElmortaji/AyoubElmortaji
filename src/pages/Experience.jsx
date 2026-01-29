import { useContent } from '../utils/useContent.js';
import { useSeo } from '../utils/useSeo.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Timeline from '../components/Timeline.jsx';
import PageWrapper from '../components/PageWrapper.jsx';

const Experience = () => {
  const content = useContent();

  useSeo({
    title: `Experience | ${content.personal.name}`,
    description: content.about.summary
  });

  return (
    <PageWrapper>
      <section className="section">
        <SectionHeader title="Professional Experiences" subtitle="Timeline" />
        <Timeline items={content.experience} />
      </section>
    </PageWrapper>
  );
};

export default Experience;
