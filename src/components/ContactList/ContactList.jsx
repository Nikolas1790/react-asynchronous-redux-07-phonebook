import { ButtonDel, ItemContact, ItemsContracts } from "components/App.styled"
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from "redux/contactSlice";
import { deleteContact, fetchContacts } from "redux/operations";
import { selectItems, selectFilter, selectIsLoading, selectError } from "redux/selectors";

export const ContactList =() => {

  const dispatch = useDispatch()
  const itemValue = useSelector(selectItems)
  const filterValue = useSelector(selectFilter)

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
dispatch(fetchContacts())
  },[dispatch])

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id))
}
const getVisibleItems =  itemValue.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
  
    return(
    <div>
      
        <ItemsContracts>               
          {getVisibleItems.map(({id, name, number}) =>(
            <ItemContact key={id}>{name}: {number}
            <ButtonDel onClick={() => onDeleteContact(id)}> 
              Delete</ButtonDel>
            </ItemContact>
         ) )}
        </ItemsContracts>
        {isLoading && !error && <b>Request in progress...</b>}  
    </div>
)}

// import { ButtonDel, ItemContact, ItemsContracts } from "components/App.styled"
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteTask } from "redux/contactSlice";
// import { getItems, getFilter } from "redux/selectors";

// export const ContactList =() => {

//   const dispatch = useDispatch()
//   const itemValue = useSelector(getItems)
//   const filterValue = useSelector(getFilter)

//   const onDeleteContact = (id) => {
//     dispatch(deleteTask(id))
// }
// const getVisibleItems =  itemValue.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
  
//     return(
//     <div>
//         <ItemsContracts>          
//           {getVisibleItems.map(({id, name, number}) =>(
//             <ItemContact key={id}>{name}: {number}
//             <ButtonDel onClick={() => onDeleteContact(id)}> 
//               Delete</ButtonDel>
//             </ItemContact>
//          ) )}
//         </ItemsContracts>
//     </div>
// )}