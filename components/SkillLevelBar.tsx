'use client'
import { CSSProperties, MouseEvent, useEffect, useState } from 'react'
export interface SkillLevelBarProps {
  value: number,
  readonly?: boolean,
  onChange?: (e: MouseEvent<HTMLElement>, nValue: number) => void,
  className?: string,
  style?: CSSProperties | undefined
}

const SkillLevelBar = ({ value = 0, readonly, onChange, className, style }: SkillLevelBarProps) => {
  const [hoverValue, setHoverValue] = useState<number>(0);
  useEffect(() => {
    setHoverValue(value)
  }, [value])

  const handleMouseOver = (_value: number) => () => {
    if (!readonly) {
      setHoverValue(_value)
    }
  }

  const handleMouseOut = (_value: number) => () => {
    if (!readonly)
      setHoverValue(value)
  }

  const handleClick = (_value: number) => (e: MouseEvent<HTMLElement>) => {
    onChange && onChange(e, _value)
  }
  return (
    <div className={"w-full h-8 bg-[#f1e1f3] grid grid-cols-5 rounded-sm overflow-hidden " + className} style={style}>
      <div
        className={`h-full ${(hoverValue >= 5) && 'bg-[#634b67]'} py-1.5`}
        onMouseOver={handleMouseOver(5)}
        onMouseOut={handleMouseOut(5)}
        onClick={handleClick(5)}
      >
        <div className="w-full h-full"></div>
      </div>
      <div
        className={`h-full ${(hoverValue >= 4) && 'bg-[#634b67]'} py-1.5`}
        onMouseOver={handleMouseOver(4)}
        onMouseOut={handleMouseOut(4)}
        onClick={handleClick(4)}
      >
        <div className="w-full h-full border-l border-[#634b67]"></div>
      </div>
      <div
        className={`h-full ${(hoverValue >= 3) && 'bg-[#634b67]'} py-1.5`}
        onMouseOver={handleMouseOver(3)}
        onMouseOut={handleMouseOut(3)}
        onClick={handleClick(3)}
      >
        <div className="w-full h-full border-l border-[#634b67]"></div>
      </div>
      <div
        className={`h-full ${(hoverValue >= 2) && 'bg-[#634b67]'} py-1.5`}
        onMouseOver={handleMouseOver(2)}
        onMouseOut={handleMouseOut(2)}
        onClick={handleClick(2)}
      >
        <div className="w-full h-full border-l border-[#634b67]"></div>
      </div>
      <div
        className={`h-full ${(hoverValue >= 1) && 'bg-[#634b67]'} py-1.5`}
        onMouseOver={handleMouseOver(1)}
        onMouseOut={handleMouseOut(1)}
        onClick={handleClick(1)}
      >
        <div className="w-full h-full border-l border-[#634b67]"></div>
      </div>
    </div>
  )
}

export default SkillLevelBar