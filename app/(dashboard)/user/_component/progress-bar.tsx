"use client"
import { Progress } from '@/components/ui/progress'
import React from 'react'
interface ProgressBarProps{
    progNumber: number
}
const Progressbar = ({progNumber}:ProgressBarProps) => {
    const [progress, setProgress] = React.useState(10)
 
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(progNumber), 500)
      return () => clearTimeout(timer)
    }, [progNumber])
   
    return <Progress value={progress} className="w-[60%]" />
}

export default Progressbar
