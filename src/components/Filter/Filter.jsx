import { FindContact } from "components/App.styled"
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";
import { InputFindContact } from "./Filter.style";

export const Filter =() => {
    const dispatch = useDispatch();
    const filterValue  = useSelector(selectFilter);

    const handleImputFilter = e => {
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








