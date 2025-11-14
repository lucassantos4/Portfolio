
# Portfólio – Lucas Santos

Portfólio pessoal que reúne projetos, habilidades e informações de contato. Feito para apresentar trabalhos de forma clara, responsiva e leve.

---

## Demo (GitHub Pages)

Site publicado em: [https://lucassantos4.github.io/Portfolio]

> Observação: se o site não estiver publicado no GitHub Pages, ignore o link acima e use a seção "Como executar" para rodar localmente.

## Tecnologias

- HTML5
- CSS3 (arquivos: `css/escuro.css`, `css/claro.css`, `css/animations.css`)
- JavaScript (`script.js`)
- Particles.js (CDN) — desativado 

## Estrutura do repositório

Breve visão dos arquivos/folders principais:

```
/
├─ index.html          # página principal
├─ script.js           # lógica de interações e animações
├─ css/
│   ├─ escuro.css
│   ├─ claro.css
│   └─ animations.css
├─ assets/             # imagens, ícones e outros recursos
└─ particlesjs-config.json  //desativado
```

## Como executar (local)

1. Clone o repositório:

```bash
git clone https://github.com/lucassantos4/Portfolio.git
cd Portfolio
```

2. Abrir localmente

- Opção rápida: abrir `index.html` diretamente no navegador.
- Recomendado (para que recursos como fetch e algumas APIs funcionem corretamente): rodar um servidor local:

```bash
python -m http.server 8080
# depois abra http://localhost:8080
```

## O que está incluído

- Seção "Meus projetos" com cards responsivos
- Seção "Sobre mim" com foto e descrição
- Seção "Minhas Skills" com ícones e barras de porcentagem
- Formulário de contato (envia via formsubmit.co)
- Animações leves e microinterações (IntersectionObserver + CSS)

## Melhorias planejadas

- Incluir mais projetos com links publicáveis
- Otimizar imagens (compressão e versões responsivas)
- Testes cross-browser e otimizações de performance
- Adicionar `prefers-reduced-motion` para acessibilidade

## Contribuição

Este repositório é um portfólio pessoal e serve apenas para demonstrar trabalhos e habilidades. O código e os recursos aqui não são destinados ao uso ou redistribuição pública.

Não é necessário abrir pull requests; caso queira entrar em contato sobre algo específico, utilize as informações de contato no site.

## Licença

Todos os direitos reservados. O conteúdo e o código neste repositório são de uso pessoal e não devem ser reutilizados sem autorização explícita do autor.

## Autor

Lucas Santos — desenvolvedor web. Mais informações e contatos estão no próprio site (link acima).