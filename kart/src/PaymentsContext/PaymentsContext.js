import { createContext } from "react";
import { useContext} from "react";


const PaymentContext= createContext(
    {
        upiId: "",
        setUpiId:()=>{},
        fullName:"",
        setFullName:()=>{},
        phoneNo: "",
        setPhoneNo:()=>{},
        email:"",
        setEmail:()=>{},
        address1:"",
        setAddress1:()=>{},
        address2:"",
        setAddress2:()=>{},
        country:"",
        setCountry:()=>{},
        state:"",
        setState:()=>{},
        city:"",
        setCity:()=>{},
        zip:"",
        setZip:()=>{},
        myOrders: {},
        setMyOrders:()=>{}
    }
)

export const PaymentContextProvider = PaymentContext.Provider

export default function usePayment(){
    return useContext(PaymentContext)
}