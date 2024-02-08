import './App.css'
import Customer from './Customer.tsx'

const customers = [
  {
    id: 1,
    avatar: 'https://assets.vogue.com/photos/589176397edfa70512d6493d/master/w_2560%2Cc_limit/jon-snow-game-of-thrones.jpg',
    customerName:'Jon Snow',
    description:'Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. After successfully capturing a wight and presenting it to the Lannisters as proof that the Army of the Dead are real, Jon pledges himself and his army to Daenerys Targaryen.',
    userProfile:'https://en.wikipedia.org/wiki/Jon_Snow_(character)'
  },
  {
    id: 2,
    avatar: 'https://variety.com/wp-content/uploads/2016/02/ar415b_0055r.jpg?crop=0px%2C0px%2C800px%2C450px&resize=1000%2C563',
    customerName:'Arrow',
    description:'The series follows billionaire playboy Oliver Queen, who spent five years shipwrecked on the mysterious island Lian Yu, before returning home to Starling City.',
    userProfile:'https://en.wikipedia.org/wiki/Arrow_(TV_series)'
  },
  {
    id: 3,
    avatar: 'https://cdn.vox-cdn.com/thumbor/HOdlOvbPhpAqYNKVAJY-DloePqk=/0x0:1920x1200/1200x800/filters:focal(568x331:874x637)/cdn.vox-cdn.com/uploads/chorus_image/image/72288634/assassins_creed_revelations.0.jpeg',
    customerName:'Assassin Creed',
    description:'Assassin Creed is an open-world, action-adventure, and stealth game franchise published by Ubisoft and developed mainly by its studio Ubisoft Montreal using the game engine Anvil and its more advanced derivatives.',
    userProfile:'https://en.wikipedia.org/wiki/Assassin%27s_Creed'
  },
  {
    id: 4,
    avatar: 'https://images3.alphacoders.com/606/thumb-1920-606500.jpg',
    customerName:'Anonymous',
    description:'Anonymous is a decentralized international activist and hacktivist collective and movement primarily known for its various cyberattacks against several governments, government institutions and government agencies, corporations and the Church of Scientology.',
    userProfile:'https://en.wikipedia.org/wiki/Anonymous_(hacker_group)'
  },
  {
    id: 5,
    avatar: 'https://static.dw.com/image/46353353_605.jpg',
    customerName:'Robin Hood',
    description:'Robin Hood is a legendary heroic outlaw originally depicted in English folklore and subsequently featured in literature, theatre, and cinema.',
    userProfile:'https://en.wikipedia.org/wiki/Robin_Hood'
  },
  {
    id: 6,
    avatar: 'https://m.media-amazon.com/images/M/MV5BMjM0MzkxODY3MV5BMl5BanBnXkFtZTgwNjA2OTUyMjI@._V1_.jpg',
    customerName:'Merlin',
    description:'Merlin, a young and powerful warlock, keeps his magical powers hidden as it is banned in Camelot. He befriends King Arthur and together they experience many adventures on their quest to save Albion.',
    userProfile:'https://en.wikipedia.org/wiki/Merlin'
  }
];

function App() {
  return(
    <>
      <h1 className='heading'>Hero's Data</h1>
      <hr/>
      {customers.map((data)=>(
          <Customer id={data.id} 
                    customerName={data.customerName}
                    userProfile={data.userProfile}
                    description={data.description}
                    avatar={data.avatar} 
                    key={data.id} />
        ))
      }
    </>
  );
}

export default App;
