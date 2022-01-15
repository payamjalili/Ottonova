import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import getCities from '../../services/get-cities.service';
import './cities.css';
import City from '../city/city';
import ICity from '../../types/city';

function Cities() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [items, setItems] = useState<ICity[]>([]);
  const [continents, setContinents] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    getCities()
      .then((response) => {
        setItems(response);
        var allContinents: string[] = response.map(
          (item: ICity) => item.continent
        );
        var uniqContinents = allContinents.filter(function (elem, pos) {
          return allContinents.indexOf(elem) == pos;
        });
        uniqContinents.sort();
        uniqContinents.unshift('All');
        setContinents(uniqContinents);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading)
    return (
      <div className='loading-container'>
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
    );

  if (items.length === 0) return <p className='text-empty'>JSON is empty</p>;

  return (
    <>
      <ul id='filters'>
        {continents.map(function (item: string, index: number) {
          return (
            <li
              key={`filter-${index}`}
              className={filter == item ? 'active' : ''}
              onClick={() => setFilter(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div id='tree'>
        {items.map(function (item: any, index: number) {
          return (
            <City
              city={item}
              key={`city-${index}`}
              visibility={filter === item.continent || filter === continents[0]}
            />
          );
        })}
      </div>
    </>
  );
}

export default Cities;
