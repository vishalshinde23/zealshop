import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { RxCross2 } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"

import {
  createSubSection,updateSubSection
} from "../../../../../services/operations/ShopDetailsApi"
  import { setShop } from "../../../../../slices/shopSlice"
  import IconBtn from "../../../../common/IconBtn"
  import Upload from "../Upload"





export default function SubSectionModal({
  modalData,
  setModalData,
  add = false,
  view = false,
  edit = false,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm()

  // // console.log("view", view)
  // // console.log("edit", edit)
  // // console.log("add", add)

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { token } = useSelector((state) => state.auth)
  const { shop} = useSelector((state) => state.shop)

  useEffect(() => {
    if (view || edit) {
      // // console.log("modalData", modalData)
      setValue("itemTitle",modalData.title)
      setValue("itemDesc",modalData.description)
      setValue("itemPrice",modalData.price)
      setValue("itemImage",modalData.imageUrl)
    }
  }, [])

  // detect whether form is updated or not
  const isFormUpdated = () => {
    const currentValues = getValues()
    // // console.log("changes after editing form values:", currentValues)
    if (
      currentValues.itemTitle!==modalData.title || currentValues.itemDesc!==modalData.description || currentValues.itemPrice !==modalData.price || currentValues.itemImage!==modalData.ImageUrl
    ) {
      return true
    }
    return false
  }

  // handle the editing of subsection
  const handleEditSubsection = async () => {
    const currentValues = getValues()
    // // console.log("changes after editing form values:", currentValues)
    const formData = new FormData()
    // // console.log("Values After Editing form values:", currentValues)
    formData.append("sectionId",modalData.sectionId)
  formData.append("subSectionId",modalData._id)
  if(currentValues.itemTitle!==modalData.title){
    formData.append("title",currentValues.itemTitle)
  }
  if(currentValues.itemDesc!==modalData.description){
    formData.append("description",currentValues.itemDesc)
  }
  if(currentValues.itemPrice !==modalData.price){
    formData.append("price",currentValues.itemPrice)
  }
  if(currentValues.itemImage!==modalData.imageUrl){
    formData.append("image",currentValues.itemImage)
  }
    setLoading(true)
    const result = await updateSubSection(formData, token)
    if (result) {
      // // console.log("result", result)
      // update the structure of shop
      const updatedShopContent = shop.shopContent.map((section) =>
        section._id === modalData.sectionId ? result : section
      )
      const updatedShop = { ...shop, shopContent: updatedShopContent }
      dispatch(setShop(updatedShop))
    }
    setModalData(null)
    setLoading(false)
  }

  const onSubmit = async (data) => {
    // // console.log(data)
    if (view) return

    if (edit) {
      if (!isFormUpdated()) {
        toast.error("No changes made to the form")
      } else {
        handleEditSubsection()
      }
      return
    }

    const formData = new FormData()
    formData.append("sectionId",modalData)
    formData.append("title",data.itemTitle)
    formData.append("description",data.itemDesc)
    formData.append("price",data.itemPrice)
    formData.append("image",data.itemImage)
    setLoading(true)
    const result = await createSubSection(formData, token)
    if (result) {
      // update the structure of shop
      const updatedShopContent = shop.shopContent.map((section) =>
        section._id === modalData ? result : section
      )
      const updatedShop = { ...shop, shopContent: updatedShopContent }
      dispatch(setShop(updatedShop))
    }
    setModalData(null)
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen  place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500 p-8 px-12">
        {/* Modal Header */}
        <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
          <p className="text-xl font-semibold text-richblack-5">
            {view && "Viewing"} {add && "Adding"} {edit && "Editing"} Item
          </p>
          <button onClick={() => (!loading ? setModalData(null) : {})}>
            <RxCross2 className="text-2xl text-richblack-5" />
          </button>
        </div>
        {/* Modal Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 px-8 py-10 text-black"
        >
          {/* Item Video Upload */}
          <Upload
            name="itemImage"
            label="itemImage"
            register={register}
            setValue={setValue}
            errors={errors}
            
            viewData={view ? modalData.imageUrl : null}
            editData={edit ? modalData.imageUrl : null}
          />
          {/* Item Title */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-richblack-5" htmlFor="itemTitle">
              Item Title {!view && <sup className="text-pink-200">*</sup>}
            </label>
            <input
              disabled={view || loading}
              id="itemTitle"
              placeholder="Enter Item Title"
              {...register("itemTitle", { required: true })}
              className="form-style w-full"
            />
            {errors.itemTitle && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Item title is required
              </span>
            )}
          </div>
          {/* Item Description */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-richblack-5" htmlFor="itemDesc">
              Item Description{" "}
              {!view && <sup className="text-pink-200">*</sup>}
            </label>
            <textarea
              disabled={view || loading}
              id="itemDesc"
              placeholder="Enter Item Description"
              {...register("itemDesc", { required: true })}
              className="form-style resize-x-none min-h-[130px] w-full"
            />
            {errors.itemDesc && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Item Description is required
              </span>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-richblack-5" htmlFor="itemPrice">
              Item  Price{" "}
              {!view && <sup className="text-pink-200">*</sup>}
            </label>
            <input type="text"
              disabled={view || loading}
              id="itemPrice"
              placeholder="Enter Item Description"
              {...register("itemPrice", { required: true })}
              className="form-style resize-x-none  w-full"
            />
            {errors.itemPrice && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Item is required
              </span>
            )}
          </div>
          {!view && (
            <div className="flex justify-end">
              <IconBtn
                disabled={loading}
                text={loading ? "Loading.." : edit ? "Save Changes" : "Save"}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  )
}