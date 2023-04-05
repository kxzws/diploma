import useTypedSelector from '../../hooks/useTypedSelector';
import StyledButton from '../../components/StyledButton/StyledButton';
import Favourite from './Favourite/Favourite';
import './Favourites.scss';

const Favourites = () => {
  const { favourites } = useTypedSelector((state) => state.cards);

  return (
    <section className="favourites">
      <div className="center-container">
        <ul className="favourites-list">
          {favourites.map((item) => (
            <Favourite key={item.num} data={item} />
          ))}
          {favourites.length < 1 && <p className="favourites-warning">Избранных нет</p>}
        </ul>
      </div>
      {favourites.length > 0 && <StyledButton type="anchor" text="Помочь" to="/donate" />}
    </section>
  );
};

export default Favourites;
