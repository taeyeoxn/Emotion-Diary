import { useParams, useSearchParams } from 'react-router-dom';

const Edit = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>{params.id}번 일기 수정페이지입니다</div>
    )
}

export default Edit;