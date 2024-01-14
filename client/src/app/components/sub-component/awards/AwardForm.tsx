import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { StyledInput, StyledLabel, StyledTextArea } from "@/app/utils/styles";
// import "flatpickr/dist/themes/material_green.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { instance } from "@/app/api/instance";
import { addAwards } from "@/app/store/resumeSlice";
export const awardSchema = z.object({
  awardTitle: z.string({ required_error: "award title is required" }),
  organization: z.string(),
  city: z.string(),
  description: z.string({ required_error: "description is required" }),
  receivedDate: z.string(),
  visibility: z.boolean().default(false),
});

export type TAwardSchema = z.infer<typeof awardSchema>;
const AwardForm = ({ items }: { items: TAwardSchema }) => {
  const dispatch = useDispatch();
  //   const [jobTitle, setjobTitle] = useState<string>(items?.jobTitle);
  //   const [employer, setEmployer] = useState<string>(items?.employer);
  //   const [city, setCity] = useState<string>(items?.city);
  //   const [description, setDes] = useState<string>(items?.city);
  const token = useSelector((state: RootState) => state.token);
  const resumeId = useSelector(
    (state: RootState) => state.resumeToken.resumeId
  );
  const [receivedDate, setReceivedDate] = useState<string>(items?.receivedDate);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TAwardSchema>({
    resolver: zodResolver(awardSchema),
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: TAwardSchema) => {
    // TODO: submit to servers
    // ...
    const awardRes = await instance({
      url: `/award`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        city: data.city,
        description: data.description,
        awardTitle: data.awardTitle,
        organization: data.organization,
        receivedDate: data.receivedDate,
        resumeId: resumeId,
      },
    });
    console.log(awardRes.data.success);
    // console.log([...expeRes?.data.experience])
    if (awardRes.data.success) {
      dispatch(addAwards(awardRes?.data.award));
    }

    setReceivedDate("");
    reset();
  };
  const handleInputChange = (fieldName: keyof TAwardSchema, value: string) => {
    setValue(fieldName, value);
  };
  const variants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut", // Choose an easing function (e.g., easeInOut, easeOut, etc.)
      },
    },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        key={items.awardTitle}
        initial="initial"
        exit="exit"
        animate="animate"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        variants={variants}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2 mt-4 ease-in-out"
        >
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="awardTitle">AwardTitle</StyledLabel>
              <StyledInput
                defaultValue={items?.awardTitle}
                type="text"
                id="awardTitle"
                className="px-4 py-2 rounded"
                // onChange={(e) => handleInputChange("projectTitle", e.target.value)}
                {...register("awardTitle", { required: true })}
              />
              {errors.awardTitle && (
                <span className="text-red-500">
                  {errors.awardTitle.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="organization">Organization</StyledLabel>
              <StyledInput
                defaultValue={items?.organization}
                type="text"
                id="organization"
                className="px-4 py-2 rounded"
                // onChange={(e) => handleInputChange("projectTitle", e.target.value)}
                {...register("organization", { required: true })}
              />
              {errors.organization && (
                <span className="text-red-500">
                  {errors.organization.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="city">City</StyledLabel>
              <StyledInput
                defaultValue={items?.organization}
                type="text"
                id="city"
                className="px-4 py-2 rounded"
                // onChange={(e) => handleInputChange("projectTitle", e.target.value)}
                {...register("city", { required: true })}
              />
              {errors.city && (
                <span className="text-red-500">{errors.city.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="receivedDate">Received Date</StyledLabel>
              <DatePicker
                value={receivedDate}
                id="completionDate"
                className="w-[100%] px-4 py-2 rounded outline-none bg-gray-200 focus:border-b-4 focus:border-b-blue-500"
                onChange={(date) => {
                  if (date) {
                    const month = date.toLocaleString("default", {
                      month: "long",
                    });
                    const year = date.getFullYear();
                    handleInputChange("receivedDate", `${month} ${year}`);
                    setReceivedDate(`${month} ${year}`);
                  }
                }}
                dateFormat="dd/MM/yyyy"
                isClearable
                showMonthYearPicker
                // {...register("startDate")}
              />
              {errors.receivedDate && (
                <span className="text-red-500">
                  {errors.receivedDate.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="description">Description</StyledLabel>
              <StyledTextArea
                id="description"
                defaultValue={items?.description}
                rows={6}
                cols={50}
                placeholder="Enter description..."
                className="w-full px-3 py-2 border rounded-md bg text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline"
                //onChange={(e) => handleInputChange("description", e.target.value)}
                {...register("description")}
              ></StyledTextArea>
              {errors.description && (
                <span className="text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>

          {/* Existing email, password, confirmPassword inputs */}
          {/* ... */}

          <button
            type="submit"
            className="bg-blue-500 text-white disabled:bg-gray-500 py-2 rounded"
          >
            Add
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export default AwardForm;
