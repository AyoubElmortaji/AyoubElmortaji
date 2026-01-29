import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useContent } from '../utils/useContent.js';
import { useSeo } from '../utils/useSeo.js';
import PageWrapper from '../components/PageWrapper.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Chip from '../components/Chip.jsx';
import ImageLightbox from '../components/ImageLightbox.jsx';
import FallbackImage from '../components/FallbackImage.jsx';
import Button from '../components/Button.jsx';
import { withBase } from '../utils/assetPaths.js';

const extensionVariants = (path) => {
  const base = path.replace(/\.(webp|png|jpg|jpeg)$/i, '');
  return [`${base}.webp`, `${base}.png`, `${base}.jpg`];
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const { projects, personal } = useContent();
  const project = projects.find((item) => item.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const gallery = useMemo(() => {
    if (!project) return [];
    return project.gallery.map((file) => withBase(`assets/projects/${project.slug}/${file}`));
  }, [project]);

  const architectureSources = useMemo(() => {
    if (!project) return [];
    const path = withBase(`assets/projects/${project.slug}/${project.architecture}`);
    return extensionVariants(path);
  }, [project]);

  const lightboxImages = useMemo(() => {
    if (!project) return [];
    return [architectureSources[0], ...gallery];
  }, [architectureSources, gallery, project]);

  useSeo({
    title: project ? `${project.title} | ${personal.name}` : `Project | ${personal.name}`,
    description: project?.overview || personal.title
  });

  if (!project) {
    return (
      <PageWrapper>
        <section className="section">
          <SectionHeader title="Project not found" subtitle="Missing" />
          <Button as={Link} to="/projects">
            Back to Projects
          </Button>
        </section>
      </PageWrapper>
    );
  }

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageWrapper>
      <section className="section project-detail">
        <div className="project-detail__header">
          <div>
            <p className="section-eyebrow">{project.type}</p>
            <h1>{project.title}</h1>
            <p className="project-detail__overview">{project.overview}</p>
            <div className="project-detail__meta">
              <div>
                <span className="meta-label">Role</span>
                <p>{project.role}</p>
              </div>
              <div>
                <span className="meta-label">Timeline</span>
                <p>{project.timeline}</p>
              </div>
            </div>
            <div className="project-detail__stack">
              {project.stack.map((item) => (
                <Chip key={item} label={item} />
              ))}
            </div>
          </div>
          <div className="project-detail__card">
            <h3>Architecture</h3>
            <FallbackImage
              sources={architectureSources}
              alt={`${project.title} architecture`}
              className="project-detail__architecture"
              role="button"
              onClick={() => openLightbox(0)}
            />
          </div>
        </div>

        <div className="project-detail__sections">
          <div>
            <SectionHeader title="Features & Responsibilities" subtitle="Scope" />
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader title="Challenges" subtitle="Problems" />
            <ul>
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader title="Solutions" subtitle="Approach" />
            <ul>
              {project.solutions.map((solution) => (
                <li key={solution}>{solution}</li>
              ))}
            </ul>
          </div>
          {project.results?.length ? (
            <div>
              <SectionHeader title="Results" subtitle="Impact" />
              <ul>
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="project-detail__gallery">
          <SectionHeader title="Gallery" subtitle="Screens" />
          <div className="gallery-grid">
            {gallery.map((src, index) => (
              <FallbackImage
                key={src}
                sources={extensionVariants(src)}
                alt={`${project.title} gallery ${index + 1}`}
                className="gallery-image"
                role="button"
                onClick={() => openLightbox(index + 1)}
              />
            ))}
          </div>
        </div>

        <div className="project-detail__cta">
          <Button as={Link} to="/projects" variant="outline">
            Back to Projects
          </Button>
        </div>
      </section>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={currentIndex}
        onSelect={setCurrentIndex}
      />
    </PageWrapper>
  );
};

export default ProjectDetails;
