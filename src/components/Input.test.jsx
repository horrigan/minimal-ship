import React from 'react';
import Enzyme, {shallow} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Input from './Input';

describe('<Input />', () => {

	it('renders a <div> with a static text', () => {
		const wrapper = shallow(<Input />);
		expect(wrapper.contains(<div className="name">Hello React!</div>)).toBe(true);
	});

});
