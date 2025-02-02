import Button from '../components/Button';
import Editor from '../components/Editor';
import Header from '../components/Header';

const New = () => {
    return (
        <div>
            <Header 
            title={"새 일기 쓰기"}
            leftchild={<Button
            text={"< 뒤로 가기"}/>}
            />
            <Editor/>
        </div>
    )
}

export default New;