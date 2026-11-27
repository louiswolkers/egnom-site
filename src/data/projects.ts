export interface Project {
	name: string;
	summary: string;
	highlight: string;
	stack: string[];
	icon: string;
	/** wide cards take two columns on large screens */
	isWide?: boolean;
	status?: string;
	/** public address of the code or demo; the card shows a link only when it exists */
	link?: string;
}

export const projects: Project[] = [
	{
		name: 'Egnom',
		summary: 'Agente pessoal em forma de monge robô, com conversa por voz ou texto e memória em notas.',
		highlight: 'Servidor em Node.js puro, sem dependências, e memória guardada em arquivos markdown.',
		stack: ['Node.js', 'Claude Code', 'Python', 'faster-whisper'],
		icon: 'lucide:orbit',
		isWide: true,
		status: 'Em uso',
	},
	{
		name: 'WolkersShop',
		summary: 'Loja virtual fictícia de tecnologia e geek, com catálogo, carrinho, login e pagamento simulado.',
		highlight: 'Se duas pessoas disputam a última unidade, só uma consegue comprar.',
		stack: ['React', 'Spring Boot', 'SQLite'],
		icon: 'lucide:shopping-bag',
		status: 'Demonstração',
	},
	{
		name: 'Wolkers Pay',
		summary: 'App Android de vendas inspirado em maquininha de cartão, com Pix e cartão em modo demo.',
		highlight: 'Arquitetura MVVM, com o repositório separado para receber uma API própria depois.',
		stack: ['Kotlin', 'Jetpack Compose', 'Hilt'],
		icon: 'lucide:smartphone',
		status: 'Em andamento',
	},
	{
		name: 'Agente de WhatsApp',
		summary: 'Assistente de atendimento que responde clientes pelo WhatsApp usando um modelo de IA.',
		highlight: 'Junta mensagens enviadas em pedaços e responde uma vez só, lembrando o histórico de cada contato.',
		stack: ['Python', 'PydanticAI', 'WAHA'],
		icon: 'lucide:message-circle',
		isWide: true,
	},
];
