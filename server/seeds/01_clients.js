/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("clients").del();
  await knex("clients").insert([
    {
      client_id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@gmail.com",
      phone: "437-660-6701",
    },
    {
      client_id: 2,
      name: "Bob Smith",
      email: "bob.smith@163.com",
      phone: "437-660-6702",
    },
    {
      client_id: 3,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      phone: "437-660-6703",
    },
    {
      client_id: 4,
      name: "Diana Prince",
      email: "diana.prince@gmail.com",
      phone: "437-660-6704",
    },
    {
      client_id: 5,
      name: "Evan Wright",
      email: "evan.wright@163.com",
      phone: "437-660-6705",
    },
    {
      client_id: 6,
      name: "Fiona Davis",
      email: "fiona.davis@example.com",
      phone: "437-660-6706",
    },
    {
      client_id: 7,
      name: "George Clark",
      email: "george.clark@gmail.com",
      phone: "437-660-6707",
    },
    {
      client_id: 8,
      name: "Hannah Lewis",
      email: "hannah.lewis@163.com",
      phone: "437-660-6708",
    },
    {
      client_id: 9,
      name: "Ian Scott",
      email: "ian.scott@example.com",
      phone: "437-660-6730",
    },
    {
      client_id: 10,
      name: "Julia White",
      email: "julia.white@gmail.com",
      phone: "437-660-6710",
    },
    {
      client_id: 11,
      name: "Kevin Hall",
      email: "kevin.hall@163.com",
      phone: "437-660-6711",
    },
    {
      client_id: 12,
      name: "Laura Adams",
      email: "laura.adams@example.com",
      phone: "437-660-6712",
    },
    {
      client_id: 13,
      name: "Michael Thompson",
      email: "michael.thompson@gmail.com",
      phone: "437-660-6713",
    },
    {
      client_id: 14,
      name: "Natalie Baker",
      email: "natalie.baker@163.com",
      phone: "437-660-6714",
    },
    {
      client_id: 15,
      name: "Oliver Harris",
      email: "charlotteyuqiu@gmail.com",
      phone: "437-660-6715",
    },
  ]);
}
