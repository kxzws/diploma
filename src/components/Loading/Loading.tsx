import loading from '../../assets/spinner.gif';
import './Loading.scss';

const Loading = () => {
  return <img data-testid="loading" src={loading} alt="gif: loading" className="loading" />;
};

export default Loading;
