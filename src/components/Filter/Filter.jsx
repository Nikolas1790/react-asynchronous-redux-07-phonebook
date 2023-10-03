import { FindContact } from "components/App.styled"
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from "redux/filterSlice";
import { getFilter } from "redux/selectors";
import { InputFindContact } from "./Filter.style";
// import { useState } from "react";

export const Filter =() => {
    const dispatch = useDispatch();
    const filterValue  = useSelector(getFilter);
    // const [inputValue, setInputValue] = useState(filterValue);

    const handleImputFilter = e => {
        // setInputValue(e.currentTarget.value);
        dispatch(filterContact(e.currentTarget.value));       
    };

        return(
        <div>
             <FindContact>Find contacts by name</FindContact>
             <InputFindContact type="text"
                  name="filter"
                  placeholder="Enter your contact..."
                  onChange={handleImputFilter}
                  value={filterValue}
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>

        </div>
    )
}








