import { useParams, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

const Edit = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <Header 
            title={"일기 수정하기"}
            leftchild={<Button text={"< 뒤로 가기"}/>}
            rightchild={<Button text={"삭제하기"} type={"NEGATIVE"}/>}
            />
            <Editor/>
        </div>
    )
}

export default Edit;