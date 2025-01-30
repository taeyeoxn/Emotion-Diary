import './DiaryItem.css';
import {getEmotionImage} from "../util/get-emotion-image";
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({id, emotionId, createdDate, content}) => {
    // const emotionId = 1;
    // 임시 데이터

    const nav = useNavigate();

    return (
        <div className='DiaryItem'>
            <div 
                className={`img_section img_section_${emotionId}`}
                onClick={() => nav(`/diary/${id}`)}>
                <img src={getEmotionImage(id)}/>
            </div>
            <div 
                className='info_section'
                onClick={() => nav(`/diary/${id}`)}>
                <div className='created_date'>
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className='content'>{content}</div>
            </div>
            <div className='button_section'>
                <Button
                onClick={() => nav(`/Edit/${id}`)}
                text={"수정하기"}
                />
            </div>
        </div>
    )
}

export default DiaryItem;