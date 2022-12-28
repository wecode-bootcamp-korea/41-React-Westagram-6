import { Link } from 'react-router-dom';
import { ASIDE_LIST } from './ASIDE_LIST';

export const Aside = () => {
  return (
    <ul className="aisde_list">
      {ASIDE_LIST.map(item => {
        return (
          <li key={item.id}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
