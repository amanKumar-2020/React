import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className="h-[95%] w-full flex gap-9 items-center px-16 py-16">
      <LeftContent />
      <RightContent />
    </div>
  );
}

export default Page1Content;
