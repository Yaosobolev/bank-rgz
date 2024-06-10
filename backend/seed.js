const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Создаем типы населенных пунктов
  const localityTypeCity = "CITY";
  const localityTypeTown = "TOWN";
  const localityTypeVillage = "VILLAGE";

  // Создаем типы улиц
  const streetTypeStreet = "STREET";
  const streetTypeAvenue = "AVENUE";
  const streetTypeBoulevard = "BOULEVARD";

  // Создаем типы банков
  const bankTypeCentral = "CENTRAL";
  const bankTypeCommercial = "COMMERCIAL";
  const bankTypeSavings = "SAVINGS";

  // Создаем валюты
  const currencyUSD = await prisma.currency.create({
    data: {
      code: "USD",
      name: "US Dollar",
      shortName: "USD",
      exchangeRate: 1.0,
    },
  });

  const currencyEUR = await prisma.currency.create({
    data: {
      code: "EUR",
      name: "Euro",
      shortName: "EUR",
      exchangeRate: 0.85,
    },
  });

  // Создаем клиента и физическое лицо
  const personJohnDoe = await prisma.person.create({
    data: {
      lastName: "Doe",
      firstName: "John",
      middleName: "A.",
      birthDate: new Date("1980-01-01"),
      passportNumber: "123456789",
      passportSeries: "AB",
      issuedBy: "Government",
      issueDate: new Date("2000-01-01"),
      address: {
        create: {
          houseNumber: "123",
          apartmentNumber: "45",
          postalCode: "12345",
          locality: {
            create: {
              localityCode: "001",
              name: "Sample City",
              localityType: localityTypeCity,
            },
          },
          street: {
            create: {
              name: "Main Street",
              streetType: streetTypeStreet,
            },
          },
        },
      },
    },
  });

  const clientJohnDoe = await prisma.client.create({
    data: {
      taxId: "1234567890",
      registrationNumber: "123456",
      personId: personJohnDoe.id,
    },
  });

  // Создаем банк
  const bankSample = await prisma.bank.create({
    data: {
      name: "Sample Bank",
      bic: "123456789",
      correspondentAccount: "987654321",
      centralBankRegNumber: "654321",
      bankType: bankTypeCommercial,
      address: {
        create: {
          houseNumber: "1",
          apartmentNumber: "",
          postalCode: "54321",
          locality: {
            create: {
              localityCode: "002",
              name: "Sample Town",
              localityType: localityTypeTown,
            },
          },
          street: {
            create: {
              name: "Bank Street",
              streetType: streetTypeAvenue,
            },
          },
        },
      },
    },
  });

  // Создаем должность
  const positionManager = await prisma.position.create({
    data: {
      name: "Manager",
    },
  });

  // Создаем трудовой договор
  const employmentContractJohnDoe = await prisma.employmentContract.create({
    data: {
      startDate: new Date("2020-01-01"),
      endDate: new Date("2025-01-01"),
      salary: 50000,
      personId: personJohnDoe.id,
      positionId: positionManager.id,
      bankId: bankSample.id,
    },
  });

  // Создаем цель кредита
  const creditPurposeCar = await prisma.creditPurpose.create({
    data: {
      name: "Car Purchase",
    },
  });

  // Создаем счет
  const accountJohnDoe = await prisma.account.create({
    data: {
      number: "123456789012",
      currencyId: currencyUSD.id,
      accountType: "SAVINGS",
    },
  });

  // Создаем кредитный договор
  const creditContractJohnDoe = await prisma.creditContract.create({
    data: {
      number: "0001",
      issueDate: new Date("2021-01-01"),
      creditAmount: 20000,
      usagePeriod: 36,
      interestRate: 3.5,
      monthlyPayment: 600,
      clientId: clientJohnDoe.id,
      creditExpertId: clientJohnDoe.id,
      creditPurposeId: creditPurposeCar.id,
      accountId: accountJohnDoe.id,
    },
  });

  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
