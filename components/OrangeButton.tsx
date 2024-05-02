import { cn } from '@/lib/utils'
import React from 'react'

type ButtonProps = {
    label : string;
    additionalStyles ?: string;
}
function OrangeButton({label , additionalStyles} : ButtonProps) {
  return (
    <button className={cn("w-40 bg-[#E53012] border-2 border-white text-white rounded font-medium" , additionalStyles)}>{label}</button>
)
}

export default OrangeButton
