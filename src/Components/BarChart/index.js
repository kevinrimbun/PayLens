import { Bar } from "react-chartjs-2";
import {Chart, CategoryScale, LinearScale, BarElement, Tooltip} from 'chart.js'

Chart.register(CategoryScale)
Chart.register(LinearScale)
Chart.register(BarElement)
Chart.register(Tooltip)


function BarChart({listData}) {
    console.log({lisDataProps: listData})

    return (
        <Bar
        data={listData}
        options={{
            plugins: {
              tooltip:{
                enabled: true
              }
            },
            responsive: true
        }}

        >

        </Bar>
    )

}

export default BarChart