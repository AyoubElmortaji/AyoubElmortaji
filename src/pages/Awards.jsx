import { useContent } from '../utils/useContent.js';
import { useSeo } from '../utils/useSeo.js';
import SectionHeader from '../components/SectionHeader.jsx';
import AwardsGrid from '../components/AwardsGrid.jsx';
import PageWrapper from '../components/PageWrapper.jsx';

const Awards = () => {
  const content = useContent();

  useSeo({
    title: `Awards | ${content.personal.name}`,
    description: content.about.summary
  });

  return (
    <PageWrapper>
      <section className="section">
        <SectionHeader title="Awards" subtitle="Recognition" />
        <AwardsGrid awards={content.awards} />
      </section>
    </PageWrapper>
  );
};

export default Awards;
