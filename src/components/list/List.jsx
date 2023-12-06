import {observer} from 'mobx-react-lite';

const List = ({data, Component}) => {
  return data.map((item) => <Component key={item.id} {...item}/>)
};

export default observer(List);
