import './App.css';
import imagin from './images/image.jpg'
import Beats from './componets/beats';
import SoundFiles from './componets/SoundFiles';
import SoundFiles2 from './componets/SoundFiles2';
import SoundFiles3 from './componets/SoundFiles3';
import SoundFiles4 from './componets/SoundFiles4';
import SoundFiles5 from './componets/SoundFiles5';
import SoundFiles6 from './componets/SoundFiles6';
import SoundFiles7 from './componets/SoundFiles7';
import SoundFiles8 from './componets/SoundFiles8';
import SoundFiles9 from './componets/SoundFiles9';
import SoundFiles10 from './componets/SoundFiles10';
import SoundFiles11 from './componets/SoundFiles11';
import SoundFiles12 from './componets/SoundFiles12';
import Header from './componets/header';
import LOGO from './images/logo.JPG'




const App = () => {
  return (
    <>
   
    <div className="App">
     
      <div className='tittle'>
      <img src={LOGO} className='logo1'/>
      </div>
      <div className='conteiner'>
      
        <img className='image'
        src={imagin}
        alt=""/>
        </div>
        <div className='content'>

        <div className='beat-conteiner'>
        <Beats info="Trap type sampled beat F# key Bpm:120"> <SoundFiles/> karma</Beats>
        <Beats info="Hip-hop type beat A#m BPM:88 "> <SoundFiles2 /> Steam </Beats>
        <Beats info="Hip-hop type beat F# major BPM:94" > <SoundFiles3/> Royal </Beats>
        <Beats info="Reggaeton type beat A# minor BPM:92"> <SoundFiles4/> Flavor</Beats>
        <Beats info="UK Drill type beat B minor BPM:140"> <SoundFiles5/> Drops </Beats>
        <Beats info="Reggaeton type beat A minor BPM:88"> <SoundFiles6/> Bahia </Beats>
        </div>
        <div className='beat-conteiner'>
        <Beats info='Hip-hop/trap type beat F#m BPM:127'> <SoundFiles7/> Rolls</Beats>
        <Beats info="Boombap type beat C#minor BPM:84"> <SoundFiles8/> Void</Beats>
        <Beats info="Idie style type beat BPM:77"> <SoundFiles9/> Time Up </Beats>
        <Beats info="Hip-hop type beat F minor BPM:90"> <SoundFiles10/> Closed eyes</Beats>
        <Beats info="Trap type beat D minor BPM:135"> <SoundFiles11/> Ligths off</Beats>
        <Beats info="Urban/latin A minor BPM:84"> <SoundFiles12/> Highway </Beats>
        </div>
      
        </div>
        
        
      

      
 
    </div>
    </>
  );
}

export default App;
