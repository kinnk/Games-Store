import React from 'react';
import GameItem from '../../components/game-item/Game-Item.jsx';
import './home-page.css';

const GAMES = [
  {
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg?t=1673029404',
      title: 'Forza Horizon 5',
      genres: ['Гонки', 'Симулятор', 'Открытый мир'],
      price: 2343,
      video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
      id: 1,
      description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
      image: 'https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S1_2560x1440-36f16374c9c29a18a46872795b483d72_2560x1440-36f16374c9c29a18a46872795b483d72',
      title: 'Battlefield 2042',
      genres: ['Экшен', 'Шутер', 'Война'],
      video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
      price: 2433,
      id: 2,
      description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
  },
  {
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/936790/capsule_616x353.jpg?t=1666713640',
      title: 'Life is Strange True Colors',
      genres: ['Глубокий сюжет', 'Протагонистка'],
      video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
      price: 3021,
      id: 3,
      description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
  },
  {
      image: 'https://variety.com/wp-content/uploads/2013/09/gta-v-big.jpg',
      title: 'Grand Theft Auto V',
      genres: ['Открытый мир', 'Экшен'],
      video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
      price: 789,
      id: 4,
      description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
  },
  {
      image: 'https://cdn1.epicgames.com/offer/carnation/Share_Image_1920x1080-3_1920x1080-6e2d079f24db0a35285007191358978b',
      title: 'Tom Clancy\'s Rainbow Six® Siege',
      video: 'https://www.youtube.com/embed/6wlvYh0h63k',
      genres: ['Тактика', 'Шутер'],
      price: 982,
      id: 5,
      description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
  },
  {
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/capsule_616x353.jpg?t=1671135934',
      title: 'Assassin’s Creed Valhalla',
      genres: ['Паркур', 'РПГ', 'Открытый мир'],
      video: 'https://www.youtube.com/embed/ssrNcwxALS4',
      price: 2863,
      id: 6,
      description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
]

const HomePage = () => {
  return (
    <div className='home-page'>
      {
        GAMES.map(game => 
          <GameItem key={game.id} game={game}/>
        )
      }
    </div>
  );
}

export default HomePage;
