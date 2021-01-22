import React from 'react';
import Project from '../component/Project';

function Projects(props) {

    return (
        <section id="projects">
          <div className="projects-container">
            <div className="heading">
              <h3 className="title">Our Works</h3>
              <p className="separator" />
              <p className="subtitle">
                여기에는 저희들이 평소에 하고 싶었던 주제로 만든 프로젝트들이 있습니다. 협업툴인 Notion과 Slack을 사용하여 프로젝트를 원활하게 진행했고, 각자 맡은 역할을 수행했습니다.
              </p>
            </div>
            <div className="projects-wrapper">
              <Project
                title="프로젝트 제목"
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Documentify.jpg'}
                tech="js react css"
                link=""
                repo=""
              >
                <small>Built using React and CSS.</small>
                <p>
                  프로젝트 설명
                </p>
              </Project>
            </div>
          </div>
        </section>
      );

}

export default Projects;