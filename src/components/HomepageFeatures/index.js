import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bi-Weekly Interview Practice',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We have bi-weekly meetings where we practice interview questions (At the moment through Zoom)
      </>
    ),
  },
  {
    title: 'Resources',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We provide a database of 100+ questions, We explain what interviewers love to hear as answers and provide our sample answers.

      </>
    ),
  },
  {
    title: 'Get Inspired',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        No idea of what to answer in your job interview? We provide sample answers by our members in our community <b>blog</b>!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
