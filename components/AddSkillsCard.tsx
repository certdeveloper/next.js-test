import { skills } from "@/constants";
import { MouseEventHandler, useMemo, useState } from "react";
import { MdKeyboardArrowLeft, MdAdd } from "react-icons/md";
import SkillLevelBar from "./SkillLevelBar";
import { motion } from 'framer-motion';
import { useAppDispatch } from "@/hooks/useStore";
import { addSkill } from "@/redux/skills/skillsSlice";

export interface AddSkillsCardProps {
  visible: boolean,
  onClose: () => void
}
const AddSkillSCard = ({ visible, onClose }: AddSkillsCardProps) => {
  const [searchVal, setSearchVal] = useState<string>("");

  const filteredSkills = useMemo(() => {
    return skills.filter(data => data.toLocaleLowerCase().indexOf(searchVal.toLocaleLowerCase()) >= 0 ? true : false)
  }, [searchVal])

  const [selectedSkill, setSelectedSkill] = useState<string>("")
  const [level, setLevel] = useState<number>(0)
  const dispatch = useAppDispatch()

  const handleAdd = () => {
    if (selectedSkill) {
      dispatch(addSkill({ name: selectedSkill, level: 'Expert', rate: level }));
      onClose && onClose();
    }
  }
  return (
    <motion.div
      transition={{ duration: .2 }}
      animate={{ left: visible ? 0 : '100%' }}
      className="absolute w-[100vw] h-[100vh] top-0 bg-fuchsia-50 p-5 transition-all"
    >
      <div className="md:w-1/4 w-ful mx-auto text-left">
        <div className="flex-1 text-center relative">
          <button
            className="rounded-3xl bg-white p-2 text-2xl absolute left-0 hover:opacity-70"
            onClick={onClose}
          >
            <MdKeyboardArrowLeft />
          </button>
          <h2 className="text-3xl font-medium">Skills</h2>
          <p className="text-[20px] text-zinc-500">(Not specified)</p>
        </div>
        <p className="text-[20px] text-zinc-500 mt-2">Skill</p>
        <input
          type="text"
          value={searchVal}
          onChange={(e) => { setSearchVal(e.target.value) }}
          className="w-full bg-[rgba(0,0,0,0.1)] rounded-md border-b-2 border-[#231025] mt-2 p-2"
        />
        <div style={{ height: 200 }} className="mt-3">
          {filteredSkills.map((skillName, index) => (
            <div
              key={index}
              onClick={() => setSelectedSkill(skillName)}
              className={"flex p-1 px-2 border border-gray-300 bg-white hover:opacity-90 hover:bg-slate-100 cursor-pointer " + (selectedSkill == skillName ? "opacity-70 bg-slate-200" : "")}
            >
              <div>
                <div className="p-2 bg-[#231025] text-white">
                  <MdAdd />
                </div>
              </div>
              <div className="flex-1 p-1 px-2">
                {skillName}
              </div>
            </div>
          ))}
          <div className="mt-3">
            <p className="text-lg font-medium text-gray-500">
              Skill Level — <small className="text-[#634b67]">Expert</small>
            </p>
          </div>
          <div>
            <SkillLevelBar
              value={level}
              className="h-14 rounded-lg"
              onChange={(e, nValue) => { setLevel(nValue) }}
            />
          </div>
          <button
            className="w-full mt-6 bg-[#231025] hover:bg-[#371932] text-white p-2 font-normal "
            onClick={handleAdd}>Done</button>
        </div>
      </div>

    </motion.div>
  )
}

export default AddSkillSCard;