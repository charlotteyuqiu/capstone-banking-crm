/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("portfolio").del();
  await knex("portfolio").insert([
    {
      portfolio_id: 1,
      category: "GIC",
      amount: 50000.0,
      due_date: "2024-08-15",
      client_id: 1,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 2,
      category: "mortgage",
      amount: 300000.5,
      due_date: "2024-11-15",
      client_id: 1,
      description:
        "This mortgage is in 5 years variable rate 3.75%, payment frequency by month.",
    },
    {
      portfolio_id: 3,
      category: "GIC",
      amount: 45000.75,
      due_date: "2025-01-20",
      client_id: 2,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 4,
      category: "mortgage",
      amount: 600000.0,
      due_date: "2025-02-10",
      client_id: 2,
      description:
        "This mortgage is in 5 years variable rate 3.75%, payment frequency by month.",
    },
    {
      portfolio_id: 5,
      category: "mortgage",
      amount: 350000.3,
      due_date: "2024-08-25",
      client_id: 3,
      description:
        "This mortgage is in 5 years variable rate 3.75%, payment frequency by month.",
    },
    {
      portfolio_id: 6,
      category: "GIC",
      amount: 70000.0,
      due_date: "2024-09-06",
      client_id: 3,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 7,
      category: "GIC",
      amount: 80000.0,
      due_date: "2024-12-20",
      client_id: 4,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 8,
      category: "mortgage",
      amount: 300000.0,
      due_date: "2024-11-30",
      client_id: 4,
      description:
        "This mortgage is in 5 years variable rate 3.75%, payment frequency by month.",
    },
    {
      portfolio_id: 9,
      category: "mortgage",
      amount: 650000.8,
      due_date: "2025-01-15",
      client_id: 5,
      description:
        "This mortgage is in 5 years variable rate 3.75%, payment frequency by month.",
    },
    {
      portfolio_id: 10,
      category: "GIC",
      amount: 55000.0,
      due_date: "2025-02-01",
      client_id: 6,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 11,
      category: "GIC",
      amount: 85000.4,
      due_date: "2024-10-20",
      client_id: 6,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 12,
      category: "mortgage",
      amount: 900000.5,
      due_date: "2024-09-15",
      client_id: 7,
      description:
        "This mortgage is in 5 years variable rate 3.75%, payment frequency by month.",
    },
    {
      portfolio_id: 13,
      category: "GIC",
      amount: 100000.0,
      due_date: "2024-12-05",
      client_id: 7,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 14,
      category: "GIC",
      amount: 150000.75,
      due_date: "2024-11-25",
      client_id: 8,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 15,
      category: "mortgage",
      amount: 400000.6,
      due_date: "2025-01-25",
      client_id: 8,
      description:
        "This mortgage is in 5 years variable rate 3.75%, payment frequency by month.",
    },
    {
      portfolio_id: 16,
      category: "GIC",
      amount: 300000.0,
      due_date: "2025-02-15",
      client_id: 9,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 17,
      category: "mortgage",
      amount: 450000.85,
      due_date: "2024-10-10",
      client_id: 10,
      description:
        "This mortgage is in 5 years variable rate 3.75%, payment frequency by month.",
    },
    {
      portfolio_id: 18,
      category: "GIC",
      amount: 500000.95,
      due_date: "2024-09-30",
      client_id: 10,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 19,
      category: "GIC",
      amount: 600000.5,
      due_date: "2024-09-02",
      client_id: 11,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 20,
      category: "mortgage",
      amount: 700000.75,
      due_date: "2024-11-10",
      client_id: 11,
      description:
        "This mortgage is in 5 years variable rate 3.75%, payment frequency by month.",
    },
    {
      portfolio_id: 21,
      category: "GIC",
      amount: 550000.25,
      due_date: "2025-03-15",
      client_id: 12,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 22,
      category: "mortgage",
      amount: 650000.3,
      due_date: "2024-11-05",
      client_id: 12,
      description:
        "This mortgage is in 5 years variable rate 3.75%, payment frequency by month.",
    },
    {
      portfolio_id: 23,
      category: "GIC",
      amount: 700000.75,
      due_date: "2024-12-15",
      client_id: 13,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
    {
      portfolio_id: 24,
      category: "mortgage",
      amount: 800000.5,
      due_date: "2025-01-10",
      client_id: 14,
      description:
        "This mortgage is in 5 years variable rate 3.75%, payment frequency by month.",
    },
    {
      portfolio_id: 25,
      category: "GIC",
      amount: 900000.25,
      due_date: "2025-02-20",
      client_id: 15,
      description:
        "This client is conservative and cannot tolerate volatile changes in portfolio; recommend this 3 years fixed rate GIC, annual interest rate 4%, compound by year.",
    },
  ]);
}
