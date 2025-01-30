import style from './navbar.module.css'
import logo from './../../assets/logo/logo.png';
import { GoPlus } from 'react-icons/go';
import PropTypes from 'prop-types';

function Navbar({addItem, addItem2, inputValue, setInputValue}){
   const maxInputLength = 17;
      
   
   return(
   
   <>
      <nav className={style.navbar}>
         <div className={style.logoHolder}>
            <img src={logo} className={style.logo} alt="logo" />
            <h1 className={style.title}>واران پروژه</h1>
         </div>

         <button className={style.make}><GoPlus /> فضای کار جدید</button>

         <div className={style.options}>
            <div className={style.item}>تغییر چیدمان</div>
            <div className={style.item}>الگوهای اخیر</div>
            <div className={style.item}></div>
         </div>

         <input className={style.list}
            type="text"
            placeholder="نام لیست"
            maxLength={maxInputLength}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={addItem2}
         >
         </input>

         <button className={style.addList} onClick={addItem}>اضافه کردن لیست</button>

      </nav>
   </>


   )}


   Navbar.propTypes = {
      addItem: PropTypes.func,
      addItem2: PropTypes.func,
      inputValue: PropTypes.string,
      setInputValue: PropTypes.func,
   };
   
   export default Navbar;