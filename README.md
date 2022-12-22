<p align="center">
  <a href="https://romulobrasil.com" target="_blank" title="Acessar o site Rômulo Brasil">
  <img width="200" height="146" src="https://romulobrasil.com/img/logo.png"/>
  </a>
</p>

# Pure Insta JS (pureinsta.js)

Mais um para série de plugins feito plenamente com Javascript pure e esse é um bem simples que brincamos com a API do Instagram trazendo sua lista de fotos.

Bom, abaixo trataremos de como fazer para instanciar o nosso plugin.

Primeiramente declaramos uma lista com um ID ou uma class de sua preferência:

```
<div id="instagram"></div>
```

Segundo chamamos da nosso plugin da pasta do seu projeto e em seguinda o instaciaremos com alguns paramentros que falaremos logo após

```
<script src="pureinsta.js"></script>
<script>
  PureInsta.init({
    element: '#instagram',
    token: 'Seu Access Token aqui',
    amount: 10,
    classList: 'instagram-item',
    classHover: 'instagram-item--hover',
    classPlus: 'fa-lupa',
    fields: 'caption,id,media_type,media_url,permalink,thumbnail_url',
    openInsta: true,
    title: 80,
  });
</script>
```

Temos dois pararametros que são primordiais para que nosso plugin funcionar, são eles: _element_ e _token_.

### Abaixo falaremos de cada um deles:

#### 1. element

Tag HTML que irar receber a lista de imagens do Instagram podendo ser _class_ ou _id_.

#### 2. accessToken

Seu Token de acesso à sua conta do Instagram. Basta acessar o link: <https://developers.facebook.com/apps>. Caso tenha alguma dificudade ou dúvida, pode acessar esse video que está bem explicativo <https://www.youtube.com/watch?v=E8linFMAoQk>.

#### 3. amount

Quantidade de imagens que deveremos trazer da sua conta do Instagram. <br>
Quantidade máxima permitida pelo Instagram é de 25 fotos, sendo as 25 últimas postadas. Ou seja, poderá escolher apenas de 1 a 25 fotos. Caso deixe de declarar o amount, irá puxar todas as últimas 25 fotos.

#### 4. bgPhoto (optional)

Para caso queira que a foto também no background do elemento _figure_ assim facilitando a melhor estilização no CSS.

#### 5. classHover (optional)

Class para fazer um hover que também ficam de container para o título, o nome da class é de sua preferência, caso não a declare fica a default que é _pure-insta\_\_hover_.

#### 6. classItem (optional)

Class do item de sua preferencia, caso não a declare fica a default que é _pure-insta\_\_item_.

#### 7. classPlus (optional)

Class para colocar uma lupa ou um símbolo de mais, isso fica de sua preferencia.

#### 8. fields (optional)

1. **caption** - O texto da legenda da foto.
2. **id** - O ID da foto.
3. **media_url** - URL da foto.
4. **permalink** - A URL permanente da foto. Será omitido se a mídia contiver material protegido por direitos autorais ou tiver sido sinalizada por violação de direitos autorais.
5. **thumbnail_url** - URL da imagem em miniatura da mídia. Disponível apenas para post de video.

#### 8. title (optional)

Indica quantidade de caracteres que será exibido os títilos assim evita quebra de layout, caso declare o número _zero_, 0, ou deixe de declarar, o título ficará sem qualquer limite de caracteres.

#### 9. openInsta (optional)

Declaração booleana com apenas _true_ para abrir em outra janela o link da foto dentro do Instagram e no caso não seja declarado vem a imagem em sua resolução maior e com uma class chamada _pure-insta\_\_target_ que você pode usar em um plugin de modal.

### Acesse: <https://romulobrasil.com>
