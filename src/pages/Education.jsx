import { useContent } from '../utils/useContent.js';
import { useSeo } from '../utils/useSeo.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Timeline from '../components/Timeline.jsx';
import PageWrapper from '../components/PageWrapper.jsx';

const Education = () => {
  const content = useContent();

  useSeo({
    title: `Education | ${content.personal.name}`,
    description: content.about.summary
  });

  return (
    <PageWrapper>
      <section className="section">
        <SectionHeader title="Education" subtitle="Timeline" />
        <Timeline items={content.education} />
      </section>
    </PageWrapper>
  );
};

export default Education;
