import React from 'react';
import Project from '../component/Project';
import Calculator from '../assets/calculator.JPG';
import Password from '../assets/password.JPG';

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
                title="Calulator-Collection"
                img={Calculator}
                tech="js react css"
                link="https://calculator.hawaiian-pizza.ml/"
                repo="https://github.com/Connecting-Project/calculator"
              >
                <small>Built using React, Spring-Boot, MariaDB and Golang.</small>
                <p>
                  표준 계산기, 전역일 계산기, 경력 계산기, 연봉 계산기, 평수 계산기를 모아둔 페이지.
                </p>
              </Project>
              <Project
                title="Password-Generator"
                img={Password}
                tech="js react css"
                link="https://password.hawaiian-pizza.ml/"
                repo="https://github.com/Connecting-Project/password"
              >
                <small>Built using React, Spring-Boot, MariaDB and Golang.</small>
                <p>
                  랜덤 패스워드를 생성해주는 페이지.
                </p>
              </Project>
            </div>
          </div>
        </section>
      );

}

export default Projects;