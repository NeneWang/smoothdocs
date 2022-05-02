import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bi-Weekly Interview Practice',
    Svg: require('@site/static/img/Bi-Weekly.svg').default,
    description: (
      <>
        We have bi-weekly meetings where we practice interview questions (At the moment through Zoom)
      </>
    ),
  },
  {
    title: 'Resources',
    Svg: require('@site/static/img/resources.svg').default,
    description: (
      <>
        We provide a database of 100+ questions, We explain what interviewers love to hear as answers and provide our sample answers.

      </>
    ),
  },
  {
    title: 'Get Inspired',
    Svg: require('@site/static/img/ideas.svg').default,
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


      <div className="container ">

        <div className='center center-text' >
          <div className="center-text" >
            <h2 className='' >Upcoming Meetings 📆 </h2></div>
          <table className='center-table'>
            <tr>
              <td>Date</td>
              <td>Time</td>
              <td>Status</td>
              <td>Link</td>
              <td>RSV</td>
            </tr>
            <tr>
              <td>May 11</td>
              <td>3:30 pm - 5:30 pm</td>
              <td>Confirmed</td>
              <td><a target="_blank" href="https://zoom.us/my/afontenelle">Zoom</a></td>
              <td><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc760joQhO5pSklci85Lkxj9Ml4xeZel4HndROHPJQtHnPrVg/viewform?usp=sf_link">RSVP Link</a></td>
            </tr>
          </table>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}

        </div>
      </div>
    </section>
  );
}
