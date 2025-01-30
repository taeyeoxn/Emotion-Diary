import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';

import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList';

const getMonthlyData = (pivotDate, data) => {
    // pivotDate값을 기준으로 현재 state(data)를 필터링
    
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0,
    ).getTime();
    // 이달의 시작시간

    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0,
        23,
        59,
        59
    ).getTime();
    // 이달의 종료시간

    return data.filter((item) => 
        beginTime <= item.createdDate && item.createdDate <= endTime)
    // 이달의 일기 데이터 필터링 설정
}

const Home = () => {
    const data = useContext(DiaryStateContext);
    // DiaryStateContext로부터 데이터 공급
    const [pivotDate, setPivotDate] = useState(new Date());
    // setPivotDate 상태 생성

    const monthlyData = getMonthlyData(pivotDate, data);
    // console.log(monthlyData)

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }
    // 달을 증가, 감소시키는 함수

    return (
        <div>
            <Header 
            title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`} 
            leftchild={<Button onClick={onDecreaseMonth} text={"<"}/>}
            rightchild={<Button onClick={onIncreaseMonth} text={">"}/>}
            />
            <DiaryList data={monthlyData}/>
            {/* monthlydata를 data props로 저장 */}
        </div>
    )
}

export default Home;