import style from './options.module.css'
import PropTypes from 'prop-types';
// import { useState } from 'react';

function Options({tasks, allTitles}) {

   // const [selectedOption,setSelectedOption] = useState('')

  return (
    <div className={style.options}>
      <div className={style.titleContainer}>
         <div className={style.title}>نام لیست:</div>
         <div className={style.titleName}>{tasks}</div>
      </div>
      <div className={style.title}>انتقال به
         <select className={style.move}>
            {  
               allTitles.map((item, index) => (
                     
                  item == tasks ?
                  <option className={style.list} key={index} selected>
                     <div className={style.default}>لیست کنونی</div>
                  </option>
                  :
                  <option className={style.list} key={index}>{item}</option>
                  
               ))
            }
         </select>
      </div>
    </div>
  )
}

Options.propTypes = {
   tasks: PropTypes.string,
   allTitles: PropTypes.array,
};

export default Options