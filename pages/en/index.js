/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#tutorial">Try It Out</Button>
            {/* <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class TutorialBox extends React.Component {



  render() {

    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    return (
    <div style={{ textAlign:'center', width:400, display: 'inline-block' }}>
    <img style={{width: 80}} src={this.props.imgUrl}/>
    <h2 style={{}}>{this.props.title}</h2>
    <p>Download our model as a docker binary and run it on your own infrastructure. Our docker models come in two flavors, GPU and CPU and can run on almost any platform including embedded devices. foobar</p>
    <a href={docUrl("doc2.html")}><div style={{  display: 'inline-block', justifyContent:'center', alignItems: 'center' ,width: 150, border: '2px solid #546fff', color: '#ffffff',backgroundColor: '#546fff',padding: '8px 10px',borderRadius: 8,'fontSize': 12,fontWeight: 'bold',marginFeft:20,marginTop:20}} > Build  </div></a>
    </div>
    )
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: 'Talk about trying this out',
            image: `${baseUrl}img/od.png`,
            imageAlign: 'left',
            title: 'Try it Out',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/ic.png`,
            imageAlign: 'right',
            title: 'Description',
            href: '/foo'
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block id="tutorial" background="light">
      </Block>
    );

    const Features = () => (
      <Block layout="threeColumn">
        {[
          {
            content:'Use our API with the programming language of your choice (Python, Javascript, Java, .....) and leave the infrastructure management to us. Query the API once or 1 Million times a day and only pay for what you use.',
            image: `${baseUrl}img/api.png`,
            imageAlign: 'top',
            title: 'API',
          },
          {
            content: 'Download our model as a docker binary and run it on your own infrastructure. Our docker models come in two flavors, GPU and CPU and can run on almost any platform including embedded devices.',
            image: `${baseUrl}img/docker.png`,
            imageAlign: 'top',
            title: 'Docker',
          },
          {
            content: 'Download our Mobile SDK for iOS or Android and integrate with your app. Run the model on every users device and make inference instantly. Our models for mobile are ultra optimised for performance.',
            image: `${baseUrl}img/mobile.png`,
            imageAlign: 'top',
            title: 'Mobile SDK',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div >
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
        <h2 id="tutorial" style={{textAlign:'center'}} className="projectTitle">
          <small>Tutorials. Learn how to build your deep learning models with Nanonets.</small>
        </h2>
        <div style={{display:'flex', alignItems: 'center', justifyContent:'center', marginBottom: 5, flexWrap:'wrap'}}>
        <TutorialBox siteConfig={siteConfig} language={language} title="API" imgUrl="/img/od.png"/>
        <TutorialBox siteConfig={siteConfig} language={language} title="Image Classification" imgUrl="/img/ic.png"/>
        <TutorialBox siteConfig={siteConfig} language={language} title="Multilabel Classification" imgUrl="/img/mlc.png"/>
        </div>

        <h2 style={{textAlign:'center', marginTop : 40}} className="projectTitle">
          <small>Easily integrate into your application</small>
        </h2>
        <Features />
        {/* <FeatureCallout /> */}
        {/* <LearnHow />
        <TryOut />
        <Description /> */}
        <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
