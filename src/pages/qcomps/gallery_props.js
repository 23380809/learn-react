function CustomPerson({src='', name='', profession='', awards=[], discovered=''}) {
  return (
    <section className="profile">
    <h2>{name}</h2>
    <img
      className="avatar"
      src={src}
      alt={name}
      width={70}
      height={70}
    />
    <ul>
      <li>
        <b>Profession: </b>
        {profession}
      </li>
      <li>
        <b>Awards: {awards.length} </b>
        {awards.join(', ')}
      </li>
      <li>
        <b>Discovered: </b>
        {discovered}
      </li>
    </ul>
  </section>

  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <CustomPerson 
        src='https://i.imgur.com/szV5sdGs.jpg'
        name='Maria Skłodowska-Curie'
        profession='physicist and chemist'
        awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry']}
        discovered='polonium' 
      />
      <CustomPerson 
        src='https://i.imgur.com/YfeOqp2s.jpg'
        name='Katsuko Saruhashi'
        profession='geochemist'
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovered='polonium' 
      />
    </div>
  );
}
