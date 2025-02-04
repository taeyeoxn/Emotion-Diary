import Button from '../components/Button';
import Editor from '../components/Editor';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { DiaryDispatchContext } from '../App';
import usePageTitle from '../hooks/usePageTitle';

const New = () => {
    const {onCreate} = useContext(DiaryDispatchContext);
    const nav = useNavigate();
    usePageTitle('새 일기 쓰기');

    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(), 
            input.emotionId, 
            input.content);
        nav('/', {replace: true});
        // 홈페이지 이동 & 뒤로가기 방지
    };

    return (
        <div>
            <Header 
            title={"새 일기 쓰기"}
            leftchild={<Button
            onClick={() => nav(-1)}
            text={"< 뒤로 가기"}/>}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}

export default New;