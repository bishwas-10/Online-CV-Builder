import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { StyledInput, StyledLabel, StyledTextArea } from "@/app/utils/styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { instance } from "@/app/api/instance";
import { addTrainings } from "@/app/store/resumeSlice";
import { TTrainingProps } from "@/app/store/types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const trainingSchema = z.object({
  trainingTitle: z.string({ required_error: "training title is required" }),
  institute: z.string(),
  description: z.string({ required_error: "description is required" }),
  completionDate: z.string(),
  visibility: z.boolean().default(false),
});

export type TTrainingSchema = z.infer<typeof trainingSchema>;
const TrainingForm = ({ items }: { items: TTrainingProps }) => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.token);
  const resumeId = useSelector(
    (state: RootState) => state.resumeToken.resumeId
  );

  const [completionDate, setCompletionDate] = useState<string>(
    items?.completionDate
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TTrainingSchema>({
    resolver: zodResolver(trainingSchema),
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: TTrainingSchema) => {
    // TODO: submit to servers
    // ...
    const trainingRes = await instance({
      url:items._id ? `/training/${items._id}`:`/training`,
      method: items._id ?'PUT':'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        description: data.description,

        trainingTitle: data.trainingTitle,
        institute: data.institute,
        completionDate: data.completionDate,
        resumeId: resumeId,
      },
    });

    if (trainingRes.data.success) {
      toast.success("Training field added successfully");
      dispatch(addTrainings(trainingRes?.data.training));
    }else{
      toast.error("error adding Training field");
    }
    reset();
  };
  const handleInputChange = (
    fieldName: keyof TTrainingSchema,
    value: string
  ) => {
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
        key={items.trainingTitle}
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
              <StyledLabel htmlFor="trainingTitle">Training Title</StyledLabel>
              <StyledInput
                defaultValue={items?.trainingTitle}
                type="text"
                id="trainingTitle"
                className="px-4 py-2 rounded"
                // onChange={(e) => handleInputChange("projectTitle", e.target.value)}
                {...register("trainingTitle", { required: true })}
              />
              {errors.trainingTitle && (
                <span className="text-red-500">
                  {errors.trainingTitle.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="institute">Institute</StyledLabel>
              <StyledInput
                defaultValue={items?.institute}
                type="text"
                id="institute"
                className="px-4 py-2 rounded"
                // onChange={(e) => handleInputChange("projectTitle", e.target.value)}
                {...register("institute", { required: true })}
              />
              {errors.institute && (
                <span className="text-red-500">{errors.institute.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <StyledLabel htmlFor="completionDate">
                Completion Date
              </StyledLabel>
              <DatePicker
                value={completionDate}
                id="completionDate"
                className="w-[100%] px-4 py-2 rounded outline-none bg-gray-200 focus:border-b-4 focus:border-b-blue-500"
                onChange={(date) => {
                  if (date) {
                    const month = date.toLocaleString("default", {
                      month: "long",
                    });
                    const year = date.getFullYear();
                    handleInputChange("completionDate", `${month} ${year}`);
                    setCompletionDate(`${month} ${year}`);
                  }
                }}
                dateFormat="dd/MM/yyyy"
                isClearable
                showMonthYearPicker
                // {...register("startDate")}
              />
              {errors.completionDate && (
                <span className="text-red-500">
                  {errors.completionDate.message}
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
        <ToastContainer autoClose={1600} />
      </motion.div>
    </AnimatePresence>
  );
};

export default TrainingForm;
