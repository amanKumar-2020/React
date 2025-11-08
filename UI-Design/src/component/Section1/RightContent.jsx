import React from 'react'
import RightCard from './RightCard';

const RightContent = () => {
  return (
    <div className="h-full w-3/2 px-12 py-12 overflow-auto flex gap-10">
      <RightCard
        number="1"
        buttom="satisfied"
        img="https://thumbs.dreamstime.com/b/dreamy-young-woman-walking-field-towards-sun-dreamy-young-woman-walking-field-towards-sun-393060687.jpg"
      />
      <RightCard
        number="2"
        buttom="underserver"
        img="https://cdn.mos.cms.futurecdn.net/gEVeMdQ2KRmCyvnpfYBZbY-1200-80.jpg"
      />
      <RightCard
        number="3"
        buttom="Underbankedf"
        img="https://www.stocksy.com/ideas/wp-content/uploads/2021/10/Stocksy_comp_288518-e1657750092901.jpg"
      />
      <RightCard
        number="2"
        buttom="underserver"
        img="https://cdn.mos.cms.futurecdn.net/gEVeMdQ2KRmCyvnpfYBZbY-1200-80.jpg"
      />
    </div>
  );
}

export default RightContent;
