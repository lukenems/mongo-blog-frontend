import mongo from '../../assets/icons/mongo-icon.png';

import { mongoPositions } from '../../assets/data/mongoPositions';

const InitMongos = () => {
  const mongoPos = mongoPositions;

  const updatePos = (div) => {
    let mongoIndex = Math.round(Math.random()*10);

    let locX = mongoPos[mongoIndex].x
    let locY = mongoPos[mongoIndex].y

    div.style.left = locX;
    div.style.top = locY;
    }

  return (
    <div>
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        onAnimationEnd={(e) => {updatePos(e.target)}}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongo'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoSecond'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        onAnimationEnd={updatePos}
        />
      <img src={mongo}
        alt='falling mongo' 
        className='mongo falling-mongoThird'
        onAnimationEnd={updatePos}
        />
    </div>
  )
}

export default InitMongos;