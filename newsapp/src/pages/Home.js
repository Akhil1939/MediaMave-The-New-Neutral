import React, {useState} from 'react'
import News from '../components/News';
import LoadingBar from 'react-top-loading-bar'


export const Home = () => {
    const pageSize = 5;
  const apiKey = "0f5bcd1c91354866a22117a901c670bc";
  const [progress, setProgress] = useState(0)
  
  return (
    <div>
      <LoadingBar
        height={3}
        color='#FFFFFF'
        progress={progress} 
      />
        <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>
    </div>
  )
}
export default Home;
