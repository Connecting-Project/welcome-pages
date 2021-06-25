import React from 'react';
import Project from '../component/Project';
import Calculator from '../assets/calculator.JPG';
import Password from '../assets/password.JPG';
import Login from '../assets/login.JPG';
import Inventory from '../assets/inventory.png';
import Meeting from '../assets/meeting.PNG';
import Random from '../assets/random-box.png';
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
                title="Random-Box"
                img={Random}
                tech="js react css jenkins docker"
                link="https://rdbox.hawaiian-pizza.space/"
                api="https://github.com/Connecting-Project/rdbox"
                web="https://github.com/Connecting-Project/rdbox"
                tech_r="spring mariadb"
              >
                <small>Built using React, Spring-Boot, MariaDB, Kakao-api and Jenkins.</small>
                <p>
                  게임 프롤로 러쉬 이벤트 사이트, 랜덤으로 상품 추첨하여 수령하는 사이트.
                </p>
              </Project>
              <Project
                title="Calculator-Collection"
                img={Calculator}
                tech="js react css docker"
                link="https://calculator.hawaiian-pizza.space/"
                api="https://github.com/Connecting-Project/calculator-api"
                web="https://github.com/Connecting-Project/calculator-web"
                tech_r="spring golang mariadb"
              >
                <small>Built using React, Spring-Boot, MariaDB and Golang.</small>
                <p>
                  표준 계산기, 전역일 계산기, 경력 계산기, 연봉 계산기, 평수 계산기를 모아둔 페이지.
                </p>
              </Project>
              <Project
                title="Password-Generator"
                img={Password}
                tech="js react css docker"
                link="https://password.hawaiian-pizza.space/"
                api="https://github.com/Connecting-Project/password-api"
                web="https://github.com/Connecting-Project/password-web"
                tech_r="spring golang mariadb"
              >
                <small>Built using React, Spring-Boot, MariaDB and Golang.</small>
                <p>
                  랜덤 패스워드를 생성해주는 페이지.
                </p>
              </Project>
              <Project
                title="Login-Page"
                img={Login}
                tech="js react css jenkins docker"
                link="https://login.hawaiian-pizza.space/"
                api="https://github.com/Connecting-Project/login-api"
                web="https://github.com/Connecting-Project/login-web"
                tech_r="spring mariadb"
              >
                <small>Built using React, Spring-Boot, MariaDB and Jenkins.</small>
                <p>
                  소셜 로그인, 로컬로그인을 할 수 있는 페이지.
                </p>
              </Project>
              <Project
                title="Inventory-Management"
                img={Inventory}
                tech="js react css jenkins docker"
                link="https://inventory.hawaiian-pizza.space/"
                api="https://github.com/Connecting-Project/inventory-api"
                web="https://github.com/Connecting-Project/inventory-web"
                tech_r="spring mariadb"
              >
                <small>Built using React, Spring-Boot, MariaDB and Jenkins.</small>
                <p>
                  재고를 관리하는 관리자, 재고를 대여하고 반납하는 사용자 페이지.
                </p>
              </Project>

              <Project
                title="meeting"
                img={Meeting}
                tech="js node css jenkins docker"
                link="https://meet.hawaiian-pizza.space/"
                api="https://github.com/Connecting-Project/meet"
                web="https://github.com/Connecting-Project/meet"
                tech_r="webrtc"
              >
                <small>Built using Javascript, Node, Web-Rtc, docker and Jenkins.</small>
                <p>
                  WEB-RTC 기반 화상회의 페이지
                </p>
              </Project>
            </div>
          </div>
        </section>
      );

}

export default Projects;