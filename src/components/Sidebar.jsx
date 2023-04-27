import React from "react";

function Sidebar() {
  return (
    <div className=' w-64 font-Inter pl-3 py-3 pr-4 text-xs'>
      {/* category */}
      <div className='menu-item'>
        <span className='font-bold'>category</span>
        <ul className='p-2'>
          <li>Full avatar</li>
          <li>Others</li>
        </ul>
      </div>
      {/* contents */}
      <div className='menu-item'>
        <span className='font-bold'>contents</span>
        <ul className='p-2'>
          <li>
            <input type='checkbox' id='quest' className='mr-1' />
            <label htmlFor='quest'>VRChat(Quest)</label>
          </li>
          <li>
            <input type='checkbox' id='pcvr' className='mr-1' />
            <label htmlFor='pcvr'>VRChat(PCVR)</label>
          </li>
          <li>
            <input type='checkbox' id='others' className='mr-1' />
            <label htmlFor='others'>Others</label>
          </li>
        </ul>
      </div>

      {/* price */}
      <div className='menu-item'>
        <span className='font-bold'>price</span>
        <ul className='p-2'>
          <li>
            <input type='checkbox' id='10' className='mr-1' />
            <label htmlFor='10'>Under $10</label>
          </li>
          <li>
            <input type='checkbox' id='20' className='mr-1' />
            <label htmlFor='20'>$10 to $20</label>
          </li>
          <li>
            <input type='checkbox' id='30' className='mr-1' />
            <label htmlFor='30'>$20 to $30</label>
          </li>
          <li>
            <input type='checkbox' id='40' className='mr-1' />
            <label htmlFor='40'>$30 to $40</label>
          </li>
          <li>
            <input type='checkbox' id='50' className='mr-1' />
            <label htmlFor='50'>$40 to $50</label>
          </li>
          <li>
            <input type='checkbox' id='60' className='mr-1' />
            <label htmlFor='60'>$50 to $70</label>
          </li>
          <li>
            <input type='checkbox' id='70' className='mr-1' />
            <label htmlFor='70'>$70 & above</label>
          </li>
        </ul>
      </div>

      {/* polygon amount */}
      <div className='menu-item'>
        <span className='font-bold'>Polygon amount</span>
        <ul className='p-2'>
          <li>
            <input type='checkbox' id='7500' className='mr-1' />
            <label htmlFor='7500'>Under △7,500</label>
          </li>
          <li>
            <input type='checkbox' id='10000' className='mr-1' />
            <label htmlFor='10000'>△7,500 to △10,000</label>
          </li>
          <li>
            <input type='checkbox' id='15000' className='mr-1' />
            <label htmlFor='15000'>△10,000 to △15,000</label>
          </li>
          <li>
            <input type='checkbox' id='20000' className='mr-1' />
            <label htmlFor='20000'>△15,000 to △20,000</label>
          </li>
          <li>
            <input type='checkbox' id='32000' className='mr-1' />
            <label htmlFor='32000'>△20,000 to △32,000</label>
          </li>
          <li>
            <input type='checkbox' id='70000' className='mr-1' />
            <label htmlFor='70000'>△32,000 to △70,000</label>
          </li>
          <li>
            <input type='checkbox' id='80000' className='mr-1' />
            <label htmlFor='80000'>△70,000 & Above</label>
          </li>
        </ul>
      </div>

      {/* autoload */}
      <div className='menu-item'>
        <span className='font-bold'>Auto upload supported</span>
        <ul className='p-2'>
          <li>
            <input type='checkbox' id='supported' className='mr-1' />
            <label htmlFor='supported'>Supported</label>
          </li>
          <li>
            <input type='checkbox' id='unsupported' className='mr-1' />
            <label htmlFor='unsupported'>unsupported</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
