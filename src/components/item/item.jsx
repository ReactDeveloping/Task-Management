import style from './item.module.css'
import PropTypes from 'prop-types';
import styled from 'styled-components';



// The Btn tag is defined using Styled-Component library to enable conditional hovering
const Btn = styled.div`
  font-size: 22px;
  color: var(--icon-color);

	&:hover {
		background-color: ${({ $hover }) => ( $hover ? 'rgb(62, 78, 88)' : 'rgba(62, 78, 88, 0)')};
	}
`

// The Extra tag is defined using Styled-Component library to enable conditional hovering
const Extra = styled.div`
	position: absolute;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	left: 10px;
	font-size: 18px;
	color: var(--title-color);

	&:hover {
		background-color: ${({ $hover }) => ( $hover ? 'rgb(86, 96, 139)' : 'rgba(86, 96, 139,0)')};
	}
`


// This is the component for each item in the sidebar and it
// includes the followings:
//
// A. {StartingIcon}
// The main icon which is filled by the StartingIcon prop
// and it always expects an icon (which is a component) from
// the react-icons library.
// 
// B. {EndingIcon}
// The extra icon which is filled by the EndingIcon prop
// and it always expects an icon (which is a component) from
// the react-icons library.
//
// C. {lable}
// The title which is filled by the lable prop always expecting
// a string.
//
// D. {hover}
// The boolean that determines whether the Item should be hovered or not.
//
// E. {iconHover}
// The boolean that determines whether the Extra tag should be hovered or not.

function Item({StartingIcon, EndingIcon, lable, hover, iconHover}) {

	
  return (
    <>
      <Btn className={style.itemHolder} $hover={hover}>
         <div className={style.icon}>
				{StartingIcon && <StartingIcon />}
			</div>

         <p className={style.title}>{lable}</p>

         <Extra className={style.extraIcon} $hover={iconHover}>
				{EndingIcon && <EndingIcon />}
			</Extra>
      </Btn>
    </>
  )
}

// The types of the props in this component are defined using
// Prop-Types library.
Item.propTypes = {
   StartingIcon: PropTypes.elementType,
   EndingIcon: PropTypes.elementType,
   lable: PropTypes.string.isRequired,
   hover: PropTypes.bool,
   iconHover: PropTypes.bool,
};

export default Item;