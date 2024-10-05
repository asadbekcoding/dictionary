import style from './Main.module.scss';
export default function Main({ data }) {
  const playAudio = aud => {
    const audio = new Audio(aud);
    audio.play();
  };

  let newmp3 = data[0].phonetics.map((item, ind) => {
      return  item.audio
  })

  return (
    <>
      <div className={style['container']}>
        <div className={style['reading']}>
          <div className={style['word']}>
            <h1>{data[0]?.word}</h1>
            <p>{data[0]?.phonetic}</p>
          </div>
          <div className={style['player_img']}>
            { 
            newmp3.map((item, ind) => (
              item ?  <img
              onClick={() => {
                playAudio(
                   item
                  ); 
              }}
              src="../public/images/player_img.svg"
              alt="no-foto"
            /> : null
            ))

            }
          </div>
        </div>
        <div className={style['phrase']}>
          <p>{data[0]?.meanings[0].partOfSpeech}</p>
          <div className={style['phrase_line']}></div>
        </div>
        <div className={style['info']}>
          <h4>Meaning</h4>
          <ul>
            {data[0]?.meanings[0]?.definitions
              ?.map((item, ind) => {
                return <li key={ind}>{item?.definition}</li>;
              })
              ?.slice(0, 4)}
          </ul>
        </div>
        <div className={style['synonyms']}>
          <h3>Synonyms</h3>
          {data[0]?.meanings[1]?.synonyms
            ?.map((item, ind) => {
              return <p key={ind}>{item}</p>;
            })
            ?.slice(0, 3)}
        </div>
        <div className={style['phrase']}>
          <p>{data[0]?.meanings[1]?.partOfSpeech}</p>
          <div className={style['phrase_line']}></div>
        </div>
        <div className={style['info_second']}>
          <h4>Meaning</h4>
          <ul>
            {data[0]?.meanings[1]?.definitions?.map((item, ind) => {
              return <li key={ind}>{item?.definition}</li>;
            })}
          </ul>
          <h5 className={style['conclusion']}>
            {data[0]?.meanings[1]?.definitions[0]?.example}
          </h5>
        </div>
        <div className={style['indetail']}>
          <p>Source</p>
          <div className={style['link']}>
            <a href={data[0]?.sourceUrls[0]}>{data[0]?.sourceUrls[0]}</a>
            <img src="../public/images/link_img.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
