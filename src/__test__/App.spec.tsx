import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../components/context/userProvider';
import Step1 from '../components/Step1';

describe('Step1 component', () => {
  it('Renderiza el componente correctamente', () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <Step1 />
        </UserProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Hello My friend')).toBeTruthy();
    expect(screen.getByLabelText('FirstName')).toBeTruthy();
    expect(screen.getByLabelText('Last name')).toBeTruthy();
    expect(screen.getByText('Next')).toBeTruthy();
  });

  it(' debe hacer match con el snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <UserProvider>
          <Step1 />
        </UserProvider>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
