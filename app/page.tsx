"use client"
import AddSkillSCard from '@/components/AddSkillsCard';
import SkillCard from '@/components/SkillCard';
import { useAppSelector } from '@/hooks/useStore'
import { useState } from 'react';

export default function Home() {
  const skillData = useAppSelector(state => state.skills.data);
  const [showAddSkillsCard, setShowAddSkillsCard] = useState<boolean>(false)

  return (
    <div>
      <div className="bg-white p-5 px-7 text-neutral-800">
        <div className="md:w-1/4 w-ful mx-auto text-left">
          <div>
            <h2 className="font-bold text-2xl">Skill Section</h2>
            <p className="text-md font-[500] mt-2">
              Show of your skills to clients, by writing out your job history, visualizer was able to seelct the top skills suitable for yuo, you are free to add and remove skills at will.
            </p>
            <div className="mt-3 text-md  text-zinc-500 font-[500]">
              {skillData.map((data, index: number) => (
                <div key={index} className="mt-1">
                  <SkillCard data={data} />
                </div>
              ))}
              <button
                className="w-full mt-6 bg-[#231025] hover:bg-[#371932] text-white p-2 font-normal"
                onClick={() => { setShowAddSkillsCard(true) }}
              >Add New Skill</button>
            </div>
          </div>
        </div>
      </div>
      <AddSkillSCard
        visible={showAddSkillsCard}
        onClose={() => setShowAddSkillsCard(false)}
      />
    </div>
  )
}
