















// importing apollo client



// importing graphql
import { gql } from "@apollo/client";
import { client } from "..";




export const getAllSales = async () => {
    // calling client
    const data = await client
    .query({
      query: gql`
        query {
        allSales {
            _id  
            price
            product
            userId
            
        }
    }
        
    `,
    })

    return data.data




}






export const LOGIN = gql`
mutation Login($username: String!, $password: String!) {
   login(username: $username, password:$password) {
     username
     password
     id
   } 
}`






// mutation to create user
export const CREATE_USER = 
      
      gql`mutation($username: String!, $password: String!) { 
            createNewUser(username: $username, password: $password) {
              username
              password
          }
        }  `



// mutation to delete user
export const DELETE_USER = 
      
      gql`mutation($username: String!, $password: String!) { 
            deleteUser(username: $username, password: $password) {
              username
              password
          }
        }  `


// userSales query
export const USER_SALES = gql`
    query($userSalesId: String!) {
      userSales(id: $userSalesId) {
        _id
        product
        price
        chatRoomRequests {
          buyer
          seller
          id
        }
      }
}
`

// toriScraper
export const TORI_SCRAPER = gql `
      mutation($product: String!) {
        toriSearch(product: $product)
      }`



// edit sale
export const EDIT_SALE = gql`
mutation EditSale($product: String!, $price: String!, $userId: String!, $modifySaleId: String!, $token: String!) {
  modifySale(product: $product, price: $price, userId: $userId, id: $modifySaleId, token: $token) {
    token
    product
    price
    userId
  }
    
  }
`





// addSale mutation
export const ADD_SALE = gql`
      mutation AddSale($product: String!, $price: String!, $userId: String!) {
        addSale(product: $product, price: $price, userId: $userId) {
          product
          price
          userId
        }
      }
    `


// get huutonetSales mutation
export const HUUTONET_SEARCH = gql`
    mutation Huutonet_search($product: String!) {
      huutoNetSearch(product: $product)
    }    

`

// searchSales mutation
export const SEARCH_SALE = gql`
mutation Search_sale($product: String!) {
  SearchSale(product: $product) {
    _id
    product
    price
    userId
    
  }
}
`






// huutokaupat com mutation
export const HUUTOKAUPAT_SEARCH = gql`

    mutation Huutokaupat_search($product: String!) {
      huutokaupatSearch(product: $product)
    }


`



export const CREATECHATROOMREQUEST = gql`

mutation CreateChatRoomRequest($seller: String!, $buyer: String!, $saleId: String!, $status: String!) {
  createChatRoomRequest(seller: $seller, buyer: $buyer, saleId: $saleId, status: $status) {
    seller
    buyer
    forSale {
      product
      price
    }
    status
    
  }
}
`





// edit chat room request status
export const EDIT_CHAT_ROOM_REQUEST_STATUS = gql`
      mutation EditReq($chatReqId: String!, $status: String!, $forSaleId: String!) {
        editChatRoomRequestStatus(chatReqId: $chatReqId, status: $status, forSaleId: $forSaleId) {
          id
          seller
          buyer
          forSale {
            _id
            product
            price
          }
            
          }
          
        }
  

`




// get all chatroomRequests
export const GET_CHATROOM_REQUESTS = gql`

    mutation($forSaleId: String!) {
      getChatRoomRequests(forSaleId: $forSaleId) {
        id
        buyerId
        forSale {
          _id
          price
          product
          userId      
        }
      }
    }

`


// get buyer chat reqs

export const GET_BUYERS_CHAT_REQS = gql`
    mutation($buyerId: String!) {
      getBuyersChatroomRequests(buyerId: $buyerId) {
        id
        buyer
        seller
        forSale {
          _id
          price
          product
        }
      }
    }
`














