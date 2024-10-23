import { EditText } from 'react-edit-text';
import { useDispatch } from 'react-redux';
import { delet, edit } from '../redux/PersonSlice';
import { useState } from 'react';
const PersonInformation = ({ personInformation }) => {
    const [updatedState, setUpdatedState] = useState(false);
    const [singlePerson, setSinglePerson] = useState(personInformation);
    const Dispatch = useDispatch();

    const deletePerson = (id) => {
        Dispatch(delet(id));
    }

    const handleEditPerson = () => {
        Dispatch(edit(singlePerson));
        setUpdatedState(false);
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", border: "1px solid" }}>
                <EditText style={{
                    fontFamily: "cursive",
                    fontSize: "25px",
                    display: "flex",
                    width: "200px",
                    height: "50px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    justifyContent: "center",
                    zIndex: 2
                }} editable="true" value={singlePerson.name} onChange={(e) => { setSinglePerson({ ...singlePerson, name: e.target.value }); setUpdatedState(true) }}
                />
                <button style={{ width: "250px", height: "50px", backgroundColor: "rosybrown", fontSize: "30px", borderRadius: "4px" }}
                    onClick={() => deletePerson(singlePerson.id)}>Delete Person</button>

                {updatedState ?
                    <button style={{ width: "250px", height: "50px", backgroundColor: "yellowgreen", fontSize: "30px" }}
                        onClick={handleEditPerson}>Update Person</button>
                    :
                    <button style={{ width: "250px", height: "50px", backgroundColor: "gray", fontSize: "30px" }}
                        disabled>Update Person</button>
                }



            </div>
        </>
    );
}
export default PersonInformation;