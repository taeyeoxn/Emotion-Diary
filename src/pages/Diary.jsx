import { useParams, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';

const Diary = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <Header
            title={"yyyy-mm-dd 기록"}
            leftchild={<Button text={"< 뒤로 가기"}/>}
            rightchild={<Button text={"수정하기"}/>}
            />
            <Viewer/>
        </div>
    )
}

export default Diary;