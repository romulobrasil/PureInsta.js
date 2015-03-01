<p align="center">
  <a href="http://romulobrasil.com">
    <img height="220" width="300" src="http://romulobrasil.com/wp-content/themes/romulobrasil.com/img/logo.png"/>
  </a>
</p>


Pure Insta JS (pureinsta.js)
==========

Mais um para série de plugins feito plenamente com Javascript pure e esse é um bem simples que brincamos com a API do Instagram trazendo sua lista de fotos com titulo (optional) e futuramente implementaremos o as curtidas também.

Bom, abaixo trataremos de como fazer para instanciar o nosso plugin. 

Primeiramente declaramos uma lista com um ID ou uma class de sua preferência:

```
<ul id="pure_insta"></ul>
```

Segundo chamamos da nosso plugin da pasta do seu projeto e em seguinda o instaciaremos com alguns paramentros que falaremos logo após 

```    
<script src="pureinsta.js"></script>
<script>
    PureInsta.init({
        element:'#pure_insta',
        amount: 8,
        userID:'yournumber',
        accessToken:'yournumber',
        classList: 'list',
        classHover: 'hover',
        classPlus: 'lupa',
        images: 'low',
        title: 300,
        openInsta: true
    });
</script>
```

Temos quatros pararametros que são primordiais para que nosso plugin funcione que são eles: element, amount, userID e accessToken.

###Abaixo falaremos de cada um deles:

#### 1. element
Elemento (lista) que irar receber nossa lista de imagens do Instagram podendo ser class ou id. 

#### 2. amount
Quantidade de imagens que deveremos trazer do seu profile. 

#### 3. userID e accessToken
Seu id do Instagram e o Token de acesso ao seu profile se você não sabe pode acessar um dos links abaixo que lá você pegar. 

<a href="http://www.pinceladasdaweb.com.br/instagram/access-token/">http://www.pinceladasdaweb.com.br/instagram/access-token</a>

<a href="http://jelled.com/instagram/access-token">http://jelled.com/instagram/access-token</a>

<a href="https://instagram.com/developer/authentication/">https://instagram.com/developer/authentication/</a>

#### 4. classList (optional)
Class da lista de sua preferencia caso não a declare fica a default que é pureInsta-item

#### 5. classHover (optional)
Class da uma div caso queira fazer um hover que também ficam de container para o título de nome sua preferencia que caso não a declare fica a default que é pureInsta-hover

#### 6. classPlus (optional)
Class para colocar uma lupa ou um símbolo de mais, isso fica de sua preferencia

#### 7. images (optional)
Por default é declarado o tamanho low mas caso queira declarar outro logo abaixo tem como fazer isso com os três tamanhos existentes na API:
 - low: width:306 | height:306;
 - thumbnail: width:150 | height:150;
 - standard: width:640 | height:640;

#### 8. title (optional)
Juntamente com um número inteiro pois indica quantidade de caracteres que será exibido os títilo assim evita quebra de layout, caso declare o número zero (0) virar o título sem qualquer limite de caracteres. 

#### 9. openInsta (optional)
Declaração booleana com apenas true para abrir em outra janela o link da foto dentro do Instagram e no caso não seja declarado vem a imagem em sua resolução maior e com uma class chamada pureInsta-target que você pode usar em um plugin de modal.










