import Carousel from 'react-elastic-carousel';
import CaruselItem from './CaruselItem';

const Carusel = () => {
 const data =  [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

    return (
      <Carousel breakPoints={breakPoints}>

        {data.map(item => <CaruselItem key={item.id}>{item.title}</CaruselItem>)}
      </Carousel>
    )
}
export default Carusel