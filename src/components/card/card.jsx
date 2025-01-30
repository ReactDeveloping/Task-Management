import style from "./card.module.css"
import PropTypes from "prop-types";
import { useState } from "react";
import { GoPlus } from 'react-icons/go';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsArrowsCollapse, BsArrowsExpand } from "react-icons/bs";
import Options from "../options/options";





function Card({allTitles, title, setTitles, index}){
   // Variables containing the maximum allowed character type in the inputs.
   const maxInputLength = 20; // used for the input related to the main title of each list (className: editInput).
   const maxExtendedLength = 30 // used for the inputs related to the titles of each task (className: input, taskInput).

   // The main state including an array of all the titles of each task (title of each blue card).
   const [tasks, setTasks] = useState([])

   // The state that receives the task's title (blue card's title) from the input (className: taskInput) used for verification.
   const [inputTask, setInputTask] = useState('');

   //The state that determines the expanded or shrinked state for each task individually.
   const [isExpanded,setIsExpanded] = useState(Array(tasks.length).fill(false)); // all tasks are set to false (= shrinked)

   //The state that determines if the options is open or close for each task individually.
   const [isOpen,setIsOpen] = useState(Array(tasks.length).fill(false)); // all options are set to false (= shrinked)

   // States for controlling the editing proccess of the main title in each list (white card).
   const [isEditing,setIsEditing] = useState(false) // the state that determines whether to show the editing input or show the main title.
   const [newTitle,setNewTitle] = useState(title) // the state that holds the new name and is used to update the list's title (white card's title).
   
   // The state used for deleting each task (blue card).
   const [deleteItem, setDeleteItem] = useState(false);



   // Algorithm for adding a task (blue card) to the list: 
   // 1. by pressing the plus (+) icon on the right of the input: taskInput.
   const plusClick = () => {
      if(inputTask.trim() && !tasks.includes(inputTask.trim())){ // checks if the input is properly filled and deletes the spaces.
         setTasks([... tasks, inputTask]); // updates the "tasks" state with any new title.
         setInputTask(''); // empties the "InputTask" state for any coming new title.
      } else if (tasks.includes(inputTask.trim())){
         alert('یک آیتم با این نام در بین آیتم های این لیست وجود دارد'); // alerts the user if his new title already exists.
      }
   }
   // 2. by pressing the enter key on the keyboard.
   const handleEnter = (e) => {
      if(e.key === 'Enter' && inputTask.trim() && !tasks.includes(inputTask.trim())){ // additionally, checks the enter key.
         setTasks([...tasks, inputTask]);
         setInputTask('');
      } else if (e.key === 'Enter' && tasks.includes(inputTask.trim())){ // additionally, checks the enter key.
         alert('یک آیتم با این نام در بین آیتم های این لیست وجود دارد')
      }
   }

   // Algorithm for deleting a specific task (blue card).
   // 1. checks if the delete option is pressed to show the deleting warning msg.
   const checkDelete = (index) => {
      setDeleteItem(deleteItem === index ? null : index); // the "deleteItem" state is updated by the index of the selected task to turn to a truthy value and apply the 'open' className which displayes the warning msg.
   }

   // 2. deletes the selected task by the use of its index.
   const deleteFunc = (index) => {
      setTasks(tasks.filter((item, i) => i !== index)); // updates the "tasks" state with the titles that have a different index.
      setDeleteItem(false) // hides the warning msg.
   }

   // Algorithm for editing the title of each task after they are defined.
   const editInput = (e, index) => {
      const newtasks = [...tasks]; // copies all task titles into "newTasks".
      newtasks[index] = e.target.value; // places the edited title in its right position (index).
      setTasks(newtasks) // updates the "tasks" state (the main tasks' state).
   }


   // Algorithm for editing the main title of each list (white card).
   // 1. shows the input for receiving the new title or editing the previous one and hides the main title.
   const handleEdit = () => {
      setIsEditing(true) // turns to a truthy value to apply a conditional class to do the hiding / showing.
   }
   
   // 2a. saves the new title, adds it to the array of titles, and displays it to the user.
   const handleSave = () => {
      setTitles((prevTitles) => {
         const updatedTitles = [...prevTitles]; // copies the previous titles in a new array: updatedTitles.
         updatedTitles[index] = newTitle; // places the "newTitle" received from the editing input in its right position (index).
         return updatedTitles; // updates the "titles" state (main titles state) with the new "updatedTitles".
      })
      setIsEditing(false) // hides the editing input and shows the new title to the user.
   }
   
   // 2b. does the same process in 2a by pressing the enter key.
   const handleSave2 = (e) => {
      if(e.key === 'Enter'){ // checks if the enter key is pressed
         setTitles((prevTitles) => {
            const updatedTitles = [...prevTitles];
            updatedTitles[index] = newTitle;
            return updatedTitles
         })
         setIsEditing(false)
      }
   }

   //Algorithm for expanding any specific task (blue card) or shrinking it.
   const expand = (index) => {
      const newExpanded = [...isExpanded]; // copies the state in "newExpanded" state.
      newExpanded[index] = !newExpanded[index]; // toggles any task to expanded or shrinked using index.
      setIsExpanded(newExpanded); // updates the "isExpanded" card with new states from "newExpanded" state.
   }

   //Algorithm for toggling the options for any specific task (blue card).
   const open = (index) => {
      const newOpen = [...isOpen]; // copies the state in "newExpanded" state.
      newOpen[index] = !newOpen[index]; // toggles any task to expanded or shrinked using index.
      setIsOpen(newOpen); // updates the "isExpanded" card with new states from "newExpanded" state.
   }

   
return(
   
   <>

      <div className={style.cardHolder}>
      {
         isEditing ? (
            <div className={style.editHolder}>
               <input className={style.editInput}
                  type="text"
                  value={newTitle}
                  maxLength={maxInputLength}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onKeyDown={(e) => handleSave2(e)}
               />

               <button className={style.save} onClick={handleSave}>ذخیره</button>
            </div>
         ) : (
            <div className={style.titleHolder}>
               <div className={style.title}>{title}</div>
               <button className={style.edit} onClick={handleEdit}>ویرایش</button>
            </div>
         )
      }

         <div className={style.inputContainer}>
            <div className={style.icons}>
               <div className={style.addTask}
                  onClick={plusClick}
               
               ><GoPlus /></div>
            </div>
            <input className={style.taskInput}
               type="text"
               placeholder="اضافه کردن آیتم جدید"
               maxLength={maxExtendedLength}
               value={inputTask}
               onChange={(e) => setInputTask(e.target.value)}
               onKeyDown={handleEnter}
            >
            </input>
         </div>

         {
            tasks.map((item, index) => (
               <div className={`${style.tasks} ${isExpanded[index] ? null : style.shrink}`}
                  key={index}>
                  <div className={style.taskTitle}>

                     <input className={style.input}
                        type="text"
                        value={item}
                        maxLength={maxExtendedLength}
                        onChange={(e) => editInput(e, index)}
                     />

                     <div className={style.leftIcons}>
                        <div className={style.taskSize} onClick={() => expand(index)}>
                           {
                              isExpanded[index] ?
                              <BsArrowsCollapse className={style.sizeIcon} />
                              :
                              <BsArrowsExpand className={style.sizeIcon} />
                           }
                        </div>
                        <HiOutlineDotsVertical className={style.dots} onClick={() => open(index)}/>
                     </div>

                     {/* <div className={`${style.options} ${isOpen[index] ? style.close : ''}`}>
                        <div className={style.option}>ثبت نظر</div>
                        <div className={style.option} onClick={() => checkDelete(index)}>
                           حذف آیتم
                        </div>
                     </div> */}
                  </div>

                  <div className={style.desHolder}>
                     <textarea name="description" className={`${style.close} ${isExpanded[index] ? style.description : null}`}></textarea>
                  </div>

                  <div className={`${style.delete} ${deleteItem === index ? style.open : null}`}>
                     <p className={style.deletePrompt}>آیا می خواهید این آیتم را حذف کنید؟</p>
                     <div className={style.btnHolder}>
                        <button className={style.yes} onClick={() => deleteFunc(index)}>بله</button>
                        <button className={style.no} onClick={checkDelete}>خیر</button>
                     </div>
                  </div>
                  
                  <div className={`${style.optionsContainer} ${isOpen[index] ? style.display : null}`}>
                     <Options allTitles={allTitles} tasks={title} />
                  </div>

               </div>

            ))
         }

      </div>
   </>


)}

Card.propTypes = {
   title: PropTypes.string,
   setTitles: PropTypes.func,
   index: PropTypes.number,
   allTitles: PropTypes.array,
};

export default Card;