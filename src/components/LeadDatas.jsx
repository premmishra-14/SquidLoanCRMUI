import DataTable from "./DataTable";
const columns = [
  "name",
  "loan_id",
  "customer_id",
  "laon_amount",
  "loan_status",
];

const rows = [
  {
    id: 1,
    name: "Cupcake",
    loan_id: 305,
    customer_id: 3.7,
    laon_amount: 67,
    loan_status: 4.3,
  },
  {
    id: 2,
    name: "Donut",
    loan_id: 452,
    customer_id: 25.0,
    laon_amount: 51,
    loan_status: 4.9,
  },
  {
    id: 3,
    name: "Eclair",
    loan_id: 262,
    customer_id: 16.0,
    laon_amount: 24,
    loan_status: 6.0,
  },
  {
    id: 4,
    name: "Frozen yoghurt",
    loan_id: 159,
    customer_id: 6.0,
    laon_amount: 24,
    loan_status: 4.0,
  },
  {
    id: 5,
    name: "Gingerbread",
    loan_id: 356,
    customer_id: 16.0,
    laon_amount: 49,
    loan_status: 3.9,
  },
  {
    id: 6,
    name: "Cupcake",
    loan_id: 305,
    customer_id: 3.7,
    laon_amount: 67,
    loan_status: 4.3,
  },
  {
    id: 7,
    name: "Donut",
    loan_id: 452,
    customer_id: 25.0,
    laon_amount: 51,
    loan_status: 4.9,
  },
  {
    id: 8,
    name: "Eclair",
    loan_id: 262,
    customer_id: 16.0,
    laon_amount: 24,
    loan_status: 6.0,
  },
  {
    id: 9,
    name: "Frozen yoghurt",
    loan_id: 159,
    customer_id: 6.0,
    laon_amount: 24,
    loan_status: 4.0,
  },
  {
    id: 10,
    name: "Gingerbread",
    loan_id: 356,
    customer_id: 16.0,
    laon_amount: 49,
    loan_status: 3.9,
  },
  {
    id: 11,
    name: "Brownie",
    loan_id: 320,
    customer_id: 10.2,
    laon_amount: 40,
    loan_status: 5.1,
  },
  {
    id: 12,
    name: "Macaron",
    loan_id: 250,
    customer_id: 8.5,
    laon_amount: 30,
    loan_status: 3.2,
  },
  {
    id: 13,
    name: "Muffin",
    loan_id: 410,
    customer_id: 15.0,
    laon_amount: 55,
    loan_status: 6.5,
  },
  {
    id: 14,
    name: "Cheesecake",
    loan_id: 470,
    customer_id: 22.0,
    laon_amount: 52,
    loan_status: 7.0,
  },
  {
    id: 15,
    name: "Pie",
    loan_id: 360,
    customer_id: 18.0,
    laon_amount: 48,
    loan_status: 4.8,
  },
  {
    id: 16,
    name: "Cupcake",
    loan_id: 300,
    customer_id: 3.5,
    laon_amount: 65,
    loan_status: 4.2,
  },
  {
    id: 17,
    name: "Donut",
    loan_id: 460,
    customer_id: 26.0,
    laon_amount: 50,
    loan_status: 5.0,
  },
  {
    id: 18,
    name: "Eclair",
    loan_id: 270,
    customer_id: 17.0,
    laon_amount: 26,
    loan_status: 6.3,
  },
  {
    id: 19,
    name: "Frozen yoghurt",
    loan_id: 165,
    customer_id: 5.8,
    laon_amount: 23,
    loan_status: 4.2,
  },
  {
    id: 20,
    name: "Gingerbread",
    loan_id: 350,
    customer_id: 15.5,
    laon_amount: 47,
    loan_status: 3.8,
  },
  {
    id: 21,
    name: "Tiramisu",
    loan_id: 450,
    customer_id: 20.0,
    laon_amount: 60,
    loan_status: 6.5,
  },
  {
    id: 22,
    name: "Churros",
    loan_id: 320,
    customer_id: 12.5,
    laon_amount: 45,
    loan_status: 4.0,
  },
  {
    id: 23,
    name: "Pudding",
    loan_id: 280,
    customer_id: 9.5,
    laon_amount: 38,
    loan_status: 5.2,
  },
  {
    id: 24,
    name: "Baklava",
    loan_id: 400,
    customer_id: 22.0,
    laon_amount: 48,
    loan_status: 6.1,
  },
  {
    id: 25,
    name: "Flan",
    loan_id: 310,
    customer_id: 11.0,
    laon_amount: 42,
    loan_status: 4.5,
  },
  {
    id: 26,
    name: "Mochi",
    loan_id: 230,
    customer_id: 4.0,
    laon_amount: 50,
    loan_status: 3.5,
  },
  {
    id: 27,
    name: "Tart",
    loan_id: 370,
    customer_id: 16.0,
    laon_amount: 52,
    loan_status: 4.7,
  },
  {
    id: 28,
    name: "Croissant",
    loan_id: 420,
    customer_id: 22.0,
    laon_amount: 46,
    loan_status: 5.3,
  },
  {
    id: 29,
    name: "Pancakes",
    loan_id: 350,
    customer_id: 14.0,
    laon_amount: 50,
    loan_status: 7.0,
  },
  {
    id: 30,
    name: "Waffles",
    loan_id: 380,
    customer_id: 17.0,
    laon_amount: 55,
    loan_status: 6.5,
  },
];

const LeadDatas = () => {
  return (
    <div>
      <DataTable rows={rows} columns={columns} />
    </div>
  );
};

export default LeadDatas;
