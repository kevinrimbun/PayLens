import React, { useState, useEffect } from 'react';

// Iconify
import { Icon } from "@iconify/react";

// Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Components
import BarChart from '../BarChart'

// Service
import { getBalance } from '../../services/balance';
import { getListHistoryForChart } from '../../services/history';

// CSS
import '../../Styles/Components/Chart/Chart.css'

// Assets
import ChartPic from '../../Assets/graphic.svg'
import { BsSlack } from 'react-icons/bs';

function Chart() {
    
    // localStorage.setItem("balance", 0)
    // var TopAmount = localStorage.getItem("TopAmount")
    // var amount = localStorage.getItem("amount")
    // var balance = localStorage.getItem("balance")

    const userId = +localStorage.getItem("userId")
    const [userBalance, setUserBalance] = useState({})
    const [listDataForChart, setListDataForChart] = useState({})

    // Total income
    const resultIncome = userBalance?.income !== undefined ? new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(userBalance.income) : 0

    // Total expense
    const resultExpense = userBalance?.expense !== undefined ? new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(userBalance.expense) : 0

    useEffect( ()=>{
        const getUserBalance = async ()=> {
            
            const balance = await getBalance(userId)

            // console.log({balance})
            if(balance[0] !== null) {
                setUserBalance(balance[0])
            } 
            else {
                console.error(balance[1])
            }
        }

        getUserBalance()

        const getUserHistory = async () => {
            const data = await getListHistoryForChart(userId)
            // console.log({data})
           
            if(Array.isArray(data) && data.length === 0) {
                return
            }

            const listData = {
                labels: data?.map(item=> item.label),
                datasets: [
                    {
                        label: "History Transaction",
                        data: data?.map(item=> item.amount),
                        borderColor: 'gray',
                        borderWidth: 1,
                        backgroundColor: [
                            "#6278F4"
                        ]
                    }
                ]
            }
            // console.log({listData})
            setListDataForChart(listData)
        }
        getUserHistory()
    },[])
    
    return (
        <Card className='shadow-lg Chart-Comp'>
            <Card.Body>
                <Container>

                    {/* Upper Section */}
                    <Row>
                        <Col className='d-flex flex-column'>
                            <Icon icon="akar-icons:arrow-up" color="green" width="30" height="30" vFlip={true} />
                            <p>Income</p>
                            <h4>{resultIncome}</h4>
                        </Col>
                        <Col className='d-flex flex-column float-end'>
                            <Icon icon="akar-icons:arrow-up" color="red" width="30" height="30" className='float-end ms-5'/>
                            <p className='float-end ms-5'>Expense</p>
                            <h4 className='float-end ms-5'>{resultExpense}</h4>
                        </Col>
                    </Row>

                    {/* Lower Section */}
                    <div className='img-chart d-flex justify-content-center align-items-center mt-5 mb-4'>
                       { Object.keys(listDataForChart).length !== 0 ? <BarChart listData={listDataForChart}/> : <div>This user has no transaction history</div>} 
                    </div>

                </Container>
            </Card.Body>
        </Card>
    );
}

export default Chart;