import { useContent } from '../utils/useContent.js';
import { useSeo } from '../utils/useSeo.js';
import SectionHeader from '../components/SectionHeader.jsx';
import ProjectsGrid from '../components/ProjectsGrid.jsx';
import PageWrapper from '../components/PageWrapper.jsx';

const Projects = () => {
  const content = useContent();

  useSeo({
    title: `Projects | ${content.personal.name}`,
    description: content.about.summary
  });

  return (
    <PageWrapper>
      <section className="section">
        <SectionHeader title="Projects" subtitle="Portfolio" />
        <ProjectsGrid projects={content.projects} />
      </section>
    </PageWrapper>
  );
};

export default Projects;
