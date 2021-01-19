import React from 'react';

function About(props) {

    return (
        <section id="about">
          <div className="wrapper">
            <article>
              <div className="title">
                <h3>Who's this guy?</h3>
                <p className="separator" />
              </div>
              <div className="desc full">
                <h4 className="subtitle">제 이름은 조용우입니다.</h4>
                <p>
                저는 호기심이 넘치는 프론트 엔지니어입니다.
                </p>
                <p>
                평소에 IQ 테스트와 같은 문제풀이에 관심이 많아서 많이 찾아서 풀어보고는 했습니다. 
                </p>
                <p>어려운 문제가 나와, 시간이 오래 걸려도 끝까지 문제를 해결할 수 있는 방법을 찾아 결국에는 풀어냈습니다. </p>
                <p>이러한 성격때문에 현실에서 어떤 문제에 부딪히게 되면 해결 방법에 대해서 곰곰히 생각해본 뒤, 가장 효율적인 방법으로 문제를 해결하고자 노력하였고, 실력있는 개발자가 되는 목표가 생겼습니다.</p>
                <p>개발자가 되기 위해서 삼성 청년 소프트웨어 아카데미에 지원하여 Java을 사용한 SW 역량 향상 교육과 실제 업무와 유사한 형태의 웹 페이지를 만드는 프로젝트를 수행하면서 협업능력과 문제 해결 역량을 쌓을 수 있었습니다.</p>
                <p>쌓은 경험들은 제 지식의 토대를 더욱 단단하게 만들어 주었고, 실전에 들어 갈 수 있는 인력으로 거듭날 수 있었습니다.</p>

              </div>
              <div className="title">
                <h3>What does he do?</h3>
                <p className="separator" />
              </div>
              <div className="desc">
                <h4 className="subtitle">I'm a programmer.</h4>
                <p>
                  For the front-end I usually work with Javascript, either standalone or including
                  popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass,
                  CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
                </p>
                <p>
                  For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of
                  course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).
                </p>
              </div>
              <div className="desc">
                <h4 className="subtitle">Also a designer.</h4>
                <p>
                  I feel comfortable working with many Adobe products. Photoshop, Illustrator, InDesign,
                  Lightroom or Xd are some kind of industry standards and I love working with them. I'm
                  not limited to them, though: Gimp, Inkscape or Figma are also very valid applications
                  that I've been working with.
                </p>
                <p>
                  User interfaces, brochures, books, branding... You name it! As I mentioned, creating
                  pretty things is particularly important for me.
                </p>
              </div>
            </article>
          </div>
        </section>
      );
}

export default About;