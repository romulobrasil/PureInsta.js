/* ========================================================================
 * Pure Insta JS: pureinsta.js v1.0
 * https://romulobrasil.com
 * Copyright (c) 2016 Rômulo Brasil
 * ========================================================================
 */

const PureInsta = {
    captionTxt: '',
    el: '',
    plus: '',
    data: {
      amount: 25,
      bgPhoto: false,
      classHover: 'pure-insta__hover', 
      classItem: 'pure-insta__item',
      classPlus: '', 
      element: 'PureInsta.js: favor declarar o elemento que vai receber as imagens.', 
      fields: 'caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username', 
      openInsta: false,
      title: 0,
      token: 'PureInsta.js: favor declarar o token.',
    },
    loopInsta(){
      const endpoint = `https://graph.instagram.com/me/media?access_token=${this.data.token}&fields=${this.data.fields}`;
      if(endpoint){
        fetch(endpoint)
          .then(r => r.json())
          .then(r => {
            let out = '';
            let i = 1;
            for(let foto of r.data){
              let fotoURL = (foto.thumbnail_url) ? foto.thumbnail_url : foto.media_url;
              let permalink = (this.data['openInsta']) ? foto.permalink : fotoURL;
              if(foto.caption){
                if(this.data['title'] == 0){
                  this.captionTxt = `<span class="pure-insta__caption">${foto.caption}</span>`;
                } else if(foto.caption.length <= this.data['title']){
                  this.captionTxt = `<span class="pure-insta__caption">${foto.caption.substring(0, this.data['title'])}</span>`;
                } else {
                  this.captionTxt = `<span class="pure-insta__caption">${foto.caption.substring(0, this.data['title'])}...</span>`;
                }
              }
              out += `
              <figure class="${this.data['classItem']}" ${(this.data['bgPhoto']) ? `style="background-image: url(${fotoURL});"`: ``}>
                <a href="${permalink}" title="Ver foto no Instagram" class="pure-insta__target" ${(this.data['openInsta']) ? 'target="_blank"' : ''}>
                  <img src="${fotoURL}" alt="${document.title}"/>`;
              if(this.captionTxt){
                out += `<figcaption class="${this.data['classHover']}">${this.plus} ${this.captionTxt}</figcaption>`;
              }
              out += `</a></figure>`;
              if(i===this.data['amount']){break}else{i++}
            }
            this.el.innerHTML = out;
          });
      }
    },
    init(){
      const obj = arguments[0];
      for(let [key, value] of Object.entries(this.data)){
        if(obj[key]){
          this.data[key] = obj[key];
        } else {
          if(key==='element' || key==='token'){
            console.log(this.data[key]);
          }
        }
      }
      this.el = document.querySelector(this.data['element']);
      if(!this.el){
        console.log('PureInsta.js: favor declarar o elemento que vai receber as imagens.');
      }
      if(this.data['classPlus']){
        this.plus = `<i class="${this.data['classPlus']}"></i>`;
      }
      this.loopInsta();
    }
  }