import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import STORE from './store';
import renderer from 'react-test-renderer';

describe('Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const tree = renderer.create(<Card key={1} title="First card" content="lorem ipsum"/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})