import { useContent } from '../utils/useContent.js';
import { useSeo } from '../utils/useSeo.js';
import SectionHeader from '../components/SectionHeader.jsx';
import CertificationsList from '../components/CertificationsList.jsx';
import PageWrapper from '../components/PageWrapper.jsx';

const Certifications = () => {
  const content = useContent();

  useSeo({
    title: `Certifications | ${content.personal.name}`,
    description: content.about.summary
  });

  return (
    <PageWrapper>
      <section className="section">
        <SectionHeader title="Certifications" subtitle="Credentials" />
        <CertificationsList certifications={content.certifications} />
      </section>
    </PageWrapper>
  );
};

export default Certifications;
