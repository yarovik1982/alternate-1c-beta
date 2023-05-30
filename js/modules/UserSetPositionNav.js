import {ListNodes} from './ViewNodes.js'


export const UserSetPositionNav = () => {
   const listPosition = document.querySelectorAll('.setting-dropdown-item:not(:last-child)')
   let positionNav = JSON.parse(localStorage.getItem('positionNav')) || null

   function getValue(){
      return JSON.parse(localStorage.getItem("positionNav"))
   }

   function renderNav(obj){
      const position = getValue()
      const mainNode = document.querySelector('main')
      mainNode.innerHTML = obj[position]
   }
   
   
   function updatePosition (value){
      localStorage.setItem('positionNav', JSON.stringify(value))
      positionNav = getValue() 
   }

   listPosition.forEach(item => {
      item.addEventListener('click', e => {
         const current = e.target
         const value = current.dataset.position
         updatePosition(value)
         renderNav(ListNodes)
      })
   })
}