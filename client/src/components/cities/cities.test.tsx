import Cities from './cities';
import { render, screen, waitFor } from '@testing-library/react';
import getCities from '../../services/get-cities.service';
import ICity from '../../types/city';

test('should renders all cities', async function () {
  const textCities = await getCities().then((res) => res);
  render(<Cities />);
  const citiesContent = await waitFor(() =>
    screen.getAllByTestId('city-name').map((p) => p.textContent)
  );

  const testCitiesContent = textCities.map((c: ICity) => c.name);
  expect(citiesContent).toEqual(testCitiesContent);
});
