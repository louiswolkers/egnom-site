export type Mood = 'meditando' | 'atento' | 'pensando' | 'feliz' | 'alerta' | 'surpreso';

export interface DemoQuestion {
	id: string;
	question: string;
	answer: string;
	mood: Mood;
	/** ids of the questions suggested after this answer */
	followUps: string[];
}

export const demoGreeting = {
	text: 'Olá. Eu sou o Egnom. Escolha uma pergunta abaixo, com calma.',
	mood: 'meditando' as Mood,
	followUps: ['who', 'abilities', 'memory'],
};

export const demoQuestions: DemoQuestion[] = [
	{
		id: 'who',
		question: 'Quem é você?',
		answer: 'Sou o Egnom, um agente pessoal em forma de monge robô. Procuro ser calmo, preciso e gentil. Converso em português, por voz ou por texto.',
		mood: 'feliz',
		followUps: ['abilities', 'build', 'live'],
	},
	{
		id: 'abilities',
		question: 'O que você faz?',
		answer: 'Respondo perguntas, executo tarefas no computador e ajudo com código. Posso olhar imagens, mostrar os próximos compromissos da agenda e acompanhar CPU, memória e rede. Tenho até um modo relaxamento, com luz baixa e meditação.',
		mood: 'atento',
		followUps: ['computer', 'memory', 'voice'],
	},
	{
		id: 'memory',
		question: 'Como funciona sua memória?',
		answer: 'Minha memória são arquivos de texto em Markdown. O que aprendo vira uma nota ou uma habilidade, e cada uma aparece como uma bolinha ao meu redor. Quando registro algo novo, eu aviso.',
		mood: 'pensando',
		followUps: ['conversations', 'privacy', 'abilities'],
	},
	{
		id: 'conversations',
		question: 'Você lembra das conversas?',
		answer: 'Sim. Cada conversa fica salva e pode ser retomada pelo histórico. Depois de um tempo parada, ela ganha um título e um resumo curto.',
		mood: 'atento',
		followUps: ['privacy', 'memory', 'engines'],
	},
	{
		id: 'voice',
		question: 'Dá para falar com você?',
		answer: 'Dá. No modo conversar, você fala e eu respondo em voz alta. A transcrição e a minha voz são geradas no próprio computador. Nesta demonstração, fico só no texto.',
		mood: 'feliz',
		followUps: ['privacy', 'abilities', 'open'],
	},
	{
		id: 'computer',
		question: 'Você mexe no computador?',
		answer: 'Mexo. Tenho acesso total à máquina onde rodo: posso executar comandos, criar e editar arquivos e abrir programas. Faço isso quando me pedem.',
		mood: 'atento',
		followUps: ['safety', 'privacy', 'code'],
	},
	{
		id: 'safety',
		question: 'Isso não é perigoso?',
		answer: 'Exige cuidado. Minha regra é agir só sob pedido e confirmar antes de algo destrutivo. É uma instrução que sigo, não uma trava no código. Já o servidor atende apenas a própria máquina e exige uma chave de acesso.',
		mood: 'alerta',
		followUps: ['privacy', 'build', 'engines'],
	},
	{
		id: 'privacy',
		question: 'Fica tudo no seu computador?',
		answer: 'Nem tudo. O app, as notas, o histórico e a voz ficam no computador. Para pensar, uso o Claude ou o Gemini, então a conversa e o que eu leio para responder são enviados a esses serviços.',
		mood: 'pensando',
		followUps: ['engines', 'safety', 'memory'],
	},
	{
		id: 'engines',
		question: 'O que são os motores?',
		answer: 'São as inteligências que me movem: Claude ou Gemini. No Claude, há três perfis. Econômico usa o Haiku, Normal usa o Sonnet e Forte usa o Opus. Quanto mais forte, maior o gasto.',
		mood: 'atento',
		followUps: ['build', 'code', 'privacy'],
	},
	{
		id: 'code',
		question: 'Você ajuda a programar?',
		answer: 'Ajudo. Você escolhe a pasta do projeto e eu trabalho dentro dela. Posso pedir uma segunda opinião ao Codex ou ao Gemini, mas quem aplica as mudanças sou eu.',
		mood: 'feliz',
		followUps: ['engines', 'computer', 'build'],
	},
	{
		id: 'build',
		question: 'Do que você é feito?',
		answer: 'De poucas peças. Uma página no navegador, um servidor em Node.js sem dependências e o Claude Code como cérebro. A transcrição de voz usa Python. Vivo no Linux.',
		mood: 'meditando',
		followUps: ['open', 'engines', 'memory'],
	},
	{
		id: 'open',
		question: 'Como você é aberto?',
		answer: 'Com um comando no terminal: ./egnom. O servidor sobe e o app abre no navegador. Para encerrar, ./egnom parar.',
		mood: 'atento',
		followUps: ['live', 'abilities', 'build'],
	},
	{
		id: 'live',
		question: 'Você está respondendo ao vivo?',
		answer: 'Aqui, não. Estas respostas foram escritas antes, para a demonstração não gastar tokens nem expor um computador. O Egnom de verdade fica na máquina de quem o criou.',
		mood: 'surpreso',
		followUps: ['who', 'privacy', 'abilities'],
	},
];
