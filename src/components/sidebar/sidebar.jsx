import Item from "../item/item";
import style from './sidebar.module.css';
import { useState } from "react";
import PropTypes from "prop-types";

// icons imported from react-icons
import { CiViewBoard, CiUser, CiSettings, CiViewTable, CiCalendar      } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowDroprightCircle } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";


// This is the sidebar component which includes the options.
// Each option is the <item /> component that receives the requrired props.

function Sidebar({onSidebarChange}){
   const [isClosed,setIsClosed] = useState(false);

   const toggleSidebar = () => {
      setIsClosed(!isClosed);
      onSidebarChange(isClosed)
   };
   
return(
   <>
      <div className={`${style.sidebar} ${isClosed ? style.closed : null}`}>
            <div className={style.toggleSidebar} onClick={toggleSidebar}>
               <IoIosArrowDroprightCircle className={style.toggleIcon} />
               <p className={style.action}>{isClosed ? 'باز کردن منو' : 'بستن منو'}</p>
            </div>
         <div className={`${style.miniClosed} ${isClosed ? style.miniSidebar : null}`}>
            <div className={style.iconHolder}><CiViewBoard className={style.icon}/></div>
            <div className={style.iconHolder}><CiUser className={style.icon}/></div>
            <div className={style.iconHolder}><CiSettings className={style.icon}/></div>
            <div className={style.iconHolder}><CiViewTable className={style.icon}/></div>
            <div className={style.iconHolder}><CiCalendar className={style.icon}/></div>
            <div className={style.iconHolder}><AiOutlineFundProjectionScreen className={style.icon}/></div>
         </div>

         <div className={style.holder}>
            <Item
               StartingIcon= {CiViewBoard}
               lable='فضاهای کار'
               hover={true}
            />

            <Item
               StartingIcon= {CiUser}
               lable='اعضای تیم'
               EndingIcon={GoPlus}
               hover={true}
               iconHover={true}
            />

            <Item
               StartingIcon= {CiSettings}
               lable='تنظیمات فضای کار'
               EndingIcon={IoIosArrowDown}
               hover={true}
            />
         </div>

         <div className={style.holder}>
            <Item
               lable='چیدمان فضای کار'
               EndingIcon={GoPlus}
               iconHover={true}
            />

            <Item
               StartingIcon= {CiViewTable}
               lable='جدول'
               hover={true}
            />

            <Item
               StartingIcon= {CiCalendar }
               lable='تقویم'
               hover={true}
            />
         </div>

         <div className={style.holder}>
            <Item
               lable='فضاهای کار شما'
               EndingIcon={GoPlus }
               iconHover={true}
            />

            <Item
               StartingIcon= {AiOutlineFundProjectionScreen }
               lable='هامینگ'
               hover={true}
            />
         </div>
      </div>
   </>
)}

Sidebar.propTypes = {
   onSidebarChange: PropTypes.func,
};
   
export default Sidebar;