import { useEffect } from 'react';

const ensureMeta = () => {
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  return meta;
};

export const useSeo = ({ title, description }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      const meta = ensureMeta();
      meta.setAttribute('content', description);
    }
  }, [title, description]);
};
