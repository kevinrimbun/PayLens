import fetchAPI from "../config/api";

// Services for history controller
const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS;

// History service
export const getHistoryService = async (userId) => {
  const url = `${ROOT_API_PAYLENS}/history/${userId}`;
  const response = await fetchAPI({ url, method: "GET" });
  return response;
};

// History list
export const getListTransactionHistory = async (userId) => {
  const history = (await getHistoryService(userId))?.data
  const listTransaction = history.data.map(data => {

    // Top up
    if (data?.topUp) {
      return {
        picture: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg",
        name: data.topUp.userId.username,
        transaction: "Top Up",
        nominal: new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(data.topUp.topAmount),
        date: new Date(data.topUp.createdAt).toLocaleString('id-ID'),
        label: "Top Up"
      }
    }

    // Transfer
    else if (data?.transfer) {
      const { transfer } = data;
      const isIncomingTransfer = transfer.userReceiver.id == userId

      if (isIncomingTransfer) {
        return {
          picture: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg",
          name: transfer.user.username,
          transaction: "Transfer",
          nominal: new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(transfer.amount),
          date: new Date(transfer.createdAt).toLocaleString('id-ID'),
          label: `Transfer from ${transfer.user.username}`
        }
      }

      // Transfer
      else {
        return {
          picture: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg",
          name: transfer.userReceiver.username,
          transaction: "Transfer",
          nominal: new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(- transfer.amount),
          date: new Date(transfer.createdAt).toLocaleString('id-ID'),
          label: `Transfer to ${transfer.userReceiver.username}`
        }
      }
    }
    return data
  })
  return listTransaction
}


// Chart
export const getListHistoryForChart = async (userId) => {
  const history = (await getHistoryService(userId))?.data

  const listData = history.data.map(data => {

    // Top up
    if (data?.topUp) {
      return {
        id: data.topUp.id,
        amount: data.topUp.topAmount,
        label: new Date(data.topUp.createdAt).toLocaleDateString('id-ID'),
        date: new Date(data.topUp.createdAt).toLocaleString('id-ID'),
      }
    }

    // Transfer
    else if (data?.transfer) {
      const { transfer } = data
      const isIncomingTransfer = transfer.userReceiver.id == userId

      if (isIncomingTransfer) {
        return {
          id: transfer.id,
          amount: transfer.amount,
          label: new Date(transfer.createdAt).toLocaleDateString('id-ID'),
          date: new Date(transfer.createdAt).toLocaleString('id-ID')
        }
      }
      else {
        return {
          id: transfer.id,
          amount: - (transfer.amount),
          label: new Date(transfer.createdAt).toLocaleDateString('id-ID'),
          label: new Date(transfer.createdAt).toLocaleString('id-ID'),
        }
      }
    }
    else return data
  })
  return listData
}