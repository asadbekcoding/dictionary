import { useEffect, useState } from 'react';
import style from './Header.module.scss';
export default function Header({ hiDark }) {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [filter, setFilter] = useState('Inter');
  const fonts = ['Inter', 'Serif', 'Mono'];

  const hiDrop = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };
  const fontClick = item => {
    setFilter(item);
    setIsOpenDropDown(false);
    if (item == 'Serif') {
      document.body.classList.remove('mono');
      document.body.classList.remove('inter');
      document.body.classList.add('serif');
    } else if (item == 'Mono') {
      document.body.classList.remove('serif');
      document.body.classList.remove('inter');
      document.body.classList.add('mono');
    } else if (item == 'Inter') {
      document.body.classList.remove('mono');
      document.body.classList.remove('serif');
    }
  };
  return (
    <>
      <div className={style['navbar']}>
        <div className={style['logo_img']}>
          <img src="../public/images/icon_book.svg" alt="error-foto" />
        </div>
        <div className={style['navbar_element']}>
          <div className={style['navbar_font']}>
            <div onClick={hiDrop} className={style['dropdown']}>
              <p>{filter}</p>
              <img
                className={isOpenDropDown ? style['rotate'] : null}
                src="../public/images/strelka.svg"
                alt="no-foto"
              />
            </div>
            {isOpenDropDown ? (
              <div className={style['list']}>
                <ul>
                  {fonts.map((item, ind) => {
                    return (
                      <li key={ind} onClick={() => fontClick(item)}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
          <div className={style['line']}></div>
          <div onClick={hiDark} className={style['dark_mode']}>
            <img
              className={style['light_img']}
              src="../public/images/lightmode_img.svg"
              alt="no-foto"
            />
            <img
              className={style['dark_img']}
              src="../public/images/darkmode_img.svg"
              alt="no-foto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
