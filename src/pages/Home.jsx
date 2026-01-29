import { useContent } from '../utils/useContent.js';
import { useSeo } from '../utils/useSeo.js';
import Hero from '../components/Hero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ProjectsGrid from '../components/ProjectsGrid.jsx';
import AwardsGrid from '../components/AwardsGrid.jsx';
import PageWrapper from '../components/PageWrapper.jsx';

const Home = () => {
  const content = useContent();
  const featured = content.projects.slice(0, 2);

  useSeo({
    title: `${content.personal.name} | Cyberpunk Portfolio`,
    description: content.about.summary
  });

  return (
    <PageWrapper>
      <Hero personal={content.personal} highlights={content.highlights} />
      <section className="section">
        <SectionHeader title="Featured Projects" subtitle="Showcase" />
        <ProjectsGrid projects={featured} />
      </section>
      <section className="section">
        <SectionHeader title="Awards Spotlight" subtitle="Recognition" />
        <AwardsGrid awards={content.awards} />
      </section>
    </PageWrapper>
  );
};

export default Home;
