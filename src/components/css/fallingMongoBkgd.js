import mongo from '../../assets/icons/mongo-icon.png';
import { mongoPositions as mongoPos } from '../../assets/data/mongoPositions';

const InitMongos = () => {
  const divs = document.querySelectorAll('.mongo');

  const updatePos = () => {
    for (let div of divs) {
      let mongoIndexX = Math.round(Math.random()*23);
      let mongoIndexY = Math.round(Math.random()*23);
      let locX = mongoPos[mongoIndexX].x
      let locY = mongoPos[mongoIndexY].y
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