import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {updateProfile} from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconBtn"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const genders=["Male","Female","Non-Binary","Prefer not to say","other"];
const EditProfile = () => {
  const {user}=useSelector((state)=>state.profile);
  const {token}=useSelector((state)=>state.auth);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {
    register,handleSubmit,formState:{errors}
  }=useForm()
 
  const submitProfileForm=async(data)=>{
    try {
        dispatch(updateProfile(token,data))
    } catch (error) {
      // console.log("ERROR MESSAGE",error.message)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitProfileForm)}
    >
      <div className='flex flex-col my-10 gap-y-6 border-[1px] border-white bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-600 via-indigo-300 to-red-500 p-8 px-12 rounded-md shadow-[5px_5px_0px_0px_rgba(109,40,217)]  '>
        <h2 className='font-medium text-2xl text-white'>
          Profile Information
        </h2>
        <div className='flex flex-col gap-6 justify-center lg:flex-row'>
          <div className='flex flex-col gap-2 lg:w-[45%]'>
            <label htmlFor="firstName"
            className='label-style'>
              First Name
            </label>
            <input type="text"
            name="firstName"
            id="firstName"
            placeholder='enter your firstName'
            className='form-style p-2 rounded-md text-black'
            {...register("firstName",{
              required:true
            })
            }
            defaultValue={user?.firstName}/>
            {
              errors.firstName && (
                <span className=''>
                Please enter your firstName
                </span>
              )
            }
          </div>
          <div className='flex flex-col gap-2 lg:w-[45%]'>
            <label htmlFor="lastName"
            className='label-style'>
              LastName
            </label>
            <input type="text"
            name="lastName"
            id="lastName"
            className='form-style p-2 rounded-md text-black'
            placeholder='enter your lastName'
            {
              ...register("lastName",{
                required:true
              })
            }
            defautlValue={user?.lastName}
            />{
              errors.lastName && (
                <span className=''>
                please enter your last name
                </span>
              )
            }
          </div >
        </div>
         <div className='flex flex-col gap-6 justify-center lg:flex-row'>
          <div className='flex flex-col gap-2 lg:w-[45%]'>
            <label htmlFor='dateofbirth'
            className='label-style'>
             Date of Birth
            </label>
            <input type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            
            className='form-style p-2 rounded-md text-black'
            {
              ...register ('dateOfBirth',{
                required: {
                  value:true,
                  message:
                "please Enter your Date of birth"
                },
                max:{
                  value:new Date().toISOString().split("T")[0],
                  message:"Date of Birth cannot be in the future"
                },
              })
            }
            defaultValue={user?.additionalDetails?.dateOfBirth}
            />
            {
              errors.dateOfBirth && (
                <span>
                  {errors.dateOfBirth}
                </span>
              )
            }
          </div>
          <div className='flex flex-col gap-2 lg:w-[45%]'>
           <label htmlFor="gender">
            Gender
            </label> 
            <select
            type="text"
            name="gender"
            id="gender"
            className='form-style p-2 rounded-md text-black'
            {...register("gender",{
              required:true

              
            })}
             defaultValue={user?.additionalDetails?.gender} >
             {
              genders.map((ele,i)=>{
                return (
                  <option key={i}
                  value={ele}>
                    {ele}

                  </option>
                )
              })
             }
             </select>{
              errors.gender && (
                <span>
                  Please enter your gender
                </span>
              )
             }
          </div>
         </div>
     
      <div className='flex flex-col gap-6  justify-center lg:flex-row'>
        <div className='flex flex-col gap-2 lg:w-[45%]'>
          <label  htmlFor="contactNumber">
          Contact Number
          </label>
          <input
          tyep="tel"
          name="contactNumber"
          id="contactNumber"
          className='form-style p-2 rounded-md text-black'
          placeholder='enter your contact number'
          {
            ...register("contactNumber",{
              required:{
                value:true,
                messge:"Please enter your Contact Number"
              },
              maxLength:{value:12,
              message:"Invalid Contact Number"},
              minLength:{
                value:10,
                message:"Invalid Contact number"
              },
            })

          }
          defaultValue={user?.additionalDetails?.contactNumber}
          />
          {
            errors.contactNumber && (
              <span>
                {errors.contactNumber}
              </span>
            )
          }
        </div>
        <div className='flex flex-col gap-2 lg:w-[45%]'>
          <label htmlFor="about">
           About
          </label>
          <input type="text"
          name="about"
          id="about"
          className='form-style p-2 rounded-md text-black'
          {
            ...register ("about",{
              required:true
            })
          }
          defaultValue={user?.additionalDetails?.about}
          />
           {errors.about && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your About.
                </span>
              )}
        </div>
      </div>
      </div>
      <div className='flex align-center justify-center gap-6 mx-auto  mb-10 '>
        <button 
        onClick={()=>{
          navigate("/dashboard/my-profile")
        }}
        className='bg-white text-black  p-2 rounded-md'>
         cancel
        </button>
          <IconBtn type="submit"text="save" className="px-2"/>
      </div>
    </form>
    </>
  )
}

export default EditProfile
