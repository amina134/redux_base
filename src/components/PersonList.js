import { useSelector } from 'react-redux';
import PersonInformation from './PersonInformation';

const PersonList = () => {
    const personSlices = useSelector(state => state.personSlices);
    console.log("This list of Persons from PersonList component: ", personSlices);

    return (<>
        {personSlices.map((el) => <PersonInformation key={el.id} personInformation={el} />)}
    </>);
}
export default PersonList;