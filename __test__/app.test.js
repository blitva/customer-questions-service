import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import CustomerQuestions from '../client/components/App.jsx';

describe('<CustomerQuestions /> component', () => {
  it('renders without crashing', () => {
    shallow(<CustomerQuestions />);
  });

  it('renders correctly', () => {
    const wrapper = shallow(<CustomerQuestions />);
    expect(wrapper).toMatchSnapshot();
  });
});