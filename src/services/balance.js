import fetchAPI from "../config/api";
import { getHistoryService } from "./history";

// Balance service
export const getBalance = async (userId) => {

    try {
        const history = (await getHistoryService(userId))?.data
        console.log({ history });

        if (history?.message !== "History available!") {
            return [null, `There is no history for user with userId = ${userId}`]
        } else if (Array.isArray(history?.data) && history?.data.length === 0) {
            return [null, `There is no history for user with userId = ${userId}`]
        }

        const income = []
        const expense = []

        history?.data.forEach(data => {
            if (data?.topUp) {
                income.push({
                    date: data?.topUp?.createdAt,
                    amount: data?.topUp?.topAmount
                })
            }
            else if (data?.transfer) {
                const { transfer } = data

                if (transfer?.userReceiver.id == userId) {
                    income.push({
                        date: transfer.createdAt,
                        amount: transfer.amount
                    })
                }
                else {
                    expense.push({
                        date: transfer.createdAt,
                        amount: transfer.amount
                    })
                }
            }
        })

        console.log({income, expense})
        const totalIncome = income.reduce((total, data) => total + data.amount, 0)
        const totalExpense = expense.reduce((total, data) => total - data.amount, 0)
        const balance = totalIncome - totalExpense

        return [{
            balance,
            income: totalIncome,
            expense: totalExpense
        }, null]

    } catch (error) {
        console.log({ error })
        return [null, error]
    }

}