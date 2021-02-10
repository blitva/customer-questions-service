import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import CustomerQuestions from '../client/components/App.jsx';
// import QuestionsAnswers from '../client/components/QuestionsAnswers.jsx';

describe('<CustomerQuestions />', () => {
  it('renders without crashing', () => {
    shallow(<CustomerQuestions />);
  });

  it('renders correctly', () => {
    const wrapper = shallow(<CustomerQuestions />);
    expect(wrapper).toMatchSnapshot();
  });

  it('allows us to set props', () => {
    const wrapper = mount(<CustomerQuestions question="Can pigs fly?" />);
    expect(wrapper.props().question).toEqual('Can pigs fly?');
    wrapper.setProps({ question: 'Can pigs fly?'});
    expect(wrapper.props().question).toEqual('Can pigs fly?');
  })
});