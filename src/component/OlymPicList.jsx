import Button from "./Button";

const OlymPicList = ({ medal, handleDelete }) => {
    return (
        <ul className="medal_total">
            <li>{medal.country}</li>
            <li>{medal.gold}</li>
            <li>{medal.silver}</li>
            <li>{medal.bronze}</li>
            <li><Button onClick={() => {handleDelete(medal.id);}}>삭제</Button>
            </li>
        </ul>
    );
};

export default OlymPicList;
