// Result.js
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Result = () => {
  const [resultData, setResultData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showTable, setShowTable] = useState(false); 

  const {
    register,
    reset,getValues,
    handleSubmit,setValue,
    formState: { isSubmitting,errors,isSubmitSuccessful},
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      Object.keys(data).forEach((key) => {
        setValue(key, data[key].trim());
      });
  
      const response = await fetch("https://mefadmin.onrender.com/api/fetch", {
        method: "POST",
        body: JSON.stringify(getValues()),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      setResultData(result?.data);
      if (!result?.data) {
       
        toast.error("Invalid credentials");
      } else {
        setShowTable(true);
      }
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=>{
  
    reset()
  },[isSubmitSuccessful])

  return (
    <div className="w-full h-screen py-28 flex flex-col items-center ">
      <div className="max-w-lg px-8 w-full text-gray-600 space-y-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <TextField
              className="w-32"
              label="Registration Number"
              placeholder="Enter Registration Number"
              InputLabelProps={{ shrink: true }}
              fullWidth
              {...register("regnum", {
                required: {
                  value: true,
                  message: "Please Enter a Registration Number",
                  trim:true
                },
              })}
            />
            <p className="text-red-400 text-xs my-2">{errors?.regnum?.message}</p>
          </div>

          <div className="mb-4">
            <TextField
              className=""
              label="Mother Name"
              placeholder="Enter Mother Name"
              InputLabelProps={{ shrink: true }}
              fullWidth
              {...register("mothername", {
                required: {
                  value: true,
                  message: "Please Enter Mother Name",
                  trim:true
                },
              })}
            />
                        <p className="text-red-400 text-xs my-2">{errors?.mothername?.message}</p>

          </div>

          <button
            disabled={isSubmitting}
            className="h-14 text-white rounded hover:opacity-90 text-lg w-full font-thin px-4 py-2 bg-brandPrimary cursor-pointer"
          >
            {isLoading ? "Checking..." : "Check Result"}
          </button>
        </form>
      </div>


     { showTable &&  <div className="container mx-auto mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  Father Name
                </th>
                <th className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  Mother Name
                </th>
                <th className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  Date of Birth
                </th>
                <th className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  Registration Number
                </th>
                <th className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  Course
                </th>
                <th className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  Year of Passing
                </th>
                <th className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  {resultData?.name || "No Data"}
                </td>
                <td className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  {resultData?.fathername || "No Data"}
                </td>
                <td className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  {resultData?.mothername || "No Data"}
                </td>
                <td className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  {resultData?.dob || "No Data" }
                </td>
                <td className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  {resultData?.regnum || "No Data" }
                </td>
                <td className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  {resultData?.course || "No Data"}
                </td>
                <td className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  {resultData?.yearofpassing || "No Data"}
                </td>
                <td className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 md:py-4 lg:py-5 xl:py-6">
                  {resultData?.percentage || "No Data"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>}
 

      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-75 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-brandPrimary"></div>
        </div>
      )}
    </div>
  );
};

export default Result;
