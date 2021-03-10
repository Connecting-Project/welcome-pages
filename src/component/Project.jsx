import React from 'react';
import Springboot from '../assets/springboot.png';
import Golang from '../assets/golang.png';
import Mariadb from '../assets/mariadb.png';

function Project(props) {



    const tech = {
        sass: 'fab fa-sass',
        css: 'fab fa-css3-alt',
        js: 'fab fa-js-square',
        react: 'fab fa-react',
        vue: 'fab fa-vuejs',
        d3: 'far fa-chart-bar',
        node: 'fab fa-node',
        jenkins: 'fab fa-jenkins'
      };
    
      const link = props.link || 'http://';
      const api = props.api || 'http://';
      const web = props.web || 'http://';
    
      return (
        <div className="project">
          <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
            <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
          </a>
          <div className="project-details">
            <div className="project-tile">
              <p className="icons">
                {props.tech.split(' ').map(t => (
                  <i className={tech[t]} key={t} />
                ))}
                {props.tech_r.split(' ').map(tech =>{
                  if(tech === "spring"){
                    return <img className="iconimage" src={Springboot} alt="springboot" key={tech}/>
                  }else if(tech === "golang"){
                    return <img className="iconimage" src={Golang} alt="golang"  key={tech}/>
                  }else if(tech === "mariadb"){
                    return <img className="iconimage" src={Mariadb} alt="mariadb"  key={tech}/>
                  }
                })}
              </p>
              {props.title}{' '}
            </div>
            {props.children}
            <div className="buttons">
              <a href={web} target="_blank" rel="noopener noreferrer">
                Web source <i className="fas fa-external-link-alt" />
              </a>
              <a href={api} target="_blank" rel="noopener noreferrer">
                Api source <i className="fas fa-external-link-alt" />
              </a>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Try it Live <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
        </div>
      );

}

export default Project;