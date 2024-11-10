import { Transaction } from "@prisma/client";
import { faker } from "@faker-js/faker";

export class TransactionsMock {
  public createTransaction = (): Transaction => {
    const transaction: Transaction = {
      id: faker.string.uuid(),
      date: faker.date.recent(),
      avatar: faker.image.avatar(),
      amount: parseFloat(faker.finance.amount()),
      category: faker.finance.accountName(),
      name: faker.person.fullName(),
      recurring: faker.datatype.boolean(),
    };

    return transaction;
  };
}
