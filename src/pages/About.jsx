import { useContent } from '../utils/useContent.js';
import { useSeo } from '../utils/useSeo.js';
import SectionHeader from '../components/SectionHeader.jsx';
import Card from '../components/Card.jsx';
import Chip from '../components/Chip.jsx';
import PageWrapper from '../components/PageWrapper.jsx';

const About = () => {
  const content = useContent();

  useSeo({
    title: `About | ${content.personal.name}`,
    description: content.about.summary
  });

  return (
    <PageWrapper>
      <section className="section">
        <SectionHeader title="About Me" subtitle="Profile" />
        <Card className="about-card">
          <h3>{content.about.headline}</h3>
          <p>{content.about.summary}</p>
        </Card>
      </section>
      <section className="section">
        <SectionHeader title="Skills" subtitle="Capabilities" />
        <div className="skills-grid">
          {Object.entries(content.skills).map(([group, skills]) => (
            <Card key={group}>
              <h3>{group}</h3>
              <div className="chip-grid">
                {skills.map((skill) => (
                  <Chip key={skill} label={skill} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionHeader title="Leadership" subtitle="Community" />
        <div className="leadership-grid">
          {content.leadership.map((item) => (
            <Card key={item.organization}>
              <h3>{item.organization}</h3>
              <p>{item.role}</p>
              <span>{item.period}</span>
            </Card>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
