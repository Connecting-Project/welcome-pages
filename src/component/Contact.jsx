import React, {useState} from 'react';
import axios from "axios";

import SocialLinks from './SocialLinks';

function Contact(props) {

    const [state, setState] = useState({
      name : '',
      email : '',
      msg : '',
    });

    const onChagneHandler = (e) => {
      const {name , value} = e.target;

      setState({
        ...state,
        [name] : value,
      })
    };

    const onSubmitHandler = () => {
      if(state.name === '' || state.name === '' || state.msg === ''){
        alert('빈 내용이 없는지 확인해주세요.');
      }else{
        alert('전송중입니다. 잠시만 기다려주세요.');
        axios({
          method: `POST`,
          url: `https://hawaiian-pizza.gq/mail?email=${state.email}&name=${state.name}&message=${state.msg}`
        }).then((response)=>{
          alert('메일 전송이 완료되었습니다.');
        }).catch((error)=>{
          alert('메일 전송이 실패하였습니다.');
        });
      }
      
    }

    return (
        <section id="contact">
          <div className="container">
            <div className="heading-wrapper">
              <div className="heading">
                <p className="title">
                  Want to <br />
                  contact me?
                </p>
                <p className="separator" />
                <p className="subtitle">
                  Please, use the form below or send an email to {''}
                  <span className="mail">
                    dpfmxlfls95
                    <i className="fas fa-at at" />
                    naver
                    <i className="fas fa-circle dot" />
                    com
                  </span>
                  :
                </p>
              </div>
              <SocialLinks />
            </div>
            <div id="contact-form">
              <input placeholder="Name" name="name" type="text" required value={state.name} onChange={onChagneHandler} autocomplete="off"/>
              <input placeholder="Email" name="email" type="email" required  value={state.email} onChange={onChagneHandler} autocomplete="off"/>
              <textarea placeholder="Message" type="text" name="msg"  value={state.msg} onChange={onChagneHandler} autocomplete="off"/>
              <input className="button" id="submit" value="Submit" type="submit" onClick={onSubmitHandler}/>
            </div>
          </div>
        </section>
      );
}

export default Contact;