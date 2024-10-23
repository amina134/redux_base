import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const PersonSlice = createSlice({
    name: "personSlices",
    initialState: [
        {
            id: uuidv4(),
            name: "Amine"
        },
        {
            id: uuidv4(),
            name: "Moussa"
        }, {
            id: uuidv4(),
            name: "Fahmi"
        },
        {
            id: uuidv4(),
            name: "Ahmed"
        }, {
            id: uuidv4(),
            name: "Mohsen"
        }],
    reducers: {
        add: (state, action) => {
            const newPerson = action.payload;
            state.push(newPerson);
        },
        delet: (state, action) => {
            return state.filter((e) => e.id !== action.payload);
        },
        edit: (state, action) => {
            const editedPerson = action.payload;
            console.log("From PersonSlice :", editedPerson);
            const index = state.findIndex((e) => e.id === editedPerson.id);
            console.log("Index from PersonSlice:", index);
            state.splice(index, editedPerson);
            alert(`Description of ${editedPerson.name} is edited successfully.`)
        }
    }
});
export const { add, delet, edit } = PersonSlice.actions;
export default PersonSlice.reducer;