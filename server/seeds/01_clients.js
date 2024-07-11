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
      address: "445 Mississauga Rd, Mississauga, ON L5L 6K9 Canada",
    },
    {
      client_id: 2,
      name: "Bob Smith",
      email: "bob.smith@gmail.com",
      phone: "437-660-6702",
      address: "123 Oak St, Toronto, ON M5H 2N2 Canada",
    },
    {
      client_id: 3,
      name: "Charlie Brown",
      email: "charlie.brown@gmail.com",
      phone: "437-660-6703",
      address: "789 Maple Ave, Markham, ON L3T 5W5 Canada",
    },
    {
      client_id: 4,
      name: "Diana Prince",
      email: "diana.prince@gmail.com",
      phone: "437-660-6704",
      address: "321 Pine St, Vaughan, ON L4H 1J2 Canada",
    },
    {
      client_id: 5,
      name: "Evan Wright",
      email: "evan.wright@gmail.com",
      phone: "437-660-6705",
      address: "654 Cedar Rd, Richmond Hill, ON L4B 3P3 Canada",
    },
    {
      client_id: 6,
      name: "Fiona Davis",
      email: "fiona.davis@gmail.com",
      phone: "437-660-6706",
      address: "987 Birch St, Brampton, ON L6T 4X1 Canada",
    },
    {
      client_id: 7,
      name: "George Clark",
      email: "george.clark@gmail.com",
      phone: "437-660-6707",
      address: "101 Elm St, Mississauga, ON L5M 1T6 Canada",
    },
    {
      client_id: 8,
      name: "Hannah Lewis",
      email: "hannah.lewis@gmail.com",
      phone: "437-660-6708",
      address: "202 Willow Ave, Toronto, ON M4E 3K2 Canada",
    },
    {
      client_id: 9,
      name: "Ian Scott",
      email: "ian.scott@gmail.com",
      phone: "437-660-6730",
      address: "303 Ash St, Markham, ON L6E 1X2 Canada",
    },
    {
      client_id: 10,
      name: "Julia White",
      email: "julia.white@gmail.com",
      phone: "437-660-6710",
      address: "404 Spruce St, Vaughan, ON L4H 2P5 Canada",
    },
    {
      client_id: 11,
      name: "Kevin Hall",
      email: "kevin.hall@gmail.com",
      phone: "437-660-6711",
      address: "505 Fir St, Richmond Hill, ON L4C 0L9 Canada",
    },
    {
      client_id: 12,
      name: "Laura Adams",
      email: "laura.adams@gmail.com",
      phone: "437-660-6712",
      address: "606 Poplar Ave, Brampton, ON L6Z 3M8 Canada",
    },
    {
      client_id: 13,
      name: "Michael Thompson",
      email: "michael.thompson@gmail.com",
      phone: "437-660-6713",
      address: "707 Chestnut St, Mississauga, ON L5N 3R8 Canada",
    },
    {
      client_id: 14,
      name: "Natalie Baker",
      email: "natalie.baker@gmail.com",
      phone: "437-660-6714",
      address: "808 Hickory Rd, Toronto, ON M6H 1Y9 Canada",
    },
    {
      client_id: 15,
      name: "Oliver Harris",
      email: "oliver.harris@gmail.com",
      phone: "437-660-6715",
      address: "909 Hemlock St, Markham, ON L3R 4T3 Canada",
    },
  ]);
}
