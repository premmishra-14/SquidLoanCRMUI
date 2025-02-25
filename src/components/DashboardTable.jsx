import React from 'react'
import DataTable from './DataTable'
const columns = ["name", "calories", "fat", "carbs", "protein"];

const rows = [
  { id: 1, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 2, name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { id: 3, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { id: 4, name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: 5, name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { id: 6, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 7, name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { id: 8, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { id: 9, name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: 10, name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { id: 11, name: "Brownie", calories: 320, fat: 10.2, carbs: 40, protein: 5.1 },
  { id: 12, name: "Macaron", calories: 250, fat: 8.5, carbs: 30, protein: 3.2 },
  { id: 13, name: "Muffin", calories: 410, fat: 15.0, carbs: 55, protein: 6.5 },
  { id: 14, name: "Cheesecake", calories: 470, fat: 22.0, carbs: 52, protein: 7.0 },
  { id: 15, name: "Pie", calories: 360, fat: 18.0, carbs: 48, protein: 4.8 },
  { id: 16, name: "Cupcake", calories: 300, fat: 3.5, carbs: 65, protein: 4.2 },
  { id: 17, name: "Donut", calories: 460, fat: 26.0, carbs: 50, protein: 5.0 },
  { id: 18, name: "Eclair", calories: 270, fat: 17.0, carbs: 26, protein: 6.3 },
  { id: 19, name: "Frozen yoghurt", calories: 165, fat: 5.8, carbs: 23, protein: 4.2 },
  { id: 20, name: "Gingerbread", calories: 350, fat: 15.5, carbs: 47, protein: 3.8 },
  { id: 21, name: "Tiramisu", calories: 450, fat: 20.0, carbs: 60, protein: 6.5 },
  { id: 22, name: "Churros", calories: 320, fat: 12.5, carbs: 45, protein: 4.0 },
  { id: 23, name: "Pudding", calories: 280, fat: 9.5, carbs: 38, protein: 5.2 },
  { id: 24, name: "Baklava", calories: 400, fat: 22.0, carbs: 48, protein: 6.1 },
  { id: 25, name: "Flan", calories: 310, fat: 11.0, carbs: 42, protein: 4.5 },
  { id: 26, name: "Mochi", calories: 230, fat: 4.0, carbs: 50, protein: 3.5 },
  { id: 27, name: "Tart", calories: 370, fat: 16.0, carbs: 52, protein: 4.7 },
  { id: 28, name: "Croissant", calories: 420, fat: 22.0, carbs: 46, protein: 5.3 },
  { id: 29, name: "Pancakes", calories: 350, fat: 14.0, carbs: 50, protein: 7.0 },
  { id: 30, name: "Waffles", calories: 380, fat: 17.0, carbs: 55, protein: 6.5 }
];

const DashboardTable = () => {
  return (
    <div>
      <DataTable rows={rows} columns={columns}/>
    </div>
  )
}

export default DashboardTable
