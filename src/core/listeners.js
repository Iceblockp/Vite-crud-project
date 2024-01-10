import { debounce } from "lodash";
import { courseEditFormHandler, courseFormHandler, editCellHandler, rowGroupHandler, searchInputHandler } from "./handlers";
import { courseEditForm, courseForm, rowGroup, searchInput } from "./selectors";

const listeners = () => {

    courseForm.addEventListener("submit",courseFormHandler);
    rowGroup.addEventListener("click",rowGroupHandler);
    courseEditForm.addEventListener('submit',courseEditFormHandler);
    rowGroup.addEventListener("dblclick",editCellHandler);
    searchInput.addEventListener("keyup",debounce(searchInputHandler,500))
    // throttle once per 500ms
    
}

export default listeners;