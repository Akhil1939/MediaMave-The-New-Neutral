import React, {useState} from 'react'
import News from '../components/News';
import LoadingBar from 'react-top-loading-bar';


export const Home = ({country}) => {
  const [progress, setProgress] = useState(0)
  const pageSize= 5;
  
  return (
    <div>
      <LoadingBar
        height={3}
        color='#FFFFFF'
        progress={progress} 
      />
        <News setProgress={setProgress} key="general" pageSize={pageSize} country={country}category="general"/>
    </div>
  )
}
export default Home;
 