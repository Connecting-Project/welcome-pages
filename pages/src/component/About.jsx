import React from 'react';
import githublogo from '../assets/github_logo.png';
import tistorylogo from '../assets/tistory_logo.png';


function About(props) {

    return (
        <section id="about">
          <div className="wrapper">
            <article>
              <div className="title">
                <h3>Who are these members?</h3>
                <p className="separator" />
              </div>
              <div className="desc full">
                <h4 className="subtitle">제 이름은 조용우입니다.</h4>
                <p>
                저는 호기심이 넘치는 프론트 엔지니어입니다.
                </p>
                <p>현재 가지고 있는 지식으로는 만족을 못하여 실전경험을 쌓을 수 있는 삼성 청년 소프트웨어 아카데미에 지원하여 Java을 사용한 SW 역량 향상 교육과 실제 업무와 유사한 형태의 웹 페이지를 만드는 프로젝트를 수행하면서 협업능력과 문제 해결 역량을 쌓을 수 있었습니다.</p>
                <p>쌓은 경험들은 제 지식의 토대를 더욱 단단하게 만들어 주었고, 실전에 들어 갈 수 있는 인력으로 거듭날 수 있었습니다.</p>
                <h4 className="subcontent">역할</h4> 
                <ul> 
                  <li>Front-end</li>
                </ul>

                <h4 className="subcontent">기술스택</h4> 
                <ul> 
                  <li>Java</li> 
                  <li>React</li> 
                  <li>Jsp</li> 
                  <li>Vue.js</li> 
                </ul>

                <h4 className="subcontent">URL</h4> 
                <p><img className="urllogo" src={githublogo} alt="github" />
                <a href="https://github.com/Choyongwoo95" target="_blank">https://github.com/Choyongwoo95</a></p>
                
                <p><img className="urllogo" src={tistorylogo} alt="tistory" />
                <a href="https://mucus.tistory.com/" target="_blank">https://mucus.tistory.com/</a></p>
              </div>
              
              <div className="desc full">
                <h4 className="subtitle">제 이름은 김수현입니다.</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h4 className="subcontent">역할</h4> 
                <ul> 
                  <li>Back-end</li>
                </ul>

                <h4 className="subcontent">기술스택</h4> 
                <ul> 
                  <li>Java</li> 
                  <li>Spring boot</li> 
                  <li>Vue.js</li> 
                  <li>C++</li>
                  <li>Django</li> 
                </ul>

                <h4 className="subcontent">URL</h4> 
                <p><img className="urllogo" src={githublogo} alt="github" />
                <a href="https://github.com/dlem5133" target="_blank">https://github.com/dlem5133</a></p>
                
              </div>

              <div className="desc full">
                <h4 className="subtitle">제 이름은 이성원입니다.</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h4 className="subcontent">역할</h4> 
                <ul> 
                  <li>CI/CD</li>
                  <li>애플리케이션 Dockerlize</li>
                  <li>애플리케이션 Dockerlize</li>
                </ul>

                <h4 className="subcontent">기술스택</h4> 
                <ul> 
                  <li>golang</li> 
                  <li>network</li> 
                  <li>os</li> 
                  <li>infrastructure</li> 
                  <li>virtualization, container</li> 
                  <li>cluster</li> 
                  <li>IaC (Infrastructure as a Code)</li> 
                  <li>Dev/Ops</li> 
                </ul>

                <h4 className="subcontent">URL</h4> 
                <p><img className="urllogo" src={githublogo} alt="github" />
                <a href="https://github.com/pandora0667" target="_blank">https://github.com/pandora0667</a></p>
                
                <p><img className="urllogo" src={tistorylogo} alt="tistory" />
                <a href="https://judo0179.tistory.com/" target="_blank">https://judo0179.tistory.com/</a></p>
              </div>
            </article>
          </div>
        </section>
      );
}

export default About;