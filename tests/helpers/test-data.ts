export class TestDataFactory {
	constructor(private workerId: string) {}

	generateEmail(): string {
		return `user-${this.workerId}-${Date.now()}@test.com`;
	}

	generateUsername(): string {
		return `user-${this.workerId}-${Date.now()}`;
	}

	generatePassword(): string {
		return `Pass${this.workerId}${Date.now()}!`;
	}
}
