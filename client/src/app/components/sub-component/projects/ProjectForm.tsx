import React, { useRef, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { StyledInput, StyledLabel, StyledTextArea } from "@/app/utils/styles";
// import "flatpickr/dist/themes/material_green.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { setExperienceField } from "@/app/store/expeSlice";
import { setProjectField } from "@/app/store/projectSlice";
import { RootState } from "@/app/store/store";
import { instance } from "@/app/api/instance";
import { addProjects } from "@/app/store/resumeSlice";
export const projectSchema = z.object({
  projectTitle: z.string({ required_error: "project title is required" }),
  description: z.string({ required_error: "description is required" }),
  projectLink: z.string(),
  visibility: z.boolean().default(false),
});

export type TProjectSchema = z.infer<typeof projectSchema>;
const ProjectForm = ({ items }: { items: TProjectSchema }) => {
  const dispatch = useDispatch();
  const token = useSelector((state:RootState)=>state.token);
  const resumeId = useSelector((state:RootState)=>state.resumeToken.resumeId);
  //   const [jobTitle, setjobTitle] = useState<string>(items?.jobTitle);
  //   const [employer, setEmployer] = useState<string>(items?.employer);
  //   const [city, setCity] = useState<string>(items?.city);
  //   const [description, setDes] = useState<string>(items?.city);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TProjectSchema>({
    resolver: zodResolver(projectSchema),
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: TProjectSchema) => {
    // TODO: submit to servers
    // ...
    const projectRes = await instance({
      url: `/project`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        description: data.description,
        projectTitle: data.projectTitle,
        projectLink: data.projectLink,
        resumeId:resumeId
      },
    });
    console.log(projectRes.data.success);
   // console.log([...expeRes?.data.experience])
     if(projectRes.data.success){
       dispatch(addProjects(projectRes?.data.project));
     }

    reset();
  };
  const handleInputChange = (
    fieldName: keyof TProjectSchema,
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
    exit:{ y: -100, opacity: 0 }
  };
  

  return (
    <AnimatePresence>
      <motion.div
       key={items.projectLink}
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
              <StyledLabel htmlFor="projectTitle">Project Title</StyledLabel>
              <StyledInput
                defaultValue={items?.projectTitle}
                type="text"
                id="projectTitle"
                className="px-4 py-2 rounded"
                // onChange={(e) => handleInputChange("projectTitle", e.target.value)}
                {...register("projectTitle", { required: true })}
              />
              {errors.projectTitle && (
                <span className="text-red-500">
                  {errors.projectTitle.message}
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
            <div className="flex flex-col  ">
              <StyledLabel htmlFor="projectLink">Project Link</StyledLabel>
              <StyledInput
                type="text"
                id="projectLink"
                defaultValue={items?.projectLink}
                className="px-4 py-2 rounded"
                onChange={(e) =>
                  handleInputChange("projectLink", e.target.value)
                }
                // {...register("city",{required:true})}
              />
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

export default ProjectForm;
