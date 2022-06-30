import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
const axios = require('axios');

const FeatureList = [
  {
    title: 'Bi-Weekly Interview Practice',
    Svg: require('@site/static/img/Bi-Weekly.svg').default,
    description: (
      <>
        We have <Link to="/docs/intro#meetings-" >bi-weekly meetings</Link>  where we practice interview questions (At the moment through Zoom)
      </>
    ),
  },
  {
    title: 'Resources',
    Svg: require('@site/static/img/resources.svg').default,
    description: (
      <>
        We provide a database of <Link to={"resources/interview-questions-gen"}>100+ questions </Link>, We explain what interviewers love to hear as answers and provide our sample answers.

      </>
    ),
  },
  {
    title: 'Get Inspired',
    Svg: require('@site/static/img/ideas.svg').default,
    description: (
      <>
        No idea of what to answer in your job interview? We provide sample answers by our members in <Link to='/blog'>our community blog</Link>!
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


  axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=Snjj7o1JrDIRzPlZ2sevrNPiK_kmiqyXJCt-kVwyL2K6Pp39A2-yEGuMY-Livp6uyNR8LZ80M91dpISHaBCanhIWFgE92JXOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHRM8zQ_PUX009M066sUikE4cqV5RAaEUaa1oRuTe2qN7NJ3VxMlMa2PTg2nZSokMK9IzFgSfWG3Ur3eUxbCELzTo9I5_ZRxpw&lib=MY8oQdIZSM21v0LTsCGPzE3c8Zit1y3bh').then(resp => {

    console.log("Logging Data...")
    console.log(resp.data);
    console.log(resp.data[""])
  });

  return (
    <section className={styles.features}>


      <div className="container ">
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQLrWREhAvFi7EwDRsqPPCfTQ0FEUkzAWxA9taCanxujC-5rFh76AOndYEID716NUoWYz5hR6H4hrqr/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="300px"  ></iframe>

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}

        </div>
      </div>
    </section>
  );
}
