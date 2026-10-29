# Seu Primeiro App com IA

Roteiro de uma oficina curta de **prototipagem com IA**: em cerca de uma hora, cada participante descreve um app em português, a IA escreve o código e ele testa a tela funcionando no navegador.

O app da oficina é o **PetBites**, um delivery de produtos para pets. No final, cada um transforma o protótipo no negócio que quiser.

- **Duração:** 85 minutos de roteiro + até 30 minutos de margem
- **Público:** ensino médio, sem pré-requisito de programação
- **Ferramenta:** Gemini com Canvas (nada para instalar)
- **Entrega do participante:** um protótipo interativo próprio, exportável como link ou arquivo

Este guia tem dois modos: **Participante** (o passo a passo) e **Professor** (condução, tempos, falas de impacto e planos B). O modo professor também traz um cronômetro por etapa.

---

## Agenda

| # | Etapa | Tempo |
|---|-------|-------|
| 1 | Boas-vindas e efeito uau | 10 min |
| 2 | O que é prototipagem com IA? | 10 min |
| 3 | Mão na massa: gerando o protótipo | 25 min |
| 4 | Customização e iteração | 25 min |
| 5 | Encerramento | 15 min |
| — | Margem para dúvidas e atrasos | até 30 min |

Metade do tempo é prática: 50 dos 85 minutos são mão na massa.

---

## Etapa 1 — Boas-vindas e efeito uau (10 min)

Comece pelo resultado, não pela teoria.

1. **2 min** — Apresentação e, em uma frase, o que um analista ou engenheiro de software faz no dia a dia.
2. **1 min** — Pergunte quem já teve ideia de um app. Peça duas ou três ideias em voz alta e **guarde-as** para o Desafio 3.
3. **4 min** — Cole o Prompt Mestre no Gemini, no projetor, e deixe a turma ver o código sendo escrito. Clique em "Adicionar" e mostre o contador subindo.
4. **3 min** — Frase de impacto e QR Code do guia.

> "Vocês vão sair daqui hoje com um protótipo igual a este rodando no seu navegador. E depois, com o app de vocês."

**Se a geração travar:** use a conversa do Gemini já preparada ou a prévia do PetBites no topo do guia.

---

## Etapa 2 — O que é prototipagem com IA? (10 min)

Teoria curta, que vira ferramenta na mesma hora.

**Protótipo** é uma versão de teste do app: mostra como a tela fica e o que acontece ao clicar, sem banco de dados, pagamento ou login de verdade. Empresas prototipam para descobrir se a ideia é boa **antes** de gastar meses programando — se o usuário se perde na tela, é muito mais barato corrigir agora.

A IA acelera essa etapa, mas quem decide o que pedir é você. Daí os **3 pilares do prompt**:

| Pilar | O que é | Exemplo |
|-------|---------|---------|
| **Papel** | Quem a IA deve ser | "Atue como um designer UX/UI…" |
| **Contexto** | O que você precisa e para quem | "Preciso de uma tela para um app de…" |
| **Restrição** | Formato e regras da entrega | "Gere um código HTML completo no Canvas…" |

No guia há um **construtor de prompt**: os participantes preenchem os três pilares e veem a frase se formar. Comparação que funciona bem: é como pedir algo a uma pessoa nova no trabalho — "faz um app" não diz por onde começar. Nesta etapa ninguém cola o prompt ainda; serve só para entender a estrutura.

---

## Etapa 3 — Mão na massa: gerando o protótipo (25 min)

1. Entrar em `gemini.google.com` com a conta Google e ativar o **Canvas** na caixa de mensagem.
2. Colar o **Prompt Mestre** e enviar.
3. Testar: clicar em "Adicionar ao Carrinho" e conferir se o contador sobe e o aviso aparece. Se algo falhar, contar à IA o que aconteceu — isso também é programar.

### Prompt Mestre

```
Atue como um desenvolvedor UX/UI especialista. Crie no Canvas uma interface
interativa e moderna para a tela de um aplicativo móvel chamado 'PetBites'
(delivery de produtos para pets).

A interface deve incluir:
1. Um cabeçalho com a marca 'PetBites' e um ícone de carrinho com contador de
   itens, começando em 0.
2. Uma barra de busca visual.
3. Dois cards de produtos: 'Ração Premium Cães' (R$ 80) e 'Petisco Gatos'
   (R$ 15), cada um com o botão 'Adicionar ao Carrinho'.
4. Ao clicar em 'Adicionar ao Carrinho', o contador do topo soma +1 e aparece
   um aviso de confirmação na própria tela (um balão que some sozinho depois
   de 2 segundos), sem usar a janela de alerta do navegador.
5. Estilo amigável em tons de laranja e branco, com layout de celular
   centralizado na tela.

Monte essa interface totalmente interativa, em um único arquivo HTML,
diretamente na janela do Canvas.
```

O prompt pede um balão na tela em vez de um alerta do navegador de propósito: algumas prévias bloqueiam a janela de alerta e o botão parece quebrado.

### Condução

- **0–5 min** — Todos entram no Gemini. Circule resolvendo acesso; quem não conseguir entra em dupla.
- **5–15 min** — Colar o prompt e aguardar a geração. Mostre no projetor onde fica o Canvas.
- **15–25 min** — Testar. Peça para levantarem a mão quando o contador funcionar e comemore os primeiros.

### Deu errado? Comece por aqui

| Sintoma | O que fazer |
|---------|-------------|
| O Canvas não abriu, só veio código no chat | Escrever: "Abra esse código no Canvas para eu ver a prévia." |
| O botão não faz nada | Escrever: "Quando clico em Adicionar ao Carrinho nada acontece. Corrija para o contador somar +1." |
| O visual ficou diferente do colega | Normal, a IA não repete respostas. O que importa é ter cabeçalho, busca, dois cards e contador funcionando. |
| Não consigo entrar no Gemini | Fazer em dupla, revezando quem digita a cada desafio. |

---

## Etapa 4 — Customização e iteração (25 min)

Cada pedido no chat atualiza o Canvas. É uma **iteração**: melhorar em pequenos passos, testando a cada mudança.

**Desafio 1 · Design e UX (7 min, junto no projetor)**

> Mude a interface para Modo Escuro (Dark Mode), mantendo o laranja como cor de destaque. Adicione um botão de coração em cada card de produto: ao clicar, o coração fica preenchido; ao clicar de novo, volta a ficar vazio.

Aproveite para mostrar que pedir **uma coisa de cada vez** dá resultado melhor do que pedir tudo junto.

**Desafio 2 · Nova funcionalidade (8 min, sozinhos)**

> Adicione no final da tela um campo para digitar um Cupom de Desconto e um botão 'Aplicar'. Se o cupom for PET10, mostre na tela "Cupom aplicado: 10% de desconto". Para qualquer outro código, mostre "Cupom inválido".

Ao terminar, pergunte: *"E se alguém digitar pet10 em minúsculas?"* — abre a conversa sobre testar casos e regras de negócio.

**Desafio 3 · O app é seu (10 min)**

> Transforme este app em uma loja de [tipo do seu negócio] chamada '[nome]'. Troque os produtos por [produto 1] e [produto 2] com preços em reais, e mude as cores para [cores]. Mantenha o carrinho, o favorito e o cupom funcionando.

Retome as ideias que surgiram na abertura e chame 2 ou 3 voluntários para mostrar no projetor.

**Bônus · para quem terminar antes**

> Ao clicar no ícone do carrinho, abra um painel listando os produtos adicionados e o valor total em reais. Se um cupom válido tiver sido aplicado, mostre o total com desconto.

---

## Etapa 5 — Encerramento (15 min)

**Levar o app para casa (3 min).** Compartilhar pelo Canvas para gerar um link; ou copiar o código, salvar como `meu-app.html` e abrir com dois cliques em qualquer navegador. A conversa fica no histórico do Gemini e pode continuar depois.

**Pense nisto (4 min).** Deixe a turma tentar responder, sem exigir resposta certa:

- Onde ficam guardados os pedidos de mil clientes ao mesmo tempo?
- Como impedir que alguém invente um cupom de 100%?
- O que acontece se o pagamento cair no meio da compra?

> A IA fez a tela. Responder essas perguntas é trabalho de quem estuda desenvolvimento de software.

**Gancho para a graduação (3 min).** Apresente os caminhos — Análise e Desenvolvimento de Sistemas (construir e entregar sistemas) e Engenharia de Software (projetar sistemas grandes e confiáveis) — com duração, modalidade e datas de inscrição da sua unidade.

> "Criar o protótipo com IA é rápido. Saber quais problemas resolver, como estruturar os dados, garantir a segurança e projetar sistemas grandes é o que você aprende na graduação."

**Perguntas e respostas (5 min ou mais).** Use a margem se a conversa render.

---

## Checklist antes da aula

- [ ] Testei o Prompt Mestre no Gemini, no mesmo dia, e o Canvas abriu
- [ ] Confirmei com a coordenação se os alunos têm conta Google com acesso ao Gemini (idade e contas escolares)
- [ ] Wi-Fi testado com a turma inteira conectada
- [ ] Link do guia encurtado e em QR Code no primeiro slide
- [ ] Uma conversa do Gemini já pronta com o PetBites, caso a geração ao vivo demore
- [ ] Plano de duplas para quem estiver sem conta ou sem computador
- [ ] Material de divulgação dos cursos à mão para o fechamento

No guia, o checklist fica marcado no próprio navegador.

---

## Palavras de hoje

- **Protótipo** — versão de teste de um app, feita para validar a ideia antes de construir tudo.
- **UX** — experiência do usuário: se o app é fácil, claro e agradável de usar.
- **UI** — interface do usuário: a parte visual, como cores, botões e textos.
- **Prompt** — a instrução que você escreve para a IA.
- **HTML, CSS e JS** — as três linguagens das páginas web: estrutura, estilo e comportamento.
- **Iteração** — melhorar o produto em ciclos curtos: pedir, testar, ajustar.

---

Oficina de prototipagem com IA · UniSENAI MT
