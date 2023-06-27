import React, { useState } from 'react';

export default function CountInterno() {

  const [count, setCount] = useState(0);

  const buttons = [
    {label: '+', action: ()=>{setCount(count+1)}},
    {label: '-', action: ()=>{setCount(count-1)}},
    {label: '^2', action: ()=>{setCount(count**2)}},
    {label: 'AC', action: ()=>{setCount(0)}},
  ];
  
  return(
    <div className="flex flex-col space-y-4">
      <output className="col-span-2">{count}</output>
      <div className='space-x-4 [&>button]:px-4 [&>button]:text-white [&>button]:rounded [&>button]:bg-slate-500'>
        {buttons.map((button, index) => (
          <button key={index} onClick={button.action}>{button.label}</button>
        ))}
      </div>
    </div>
  );
}
