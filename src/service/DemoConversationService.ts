import type { DemoQuestion } from '../data/demoQuestions';

const maxSuggestions = 3;

export class DemoConversationService {
	#askedIds = new Set<string>();
	#questions: DemoQuestion[];
	#openingIds: string[];

	constructor(questions: DemoQuestion[], openingIds: string[]) {
		this.#questions = questions;
		this.#openingIds = openingIds;
	}

	askQuestion(id: string): DemoQuestion | undefined {
		if (this.#askedIds.has(id)) return undefined;
		const question = this.#questions.find((item) => item.id === id);
		if (question) this.#askedIds.add(question.id);
		return question;
	}

	/** Follow-ups first, then any other question not asked yet, so all of them stay reachable. */
	findSuggestions(current?: DemoQuestion): DemoQuestion[] {
		const preferredIds = current?.followUps ?? this.#openingIds;
		const candidateIds = new Set([...preferredIds, ...this.#questions.map((item) => item.id)]);

		return [...candidateIds]
			.filter((id) => !this.#askedIds.has(id))
			.flatMap((id) => this.#questions.filter((item) => item.id === id))
			.slice(0, maxSuggestions);
	}

	restartConversation(): void {
		this.#askedIds.clear();
	}
}
