import { useEffect, useRef, useState } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { Link,  useNavigate } from "react-router-dom"

import ShopSubSectionCard from "./ShopSubSectionCard"

export default function ShopSectionCard({ shop,shopId, isActive, handleActive }) {
  const contentEl = useRef(null)
   const navigate=useNavigate()
  // Accordian state
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(isActive?.includes(shop._id))
  }, [isActive])
  const [sectionHeight, setSectionHeight] = useState(0)
  useEffect(() => {
    setSectionHeight(active ? contentEl.current.scrollHeight : 0)
  }, [active])
  // // console.log("this is subsection of this shop",shop)

  return (
    <div className="overflow-hidden border border-solid border-richblack-600 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500 p-8 px-12 text-richblack-5 last:mb-0 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
      <div>
        <div
          className={`flex cursor-pointer items-start justify-between bg-opacity-20 px-7  py-6 transition-[0.3s]`}
          onClick={() => {
            handleActive(shop._id)
          }}
        >
          <div className="flex items-center gap-2">
            <i
              className={
                isActive.includes(shop._id) ? "rotate-180" : "rotate-0"
              }
            >
              <AiOutlineDown />
            </i>
            <p>{shop?.sectionName}</p>
          </div>
          <div className="space-x-4">
            <span className="text-yellow-25">
              {`${shop.subSection.length || 0} item(s)`}
            </span>
            <span>{shop?.subSection.title}</span>
            
              
            <button
             onClick={()=>{
              navigate(`/dashboard/edit-section/${shopId}/section/${shop._id}/sectionName/${shop.sectionName}`)
             }}>
              Add Items
             </button>
              
              
            
          </div>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`relative h-0 overflow-hidden bg-richblack-900 transition-[height] duration-[0.35s] ease-[ease]`}
        style={{
          height: sectionHeight,
        }}
      >
        <div className="text-textHead   px-7 py-6 font-semibold grid grid-cols-3 place-items-center gap-4">
          {shop?.subSection?.map((subSec, i) => {
            return <ShopSubSectionCard subSec={subSec} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}