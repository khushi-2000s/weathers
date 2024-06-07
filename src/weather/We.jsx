import React, { useEffect,useState } from 'react';
import Rainy from './images/rainy.jpg'
import Cloud from './images/cloudy.jpg'
import Clear from './images/clear.jpg'


export const We = () => {

    
const [state, setState] = useState('delhi');
const [value, setvalue] = useState('');
const [place, setPlace] = useState('');
const [wind, setWind] = useState('');
const [temp, setTemp] = useState('');
const [maxtemp, setMaxtemp] = useState('');
const [mintemp, setMintemp] = useState('');

const apiKey = '2f878c84301e554f566110006bc29f43';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;


 function getvalue(e){
   setvalue(e.target.value)
 }

 function click(){
  setState(value)
  // (state !== name.toLowerCase ? alert("invalid"):'')
  
 }

    useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
           
             setPlace(data.weather[0].main)
             setWind(data.wind.speed)
             setTemp(data.main.temp)
             setMaxtemp(data.main.temp_max)
             setMintemp(data.main.temp_min)
          });
      }, [apiUrl]);
   
    const  C = Math.round(temp-273.15)
    const max = Math.ceil(maxtemp-273.15)
    const min = Math.floor(mintemp-273.15)
 

 const showdate = new Date();

 const showmonth = showdate.getMonth()
  const month = showmonth === 0?"January":showmonth === 1?"February":showmonth === 2?"March":showmonth === 3?"April":showmonth === 4?"May":showmonth === 5?"June"
              : showmonth === 6?"July" : showmonth === 7?"August" :showmonth === 8?"September" :showmonth === 9?"October" :showmonth === 10?"November" :"december"
 
 const showtodaydate = showdate.getDate()+'/'+ month +'/'+showdate.getFullYear();
 
 const showday = showdate.getDay()
 const day = showday === 1?"monday": showday === 2?"tuesday": showday === 3?"wednesday":showday === 4?"thursday":showday === 5?"friday": showday === 6?"saturday" : "sunday"

   return (
    <>

    <div className="conatiner d-flex justify-content-center align-items-center " style={{height:"100vh"}}>
      
          <div className='rounded-3'  style={place === "Rain"?{backgroundImage:`url(${Rainy})`}:place === "Clouds"?{backgroundImage:`url(${Cloud})`}:{backgroundImage:`url(${Clear})`}} >
                <h2 className='text-center p-4' style={{color:"white"}}>{state} temperature</h2>
              
             <div className=' container row' style={{height:"80vh", color:"white"}}>
          
         <div className="col-md-12  align-self-center ">
           <div className="d-flex">
             <input type="search" name="" className='form-control' placeholder='search here' onChange={getvalue} />
             <div> <button className='btn btn-outline-secondary' onClick={click} style={{color:"white"}}>search</button></div>
            
            </div> 
          </div>
         



          <div className="col-md-6 ">
             <h1>{C}&deg;C</h1>
             <h5>&uarr;{max}&deg; &darr;{min}&deg;</h5>
         
             <h4>{day}</h4>
            </div>
    


        <div className="col-md-6  text-end">
           <h2>{place}</h2>
           <h5>wind speed | {wind}</h5>
           <h5>{showtodaydate}</h5>
        </div>



</div>
       </div>
    </div>
    </>
  )
}
