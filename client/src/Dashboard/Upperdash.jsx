import React from 'react'
import PieChartExample from './PieChart'
import BookWeights from './BookWeight'
import BarGraph from './BarGraph'
import DashBoardPromo from './DashPro'


const UpperDashBoard = () => {
  return (
    <div>
      <DashBoardPromo/>
      <PieChartExample/>
      <BookWeights/>
      <BarGraph/>
    </div>

    
    
  )
}

export default UpperDashBoard
