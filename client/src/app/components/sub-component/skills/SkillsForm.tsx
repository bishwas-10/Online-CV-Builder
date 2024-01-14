import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {motion} from "framer-motion";
import { StyledInput, StyledLabel } from "@/app/utils/styles";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { instance } from "@/app/api/instance";
import { addSKills } from "@/app/store/resumeSlice";
import { TSkillProps } from "@/app/store/types";
export const skillSchema = z
  .object({
    skillTitle: z.string({required_error:"Skill title is required"}),
    level: z.string(),
    visibility:z.boolean().default(false),
  });
  
export type TSkillSchema = z.infer<typeof skillSchema>;
const SkillsForm = ({ items }: { items: TSkillProps }) => {
  const dispatch = useDispatch();
  const token = useSelector((state:RootState )=>state.token);
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
  } = useForm<TSkillSchema>({
    resolver: zodResolver(skillSchema),
    reValidateMode:"onChange",
   
  });

  const onSubmit = async (data: TSkillSchema) => {
    // TODO: submit to servers
    // ...
    const skillRes = await instance({
      url:items._id ? `/skill/${items._id}`:`/skill`,
      method: items._id ?'PUT':'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        skillTitle: data.skillTitle,
        level: data.level,
        resumeId:resumeId
      },
    });
    console.log(skillRes.data.success);
   // console.log([...expeRes?.data.experience])
     if(skillRes.data.success){
       dispatch(addSKills(skillRes?.data.skill));
     }
    
    reset();
  };
  const handleInputChange = (
    fieldName: keyof TSkillSchema,
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
  };
  return (
    <motion.div initial="initial" animate="animate" variants={variants}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 mt-4 ease-in-out"
      >
        <div className="flex flex-row gap-2 w-[100%]">
          <div className="flex flex-col gap-1">
            <StyledLabel htmlFor="skillTitle">Skill Title</StyledLabel>
            <StyledInput
              defaultValue={items?.skillTitle}
              type="text"
              id="skillTitle"
              className="px-4 py-2 rounded"
             // onChange={(e) => handleInputChange("projectTitle", e.target.value)}
               {...register("skillTitle",{required:true})}
            />
            {errors.skillTitle && (
              <span className="text-red-500">{errors.skillTitle.message}</span>
            )}
          </div>
         
        <div className="flex flex-col  ">
          <StyledLabel htmlFor="level">Level</StyledLabel>
          <StyledInput
            type="text"
            id="level"
            defaultValue={items?.level}
            className="px-4 py-2 rounded"
            onChange={(e) => handleInputChange("level", e.target.value)}
            //{...register("level")}
          />
         {errors.level && (
              <span className="text-red-500">{errors.level.message}</span>
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
  );
};

export default SkillsForm;
