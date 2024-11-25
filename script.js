// script.js

// Capturando os botões e a área de conteúdo
const botoes = document.querySelectorAll('.botao');
const conteudo = document.getElementById('conteudo');

// Definindo os diferentes conteúdos que podem ser exibidos para cada botão
const conteudos = [
    "<h2>Conteúdo do Botão 1</h2><ul></li><p>Honda Tadakatsu, 29 anos, nasceu na Cidade Meteoro, onde desde jovem se destacou como um lutador briguento. Frequentando o consultório do pai de Kanji devido a ferimentos de suas brigas, ele se tornou amigo de Kanji, que decidiu aprender as técnicas médicas de seu pai para ajudar o amigo. Essa dedicação fortaleceu um vínculo inquebrável entre eles. Juntos, eles se tornaram membros fundadores da Trupe Fantasma, onde Honda se destacou por sua lealdade inabalável ao líder da organização, um fator decisivo que fez Kanji permanecer na Trupe, apesar de suas reservas.Atualmente, Honda é um lutador renomado na Arena Celestial, combinando técnicas de defesa e ataque com a promessa feita a Kanji de não se machucar tanto quanto antes. Ele é conhecido por sua habilidade de lutar no topo da Arena, descendo apenas quando seus amigos da Trupe precisam de ajuda. A lealdade de Honda ao líder da Trupe é notável e reflete seu comprometimento com a organização e seus aliados.Intenso e determinado, Honda é guiado por um forte senso de honra e o desejo de proteger aqueles que ama. Sua natureza briguento evoluiu para uma abordagem mais equilibrada, mas ele continua a ser um combatente respeitado e um amigo confiável, sempre pronto para apoiar seus companheiros e honrar suas promessas. </p><li> </li><p><a href='https://docs.google.com/document/d/17sX8nf1Vqr0CPK5pM9MUZB9Z1joyZxCRtyqflxk0vxU/edit' target='_blank' >Hatsu</a></p><li> </li><p><a href='https://docs.google.com/document/d/1-XGas7sVKWtkFM8hxFe0VRhl8i-FcUNM6liWDnniT5I/edit?usp=drivesdk' target='_blank'>Ficha</a></p><li> </li><p><a href='https://docs.google.com/document/d/14xKUButwUIH7hsF_qsUtjSLT_ll1Tesu6XZZUK7wI5k/edit?usp=sharing' target='_blank'>Lore</a></p><li>",

    "<h2>Conteúdo do Botão 2</h2><ul><li><p>Nome:</li> </li><p> idade: </p><li> </li><p> descrição </p><li> </li><p><a href='#'>Hatsu</a></p><li> </li><p><a href='#'>Ficha</a></p><li> </li><p><a href='#'>Lore</a></p><li>",

    "<h2>Conteúdo do Botão 3</h2><ul> </li><p> Kanji Ryo, 30 anos, nasceu na Cidade Meteoro, um lugar caótico e fora dos registros oficiais. Filho do respeitado médico Dr. Hiroshi Ryo, Kanji cresceu observando seu pai tratar pacientes com métodos pouco convencionais, enquanto lutava contra seu próprio vício em cigarro. Essas experiências moldaram suas habilidades de Nen e seu estilo único de cura e manipulação. Durante a infância, Kanji se tornou amigo de Honda, um garoto briguento que frequentemente se machucava e ia ao consultório de seu pai. Quando Dr. Hiroshi começou a se recusar a atender Honda, Kanji decidiu estudar as técnicas médicas de seu pai para ajudar o amigo, fortalecendo assim o vínculo entre eles. Mais tarde, ambos se tornaram membros fundadores da Trupe Fantasma, uma organização criminosa temida, onde desempenhavam papéis cruciais. Apesar da política da Trupe de não agredir os moradores da Cidade Meteoro, a lealdade de Honda ao líder da organização foi um dos principais motivos que fizeram Kanji continuar na Trupe, mesmo enfrentando suas próprias ambivalências e conflitos internos. </p><li> </li><p><a href='https://docs.google.com/document/d/18OY3SFp7txWjsMkbhcwMz2JjM7VCdkX3gJnsZVfS6D8/edit?usp=sharing' target='_blank'>Hatsu</a></p><li> </li><p><a href='https://docs.google.com/document/d/1WkrHbwPqELMIO5AKI20rkPAFPBVZiPh3TKl_oNWZpFg/edit?usp=sharing' target='_blank'>Ficha</a></p><li> </li><p><a href='https://docs.google.com/document/d/1Hg3F0kPbRoxHTKrWuGNdkT88liGY-8qXw8Kmo6b2TS8/edit?usp=sharing' target='_blank'>Lore</a></p><li>",

    "<h2>Conteúdo do Botão 4</h2><ul><p> Freya Eisenhart, com 22 anos, é uma prodígio do Nen que despertou seus poderes desde cedo. Nascida em uma família mafiosa, seu pai, um dom ambicioso, a utilizava como ferramenta para aumentar sua influência, mantendo suas habilidades em segredo para protegê-la de ameaças.Ela possui a habilidade Storehouse (Emissão), que lhe permite criar uma dimensão de bolso para armazenar objetos, suprimentos e até prisioneiros, acessando essa dimensão por meio de uma chave especial que sempre carrega. Isso a torna uma peça valiosa tanto para a máfia quanto para a Trupe Fantasma.Forçada a se juntar às Bestas das Sombras, a organização de proteção da máfia, seu pai impôs que ela aceitasse missões sozinha para esconder sua habilidade, isolando-a e criando desconfiança entre os outros membros. Essa experiência a transformou em uma guerreira solitária, acostumada a depender apenas de si mesma, até que, após um confronto com o líder da Trupe Fantasma, foi convidada a se juntar ao grupo, tornando-se a Quarta Aranha. </p><li> </li><p><a href='https://docs.google.com/document/d/1ujApX091LaSNKdOqpJwP1E2JBWGD4X3azDTpfH4iNDQ/edit' target='_blank'>Hatsu</a></p><li> </li><p><a href='#'>Ficha</a></p><li> </li><p><a href='https://docs.google.com/document/d/1OsmABJzXTfseyLXmOtLWxRI97Ox8X1pWw1Sw4FWudZk/edit?usp=sharing' target='_blank' >Lore</a></p><li>",

    "<h2>Conteúdo do Botão 5</h2><ul><li><p>Nome:</li> </li><p> idade: </p><li> </li><p> descrição </p><li> </li><p><a href='#'>Hatsu</a></p><li> </li><p><a href='#'>Ficha</a></p><li> </li><p><a href='#'>Lore</a></p><li>",

    "<h2>Conteúdo do Botão 6</h2><ul><li><p>Nome:</li> </li><p> idade: </p><li> </li><p> descrição </p><li> </li><p><a href='#'>Hatsu</a></p><li> </li><p><a href='#'>Ficha</a></p><li> </li><p><a href='#'>Lore</a></p><li>",

    "<h2>Conteúdo do Botão 7</h2><ul><li><p>Nome:</li> </li><p> idade: </p><li> </li><p> descrição </p><li> </li><p><a href='#'>Hatsu</a></p><li> </li><p><a href='#'>Ficha</a></p><li> </li><p><a href='#'>Lore</a></p><li>",

    "<h2>Conteúdo do Botão 8</h2><ul><li><p>Nome:</li> </li><p> idade: </p><li> </li><p> descrição </p><li> </li><p><a href='#'>Hatsu</a></p><li> </li><p><a href='#'>Ficha</a></p><li> </li><p><a href='#'>Lore</a></p><li>",

    "<h2>Conteúdo do Botão 9</h2><ul><li><p>Nome:</li> </li><p> idade: </p><li> </li><p> descrição </p><li> </li><p><a href='#'>Hatsu</a></p><li> </li><p><a href='#'>Ficha</a></p><li> </li><p><a href='#'>Lore</a></p><li>",

    "<h2>Conteúdo do Botão 10</h2><ul><li><p>Nome:</li> </li><p> idade: </p><li> </li><p> descrição </p><li> </li><p><a href='#'>Hatsu</a></p><li> </li><p><a href='#'>Ficha</a></p><li> </li><p><a href='#'>Lore</a></p><li>",

    "<h2>Conteúdo do Botão 11</h2><ul><li><p>Nome:</li> </li><p> idade: </p><li> </li><p> descrição </p><li> </li><p><a href='#'>Hatsu</a></p><li> </li><p><a href='#'>Ficha</a></p><li> </li><p><a href='#'>Lore</a></p><li>",

    "<h2>Conteúdo do Botão 12</h2><ul><li><p>Nome:</li> </li><p> idade: </p><li> </li><p> descrição </p><li> </li><p><a href='#'>Hatsu</a></p><li> </li><p><a href='#'>Ficha</a></p><li> </li><p><a href='#'>Lore</a></p><li>",
    
];

// Função para alterar o conteúdo e o estado ativo do botão
function mudarConteudo(e) {
    // Remove a classe 'ativo' de todos os botões
    botoes.forEach(botao => botao.classList.remove('ativo'));

    // Adiciona a classe 'ativo' ao botão clicado
    e.target.classList.add('ativo');

    // Atualiza o conteúdo com base no índice do botão clicado
    const index = e.target.getAttribute('data-index');
    conteudo.innerHTML = conteudos[index];
}

function selecionarBotao(id) {
    // Remove a classe "selecionado" e "reduzido" de todos os botões
    var botoes = document.querySelectorAll('.botao');
    botoes.forEach(function(botao) {
        botao.classList.remove('selecionado');
        botao.classList.add('reduzido');
    });

    // Adiciona a classe "selecionado" ao botão clicado
    var botaoSelecionado = document.getElementById('botao' + id);
    botaoSelecionado.classList.add('selecionado');
    botaoSelecionado.classList.remove('reduzido');
}


// Adicionando o evento de clique a todos os botões
botoes.forEach(botao => {
    botao.addEventListener('click', mudarConteudo);
});