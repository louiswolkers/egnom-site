export const siteInfo = {
	name: 'EGNOM',
	title: 'EGNOM · O monge robô, seu agente pessoal',
	description:
		'Conheça o Egnom: um agente pessoal calmo, preciso e gentil, com voz, memória em bolinhas e um app que roda no próprio computador.',
};

export const navLinks = [
	{ label: 'Capacidades', href: '#capacidades' },
	{ label: 'Demonstração', href: '#demonstracao' },
	{ label: 'Princípios', href: '#principios' },
	{ label: 'Como funciona', href: '#como-funciona' },
	{ label: 'Projetos', href: '#projetos' },
];

export const authorProfile = {
	name: 'Louis Wolkers',
	headline: 'Dev Backend · Java · Kotlin · Pagamentos',
	links: [
		{ label: 'GitHub', href: 'https://github.com/louiswolkers', icon: 'simple:github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/louiswolkers', icon: 'simple:linkedin' },
		{ label: 'Currículo', href: 'https://louiswolkers.github.io', icon: 'lucide:file-text' },
	],
};

export const noteExample = {
	fileName: 'cerebro/skills/pesquisa.md',
	header: [
		{ key: 'titulo', value: 'Pesquisa' },
		{ key: 'descricao', value: 'Buscar e resumir com fontes' },
		{ key: 'tipo', value: 'skill' },
	],
	body: ['# Como pesquisar', '', '1. Buscar fontes recentes.', '2. Comparar o que cada uma diz.'],
	typedLine: '3. Resumir em poucas frases, com os links.',
};

export const moods = ['meditando', 'atento', 'pensando', 'feliz', 'alerta', 'surpreso'];

export const engineProfiles = [
	{ name: 'ECONÔMICO', model: 'haiku', effort: 'low' },
	{ name: 'NORMAL', model: 'sonnet', effort: 'medium' },
	{ name: 'FORTE', model: 'opus', effort: 'high' },
];

export const principles = [
	{
		code: 'P_01',
		title: 'Só o que for pedido',
		text: 'O Egnom age sob pedido. Sem iniciativas surpresa no seu computador.',
		tags: ['FOCO', 'CONTROLE'],
	},
	{
		code: 'P_02',
		title: 'Confirma antes',
		text: 'Em ações destrutivas ou irreversíveis, a regra dele é perguntar primeiro.',
		tags: ['CUIDADO', 'CONFIANÇA'],
	},
	{
		code: 'P_03',
		title: 'Avisa quando aprende',
		text: 'Ao registrar algo novo na memória, conta em uma frase. A nota vira uma bolinha.',
		tags: ['MEMÓRIA', 'CLAREZA'],
	},
];

export const architectureSteps = [
	{
		title: 'A interface',
		text: 'Uma página no navegador, com o monge, o chat, as bolinhas de conhecimento e os painéis do computador.',
		detail: 'egnom.html',
	},
	{
		title: 'O servidor local',
		text: 'Node.js puro, sem dependências. Atende somente a própria máquina e serve a interface e a API.',
		detail: 'server.js',
	},
	{
		title: 'O cérebro',
		text: 'O Claude Code responde em tempo real e mantém a sessão contínua. O Gemini fica como motor alternativo.',
		detail: 'cerebro/',
	},
];

export const integrations = [
	{ name: 'Claude', icon: 'simple:claude' },
	{ name: 'Gemini', icon: 'simple:googlegemini' },
	{ name: 'Node.js', icon: 'simple:nodedotjs' },
	{ name: 'Python', icon: 'simple:python' },
	{ name: 'FFmpeg', icon: 'simple:ffmpeg' },
	{ name: 'Markdown', icon: 'simple:markdown' },
	{ name: 'Firefox', icon: 'simple:firefoxbrowser' },
	{ name: 'Linux', icon: 'simple:linux' },
];
