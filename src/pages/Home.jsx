import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList';

const Home = () => {
    return (
        <div>
            <Header 
            title={'2025년 2월'} 
            leftchild={<Button text={"<"}/>}
            rightchild={<Button text={">"}/>}
            />
            <DiaryList/>
        </div>
    )
}

export default Home;