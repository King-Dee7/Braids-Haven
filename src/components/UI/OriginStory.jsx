import React from 'react';
import { translations } from '../../utils/translations';
import './OriginStory.css';

const OriginStory = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="origin-story">
      <div className="container origin-content">
        <div className="origin-kicker">{t.originKicker}</div>
        <h2 className="origin-main" dangerouslySetInnerHTML={{ __html: t.originMain }} />
      </div>
    </section>
  );
};

export default OriginStory;
