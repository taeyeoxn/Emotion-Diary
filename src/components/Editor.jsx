import './Editor.css';
import Button from './Button';
import EmotionItem from './EmotionItem';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants';
import { getStringedDate } from '../util/get-stringed-date';

const Editor = ({initData, onSubmit}) => {
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });
    // state를 객체 형태로 생성

    const nav = useNavigate();

    useEffect(() => {
        if(initData) {
            setInput({
                ...initData,
                createdDate : new Date (Number(initData.createdDate)),
            })
        }
    }, [initData])

    const onChangeInput = (e) => {
        // console.log(e.target.name) // 어떤 요소에 입력이 들어온건지
        // console.log(e.target.value) // 입력된 값이 무엇인지?

        let name = e.target.name;
        let value = e.target.value;

        if (name === 'createdDate') {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value,
        })
    }

    const onClickSubmitButton = () => {
        onSubmit(input);
        // 부모 컴포넌트로부터 받은 onSubmint 함수 호출
        // 인수로 input state 전달
    }

    // const emotionId = 1;

    return (
        <div className='Editor'>
            <section className='date_section'>
                <h4>오늘의 날짜</h4>
                <input
                name='createdDate'
                onChange={onChangeInput}
                value={getStringedDate(input.createdDate)} 
                 // input태그의 초기값 설정
                type='date'/>
            </section>
            <section className='emotion_section'>
                <h4>오늘의 감정</h4>
                <div className='emotion_list_wrapper'>
                    {emotionList.map((item) => 
                        <EmotionItem 
                        onClick={() => 
                            onChangeInput({
                            target : {
                                name: "emotionId",
                                value: item.emotionId,
                            }
                        })}
                        key={item.emotionId} 
                        {...item}
                        isSelected={item.emotionId === input.emotionId}/>
                    )}
                </div>
            </section>
            <section className='content_section'>
                <h4>오늘의 일기</h4>
                <textarea 
                name='content'
                value={input.content}
                onChange={onChangeInput}
                placeholder='오늘은 어땠나요?'/>
            </section>
            <section className='button_section'>
                <Button 
                onClick={() => nav(-1)}
                text={"취소하기"}/>
                <Button 
                onClick={onClickSubmitButton}
                text={"작성완료"}
                type={"POSITIVE"}/>
            </section>
        </div>
    )
};

export default Editor;