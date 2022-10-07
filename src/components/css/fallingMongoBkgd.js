import mongo from '../../assets/icons/mongo-icon.png';

import { mongoPositions } from '../../assets/data/mongoPositions';

const InitMongos = () => {
  const mongoPos = mongoPositions;
  const divs = document.querySelectorAll('.mongo');

  const updatePos = () => {
    console.log('called')
    for (let div of divs) {
      let mongoIndex = Math.round(Math.random()*10);
  
      let locX = mongoPos[mongoIndex].x
      let locY = mongoPos[mongoIndex].y
  
      div.style.left = locX;
      div.style.top = locY;
    }
  }

  return (
    <div>
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        onAnimationIteration={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        />
    </div>
  )
}

export default InitMongos;