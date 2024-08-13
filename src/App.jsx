import React, { useState } from 'react'
import Button from './component/Button';
import OlymPicList from './component/OlymPicList';

function App() {
  const [medals, setMedal] = useState([]);
  const [countryValue, setValuecountry] = useState("");
  const [gold, setValueGold] = useState(0);
  const [silver, setValueSilver] = useState(0);
  const [bronze, setValueBronze] = useState(0);

  const olymPic = {
    id: medals.length + 1,
    country: countryValue,
    gold: gold,
    silver: silver,
    bronze: bronze,
  }

  const handleAdd = ()=>{
    if(olymPic.country === ''){
      alert('국가를 입력해주세요')
    }
    else{
      setMedal([...medals, olymPic]);
    }
    setValuecountry('');
    setValueGold(0);
    setValueSilver(0);
    setValueBronze(0);
  }

  const handleDelete = (id)=>{
    const newMedalList = medals.filter(props=>{
      return props.id !== id
    })
    setMedal(newMedalList);
  }

  const handleUpdate = ()=>{
    let updateMedalList = medals.find(props=>{
      return countryValue == props.country
    })
    let newCountries = medals.map((list)=>{
      if(list.country == updateMedalList.country){
        return {
          country: countryValue,
          gold: gold,
          silver: silver,
          bronze: bronze,
        }
      }else{
        return list;
      }
    })
    setMedal(newCountries)
    setValuecountry('');
    setValueGold(0);
    setValueSilver(0);
    setValueBronze(0);
  }

  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <form className="input_group">
        <div className='inp_box'>
          <label htmlFor='country'>국가별</label>
          <input type='text' value={countryValue} placeholder='국가 입력' id='country' onChange={(e)=>setValuecountry(e.target.value)}></input>
        </div>
        <div className='inp_box'>
          <label htmlFor='gold'>금</label>
          <input type='number' value={gold} id='gold' onChange={(e)=>{setValueGold(e.target.value);}}></input>
        </div>
        <div className='inp_box'>
          <label htmlFor='silver'>은</label>
          <input type='number' value={silver} id='silver' onChange={(e)=>{setValueSilver(e.target.value);}}></input>
        </div>
        <div className='inp_box'>
          <label htmlFor='bronze'>동</label>
          <input type='number' value={bronze} id='bronze' onChange={(e)=>{setValueBronze(e.target.value);}}></input>
        </div>
        <div className='btn_box'>
          <Button onClick={handleAdd}>추가</Button>
          <Button onClick={handleUpdate}>업데이트</Button>
        </div>
      </form>
        {medals.sort((a,b)=>b.gold - a.gold).map(medal=>{
          return(
            <OlymPicList medal={medal} key={medal.id} handleDelete={handleDelete}/>
          )
        })}
    </div>
  );
}





export default App