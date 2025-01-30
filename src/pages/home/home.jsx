import Sidebar from "../../components/sidebar/sidebar";
import pic from './../../assets/pics/background.jpg'
import style from './home.module.css'
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";
import { useState } from "react";


function Home() {
	const [inputValue,setInputValue] = useState('');
	const [titles, setTitles] = useState([]);
	const [check,setCheck] = useState(false)

	const addItem = () => {
		if(inputValue.trim() && !titles.includes(inputValue.trim())){
			setTitles([...titles, inputValue.trim()])
			setInputValue('')
			setCheck(true)

		} else if(titles.includes(inputValue.trim())) {
			alert('یک لیست با این نام در بین لیست های شما وجود دارد')
		}
	}

	const addItem2 = (e) => {
		if(inputValue.trim() && !titles.includes(inputValue.trim()) && e.key === 'Enter'){
			console.log(e.key);
			setTitles([...titles, inputValue.trim()]);
			setInputValue('');
			setCheck(true)

		} else if(e.key === 'Enter' && titles.includes(inputValue.trim())) {
			console.log('done');
			alert('یک لیست با این نام در بین لیست های شما وجود دارد')
		}
	}


	const [sidebarState,setSidebarState] = useState(true);

	const handleSidebarState = (newState) => {
		setSidebarState(newState)
	}

  return (
    <>
      <div className={style.main}>
			<img src={pic} alt="backgorund" className={style.background}/>
			<div className={style.overlay}></div>
			<Navbar addItem={addItem} addItem2={addItem2} inputValue={inputValue} setInputValue={setInputValue}/>

			
			<div className={style.components}>
				<div className={style.navHolder}>
					<Sidebar onSidebarChange={handleSidebarState} />
				</div>

				<div className={`${style.cards} ${!sidebarState ? style.fullscreen : null}`}>
					{ check ? 
						titles.map((title, index) => (
							<Card key={index} allTitles={titles} title={title} index={index} setTitles={setTitles}/>
						))
						:
						<div className={style.container}>
							<div className={style.nothing}>هنوز لیستی اضافه نکرده اید</div>
						</div>
					}
				</div>
			</div>

      </div>
    </>
  )
}

export default Home;