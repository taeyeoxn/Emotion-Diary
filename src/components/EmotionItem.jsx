import './EmotionItem.css';
import { getEmotionImage } from '../util/get-emotion-image';

const EmotionItem = ({emotionId, emotionName, isselected}) => {
    return (
        <div className={`EmotionItem ${
            isselected ? `EmotionItem_on_${emotionId}` : ""
            }`}>
            <img className='emotion_img' src={getEmotionImage(emotionId)}/>
            <div className='emotion_name'>{emotionName}</div>
        </div>
    )
}

export default EmotionItem;