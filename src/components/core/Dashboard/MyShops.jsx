import React, { useEffect ,useState} from 'react'
import { fetchShopperShops } from '../../../services/operations/ShopDetailsApi'
import { VscAdd } from "react-icons/vsc"
import IconBtn from '../../common/IconBtn'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ShopperTable from './ShopperShops/ShopperTable'
const MyShops = () => {
    const {token}=useSelector((state)=>state.auth)
    const  navigate=useNavigate()
    const [Shops,setShops]=useState([])
    useEffect(()=>{
        const fetchShops=async ()=>{
            const result=await fetchShopperShops(token)
            if(result){
                setShops(result)
            }
        }
        fetchShops()
    },[])

  return (
    <div>
      <div className='flex items-center justify-between mt-4 '>
      <h1>
        My Shops
      </h1>
      <IconBtn
      text="Add-Shop"
    onclick={()=>
        navigate("/dashboard/add-shop")
    }

      
      >
 <VscAdd/>
      </IconBtn>
      </div>
      {
        Shops && <ShopperTable shops={Shops} setShops={setShops}/>
      }
    </div>
  )
}

export default MyShops
