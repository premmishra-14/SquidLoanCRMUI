import LeadTable from "./LeadTable";

const columns = [
  "full_name",
  "dob",
  "gender",
  "address",
  "contact_no",
  "email",
  "marital_status",
];
const rows = [
    { id: 1, full_name: "Aarav Sharma", dob: "15/04/1985", gender: "Male", address: "123 MG Road, Mumbai, Maharashtra", contact_no: "9876543210", email: "aarav.s@example.com", marital_status: "Married" },
    { id: 2, full_name: "Diya Patel", dob: "22/09/1990", gender: "Female", address: "456 Gandhi Nagar, Delhi, Delhi", contact_no: "8765432109", email: "diya.p@example.com", marital_status: "Single" },
    { id: 3, full_name: "Arjun Singh", dob: "03/12/1988", gender: "Male", address: "789 Jubilee Hills, Hyderabad, Telangana", contact_no: "7654321098", email: "arjun.s@example.com", marital_status: "Divorced" },
    { id: 4, full_name: "Ananya Reddy", dob: "11/07/1992", gender: "Female", address: "101 Indiranagar, Bangalore, Karnataka", contact_no: "6543210987", email: "ananya.r@example.com", marital_status: "Single" },
    { id: 5, full_name: "Vihaan Kumar", dob: "29/01/1986", gender: "Male", address: "202 Park Street, Kolkata, West Bengal", contact_no: "9876543211", email: "vihaan.k@example.com", marital_status: "Married" },
    { id: 6, full_name: "Ishaan Joshi", dob: "18/05/1994", gender: "Male", address: "303 FC Road, Pune, Maharashtra", contact_no: "8765432108", email: "ishaan.j@example.com", marital_status: "Single" },
    { id: 7, full_name: "Anika Gupta", dob: "07/03/1983", gender: "Female", address: "404 Anna Nagar, Chennai, Tamil Nadu", contact_no: "7654321097", email: "anika.g@example.com", marital_status: "Widowed" },
    { id: 8, full_name: "Reyansh Malhotra", dob: "24/11/1991", gender: "Male", address: "505 Civil Lines, Jaipur, Rajasthan", contact_no: "6543210986", email: "reyansh.m@example.com", marital_status: "Single" },
    { id: 9, full_name: "Saanvi Kapoor", dob: "31/08/1987", gender: "Female", address: "606 Alkapuri, Vadodara, Gujarat", contact_no: "9876543212", email: "saanvi.k@example.com", marital_status: "Married" },
    { id: 10, full_name: "Vivaan Mehta", dob: "13/02/1995", gender: "Male", address: "707 Aundh, Pune, Maharashtra", contact_no: "8765432107", email: "vivaan.m@example.com", marital_status: "Single" },
    { id: 11, full_name: "Siya Agarwal", dob: "26/06/1989", gender: "Female", address: "808 Gomti Nagar, Lucknow, Uttar Pradesh", contact_no: "7654321096", email: "siya.a@example.com", marital_status: "Divorced" },
    { id: 12, full_name: "Advait Verma", dob: "09/10/1993", gender: "Male", address: "909 Shivaji Nagar, Nagpur, Maharashtra", contact_no: "6543210985", email: "advait.v@example.com", marital_status: "Married" },
    { id: 13, full_name: "Kiara Yadav", dob: "17/04/1984", gender: "Female", address: "111 Vasant Kunj, New Delhi, Delhi", contact_no: "9876543213", email: "kiara.y@example.com", marital_status: "Single" },
    { id: 14, full_name: "Kabir Choudhary", dob: "02/12/1990", gender: "Male", address: "222 Salt Lake City, Kolkata, West Bengal", contact_no: "8765432106", email: "kabir.c@example.com", marital_status: "Married" },
    { id: 15, full_name: "Pari Trivedi", dob: "28/09/1986", gender: "Female", address: "333 Navrangpura, Ahmedabad, Gujarat", contact_no: "7654321095", email: "pari.t@example.com", marital_status: "Single" },
    { id: 16, full_name: "Aditya Naidu", dob: "05/07/1992", gender: "Male", address: "444 Banjara Hills, Hyderabad, Telangana", contact_no: "6543210984", email: "aditya.n@example.com", marital_status: "Married" },
    { id: 17, full_name: "Myra Desai", dob: "14/03/1988", gender: "Female", address: "555 Model Town, Chandigarh, Punjab", contact_no: "9876543214", email: "myra.d@example.com", marital_status: "Single" },
    { id: 18, full_name: "Arnav Mishra", dob: "23/11/1985", gender: "Male", address: "666 Hazratganj, Lucknow, Uttar Pradesh", contact_no: "8765432105", email: "arnav.m@example.com", marital_status: "Divorced" },
    { id: 19, full_name: "Aadhya Iyer", dob: "01/08/1993", gender: "Female", address: "777 Besant Nagar, Chennai, Tamil Nadu", contact_no: "7654321094", email: "aadhya.i@example.com", marital_status: "Single" },
    { id: 20, full_name: "Dhruv Banerjee", dob: "19/01/1987", gender: "Male", address: "888 Koregaon Park, Pune, Maharashtra", contact_no: "6543210983", email: "dhruv.b@example.com", marital_status: "Married" },
    { id: 21, full_name: "Avni Nair", dob: "27/05/1991", gender: "Female", address: "999 Jayanagar, Bangalore, Karnataka", contact_no: "9876543215", email: "avni.n@example.com", marital_status: "Single" },
    { id: 22, full_name: "Ayush Khanna", dob: "08/10/1986", gender: "Male", address: "123 Vashi, Navi Mumbai, Maharashtra", contact_no: "8765432104", email: "ayush.k@example.com", marital_status: "Married" },
    { id: 23, full_name: "Neha Chauhan", dob: "16/04/1994", gender: "Female", address: "234 Maninagar, Ahmedabad, Gujarat", contact_no: "7654321093", email: "neha.c@example.com", marital_status: "Single" },
    { id: 24, full_name: "Rudra Saxena", dob: "04/12/1982", gender: "Male", address: "345 Defence Colony, New Delhi, Delhi", contact_no: "6543210982", email: "rudra.s@example.com", marital_status: "Divorced" },
    { id: 25, full_name: "Shanaya Roy", dob: "25/09/1989", gender: "Female", address: "456 Malviya Nagar, Jaipur, Rajasthan", contact_no: "9876543216", email: "shanaya.r@example.com", marital_status: "Married" },
    { id: 26, full_name: "Yuvan Bose", dob: "12/07/1993", gender: "Male", address: "567 Alwarpet, Chennai, Tamil Nadu", contact_no: "8765432103", email: "yuvan.b@example.com", marital_status: "Single" },
    { id: 27, full_name: "Aanya Mehra", dob: "21/03/1985", gender: "Female", address: "678 Sector 18, Noida, Uttar Pradesh", contact_no: "7654321092", email: "aanya.m@example.com", marital_status: "Widowed" },
    { id: 28, full_name: "Madhav Goyal", dob: "30/11/1990", gender: "Male", address: "789 Vijay Nagar, Indore, Madhya Pradesh", contact_no: "6543210981", email: "madhav.g@example.com", marital_status: "Married" },
    { id: 29, full_name: "Trisha Hegde", dob: "06/08/1988", gender: "Female", address: "890 Malleshwaram, Bangalore, Karnataka", contact_no: "9876543217", email: "trisha.h@example.com", marital_status: "Single" },
    { id: 30, full_name: "Veer Chawla", dob: "15/01/1984", gender: "Male", address: "901 Connaught Place, New Delhi, Delhi", contact_no: "8765432102", email: "veer.c@example.com", marital_status: "Married" }
  ];

const LeadData = () => {
  return (
    <div>
      <LeadTable rows={rows} columns={columns} />
    </div>
  );
};

export default LeadData;
