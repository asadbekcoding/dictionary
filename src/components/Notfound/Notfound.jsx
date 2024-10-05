import style from './Notfound.module.scss'
export default function Notfound(){
       return(
        <>
        <div className={style['error']}>
        <img src="../public/images/stiker.png" alt="no-foto" />
        <h5>No Definitions Found</h5>
        <p>Sorry pal, we couldn't find definitions for the word you were looking
         for. You can try the search again at later time or head to the web instead.</p>
        </div>
        </>
       )
}