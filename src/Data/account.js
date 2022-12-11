import React from 'react'

import Samuel from '../../src/Assets/account/samuelSuhi.svg'
import Momo from '../../src/Assets/account/momoTaro.svg'
import Jessica from '../../src/Assets/account/jessicaKeen.svg'
import Michael from '../../src/Assets/account/michaelLe.svg'

// import { useNavigate } from "react-router-dom";
// import fetchAPI, { getHeaders } from "../config/api";

// // Services for history controller
// const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS;


// // History service
// export const getUserService = async (userId) => {
//   const url = `${ROOT_API_PAYLENS}/history/${userId}`;
//   const headers = getHeaders();
//   const response = await fetchAPI({ url, method: "GET", headers });
//   console.log(response, "respon");
//   return response
// };

// export const getListUsers = async (userId) => {
//     const headers = getHeaders();
//     const response = await getUserService(userId);
//     console.log(response, "response2");
//     if (response.status ==! 401) {
//       const history = response.data
//       if (history) {
//         console.log(history, 'history');
//         const listTransaction = history.data?.map(data => {
  
//           // Top up
//           if (data?.topUp) {
//             return {
//               picture: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg",
//               name: data.topUp.userId.username,
//               transaction: "Top Up",
//               nominal: new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(data.topUp.topAmount),
//               date: new Date(data.topUp.createdAt).toLocaleString('id-ID'),
//               label: "Top Up"
//             }
//           }
  
//           // Transfer
//           else if (data.transfer) {
//             const { transfer } = data;
//             const isIncomingTransfer = transfer.userReceiver.id == userId
  
//             if (isIncomingTransfer) {
//               return {
//                 picture: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg",
//                 name: transfer.user.username,
//                 transaction: "Transfer",
//                 nominal: new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(transfer.amount),
//                 date: new Date(transfer.createdAt).toLocaleString('id-ID'),
//                 label: `Transfer from ${transfer.user.username}`
//               }
//             }
  
//             // Transfer
//             else {
//               return {
//                 picture: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg",
//                 name: transfer.userReceiver.username,
//                 transaction: "Transfer",
//                 nominal: new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(- transfer.amount),
//                 date: new Date(transfer.createdAt).toLocaleString('id-ID'),
//                 label: `Transfer to ${transfer.userReceiver.username}`
//               }
//             }
//           }
//           return data
//         }, headers);
//         return listTransaction
//       }
//     }else{
//       return response
//     }
  
//   }

const account = [
        {
            id: 1,
            profilePic: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg",
            name: "Donovan Yoel",
            phone: "+62 813-8492-9994"
        }
    ]
export default account