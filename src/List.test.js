import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
    it('renders without crashing', () => {
        const cardIds = [ 'l', 'm' ];
        const div = document.createElement('div');
        ReactDOM.render(<List cards={cardIds}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const card = [{
            title: "first card",
            content: "lorem ipsum"
        }];
        const tree = renderer.create(<List key={1} header="First list" cards={card}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})