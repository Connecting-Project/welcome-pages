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
                    새로운 도전을 좋아하는 백엔드 개발자입니다.
                </p>

                <p>
                 새내기 시절 놀기 좋아하던 저의 관심을 처음으로 끈 전공 수업은 알고리즘이었습니다. 오로지 제가 직접 코딩한 논리로 새로운 것을 만드는 기분과 깨달은 원리를 코딩으로 실현하는 것에 재미를 느껴 해당 수업에서 1등을 할 정도로 흥미와 열정을 가지고 공부했습니다. 그 수업을 계기로 자신감을 얻어 웹개발과 Arduino를 공부하여 드론을 만들어보며 역량을 키웠습니다.
                </p>
                <p>
                 저는 늘 새로운 기술에 도전했고 아두이노를 사용한 드론, 공공데이터를 활용한 웹사이트, 파이썬을 활용한 빅데이터 모임 장소 추천 시스템 등 의 프로젝트를 해왔습니다. 이렇게 다양한 분야에 걸쳐 많은 시도들을 해왔고 그것이 제 경쟁력이 되었습니다. 
                </p>
                <p>
                 이렇게 여러 기술들에 대해 경험해 보았기에 새로운 기술에 대한 대처가 장점이지만 기존에 제가 가지고 있던 기술들에 대해 소홀하게 될 수 있습니다. 이러한 단점을 보완하기 위해 제가 가지고 있는 핵심 역량에 대하여 이전 프로젝트들을 다시 되새겨보고, 최근 이슈들을 찾아보며 저의 핵심역량을 강화하려 합니다.
                </p>

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
                <p>보이지 않는 곳에서 안정적인 서비스를 위해 노력하는 인프라 개발자입니다.</p>
                <p>모든 IT 산업의 근간은 인프라스트럭처라고 생각합니다. 탄탄하고 안정적인 운영을 위해서는 무엇을 해야하는지 어떻게 구성해야 하는지에 대해 끊임없이 공부하고 탐구합니다.</p>
                <p>한밭대학교 무선통신소프트웨어연구실(Wisoft Lab.)에서 석사과정을 마쳤으며, 모든 연구실의 인프라스트럭처 설계 및 운영을 담담하고 있습니다. 원할한 개발과 운영을 위해 Dev/Ops, Container Cluster, 모니터링, 자동화 시스템이 준비되어 있습니다. 
                  앞으로 우리가 진행할 모든 프로젝트는 제가 설계한 인프라환경에서 동작할 것이며, 경우에 따라 하이브리드, 멀티클라우드 환경을 도입할 것입니다.</p>
                <p>튼튼한 기반을 만들기 위해서 저혼자 모든것을 할 수 있다고 생각하지 않습니다. 같은 길을 걸어가고 있는 우리가 소통과 협력 그리고 타인의 배려가 제가 성장할 수 있는 방법이라고 생각합니다.</p>
                <h4 className="subcontent">역할</h4> 
                <ul> 
                  <li>Application Dockerlize</li>
                  <li>CI/CD</li>
                  <li>인프라스트럭처 설계 및 운영, 모니터링</li>
                </ul>

                <h4 className="subcontent">기술스택</h4> 
                <ul> 
                  <li>golang</li> 
                  <li>Network</li> 
                  <li>OS</li> 
                  <li>Infrastructure</li> 
                  <li>Virtualization, Container</li> 
                  <li>Cluster System</li> 
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
