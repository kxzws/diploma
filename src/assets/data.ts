import { birdCard } from '../types/common';
import img0 from './data-img/0.jpg';
import img1 from './data-img/1.jpg';
import img2 from './data-img/2.jpg';
import img3 from './data-img/3.jpg';
import img4 from './data-img/4.jpg';
import img5 from './data-img/5.jpg';

const data: birdCard[] = [
  {
    num: 0,
    title: 'Синица',
    img: img0,
    interTitle: 'Parus',
    protectStatus: 'LC',
    weight: '14—21 г',
    wingspan: '22—26 см',
    description:
      'Подвижная, вертлявая птица. В Европе самая крупная синица — размером примерно с воробья, имеет достаточно длинный хвост',
  },
  {
    num: 1,
    title: 'Воробей',
    img: img1,
    interTitle: 'Passer',
    protectStatus: 'LC',
    weight: '21—37 г',
    wingspan: null,
    description:
      'Будучи синантропным видом — постоянным сожителем человека, домовый воробей хорошо приспособлен к жизни в обстановке, меняющейся под воздействием хозяйственной деятельности человека',
  },
  {
    num: 2,
    title: 'Горлица',
    img: img2,
    interTitle: 'Streptopelia',
    protectStatus: 'LC',
    weight: '100—150 г',
    wingspan: null,
    description: 'Смеющаяся горлица разводится как клеточная птица, в природе не известна',
  },
  {
    num: 3,
    title: 'Галка',
    img: img3,
    interTitle: 'Coloeus monedula',
    protectStatus: 'LC',
    weight: '136—265 г',
    wingspan: '65—74 см',
    description:
      'Шумная птица. Наиболее частый крик, используемый как для коммуникации, так и для привлечения внимания — энергичное и довольно мелодичное «кай» или «кьяа»',
  },
  {
    num: 4,
    title: 'Ворона',
    img: img4,
    interTitle: 'Corvus cornix',
    protectStatus: 'LC',
    weight: '460—735 г',
    wingspan: 'до 1 метра',
    description:
      'Ворона прекрасно различает и соответственно реагирует на просто прогуливающегося человека и на охотника с ружьём',
  },
  {
    num: 5,
    title: 'Ворон',
    img: img5,
    interTitle: 'Corvus corone',
    protectStatus: 'LC',
    weight: null,
    wingspan: null,
    description: 'Грачи, как правило, живут стаями, а вороны — поодиночке',
  },
];

export default data;
