import renderer from 'react-test-renderer';
import Jokes from '../Jokes';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { cleanup } from '@testing-library/react';

afterEach(() => {
    cleanup();
});

describe('Jokes component', () => {
    test('renders without crashing', () => {
        const component = renderer.create(
            <ThemeProvider theme={theme}>
                <Jokes />
            </ThemeProvider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
