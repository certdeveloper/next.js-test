import { TSkillDetail } from "@/redux/skills/skillsSlice"
import { MdMoreHoriz } from "react-icons/md"
import SkillLevelBar from "./SkillLevelBar"

export interface SkillCardProps {
  data: TSkillDetail
}

const SkillCard = ({ data }: SkillCardProps) => {
  return (
    <div className="shadow-lg p-5 rounded-lg">
      <div className="flex justify-between items-center ">
        <p> {data.level}</p>
        <button className="hover:opacity-50 hover:bg-gray-200 rounded-full p-1">
          <MdMoreHoriz />
        </button>
      </div>
      <p className="mt-3">Skill</p>
      <div className="flex justify-between items-center">
        <div className="flex-1 text-neutral-900">
          {data.name}
        </div>
        <div className="flex-1">
          <p>Skill Level — <small className="text-[#634b67]">{data.level}</small></p>
          <SkillLevelBar value={data.rate} readonly />
        </div>
      </div>
    </div>
  )
}

export default SkillCard