/* ========================================================================
 * Pure Insta JS: pureinsta.js v0.3
 * https://romulobrasil.com
 * Copyright (c) 2016 Rômulo Brasil
 * ========================================================================
 */

'use strict';
var PureInsta = function() {
    return {
        init : function() {
            var obj        = arguments;
            var classList  = '';
            var classHover = '';
            var classPlus  = '';
            var classOpen  = '';
            var titulo     = '';
            var images     = '';

            if (obj[0].element === 'undefined') {
                console.log('PureInsta.js: Elemento não declarado, favor olhar documentação');
            } else {
                var el = document.querySelector(obj[0].element);
            }

            if (obj[0].quantidade === 'undefined') {
                var quant = 20;
            } else if (obj[0].quantidade > 20 ) {
                var quant = 20;
                console.log("PureInsta.js: quantidade está acima de 20. Quantidade máxima de 20 fotos.");
            } else {
                var quant = obj[0].quantidade;
            }

            if ( obj[0].userID === undefined ) {
                console.log("PureInsta.js: Paramentro de User ID não foi definido");
            } else {
                var id = obj[0].userID;
            }

            if (obj[0].accessToken === undefined) {
                console.log("PureInsta.js: Paramentro de Access Token não foi definido");
            } else {
                var token = obj[0].accessToken;
            }

            if (obj[0].classList === undefined) {
                classList = 'pureInsta-item';
            } else {
                classList = obj[0].classList;
            }

            if (obj[0].classHover === undefined) {
                classHover = 'pureInsta-hover';
            } else {
                classHover = obj[0].classList;
            }

            if (obj[0].classPlus === undefined) {
                classPlus = '';
            } else {
                classPlus = '<span class="' + obj[0].classPlus + '"></span>';
            }

            var xmlhttp = new XMLHttpRequest();
            var url = 'https://api.instagram.com/v1/users/' + id + '/media/recent/?access_token=' + token;
            console.log(url);

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var json = JSON.parse(xmlhttp.responseText);
                    loopInsta(json);
                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();

            function loopInsta(arr) {
                var out = "";
                var i;
                console.log(arr);

                for(i = 0; i < quant; i++) {
                    if (obj[0].openInsta === undefined || obj[0].openInsta === false) {
                        classOpen = arr.data[i].images.standard_resolution.url; 
                    } else {
                        classOpen = arr.data[i].link;
                    }

                    if (obj[0].images === undefined) {
                        images = arr.data[i].images.low_resolution.url; 
                    } else {
                        if (obj[0].images === 'low') {
                            images = arr.data[i].images.low_resolution.url; 
                        } else if (obj[0].images === 'thumbnail') {
                            images = arr.data[i].images.thumbnail.url; 
                        } else if (obj[0].images === 'standard') {
                            images = arr.data[i].images.standard_resolution.url; 
                        }
                    }

                    if (obj[0].titulo === undefined) {
                        titulo = '';
                    } else {
                        var length = obj[0].titulo;
                        var str =  '';
                        var caption = arr.data[i].caption;

                        if (caption !== null ) {
                            str = caption.text;

                            if (length === 0) {
                                titulo = '<p>' + str + '</p>';
                            } else if (str.length <= length) { 
                                titulo = '<p>' + str.substring(0, length) + '</p>';
                            } else {
                                titulo = '<p>' + str.substring(0, length) + '...' + '</p>';
                            }
                        } else {
                            titulo = '';
                        }
                    }

                    out += '<li class="'+ classList +'">' +
                        '<a href="' + classOpen + '" target="_blank" class="pureInsta-target">' + 
                        '<figure>' +
                        '<img src="' + images + '" alt=""/>' + 
                        '</figure>' +
                        '<div class="' + classHover + '">' + 
                        classPlus + 
                        titulo + 
                        '</div>' + 
                        '</a>' + 
                        '</li>';
                }

                el.innerHTML = out;
            }
        }
    };
}();