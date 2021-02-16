import Btn from '../components/shared/btn/btn';
import Jumbo from '../components/titlejumbo/titlejumbo';
import { Link } from "react-router-dom";
const TitlePage = () => {
    return (
        <>
            <Jumbo />
            <Btn text='CSS' colSize='10' as={Link} to='/css' btnStyle='py-2 my-3 titleButton' />
            <Btn text='JavaScript' colSize='10' as={Link} to='/js' btnStyle='py-2 my-3 titleButton' />
            <Btn text='HTML' colSize='10' as={Link} to='/html' btnStyle='py-2 my-3 titleButton' />
            <Btn text='C#' colSize='10' as={Link} to='/csharp' btnStyle='py-2 my-3 titleButton' />
            <Btn text='React' colSize='10' as={Link} to='/react' btnStyle='py-2 my-3 titleButton' />
        </>
    );
}

export default TitlePage;