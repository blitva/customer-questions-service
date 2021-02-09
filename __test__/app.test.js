import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import CustomerQuestions from '../client/components/App.jsx';
import QuestionsAnswers from '../client/components/QuestionsAnswers.jsx';

describe('<CustomerQuestions />', () => {
  it('renders without crashing', () => {
    shallow(<CustomerQuestions />);
  });

  it('renders correctly', () => {
    const wrapper = shallow(<CustomerQuestions />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('calls useEffect hook', () => {
  //   sinon.spy(CustomerQuestions.prototype, 'useEffect');
  //   const wrapper = mount(<CustomerQuestions />);
  //   expect(CustomerQuestions.prototype.useEffect).to.have.property('callCount', 1);
  // });

  // it('allows us to set props', () => {
  //   const wrapper = mount(<CustomerQuestions question="Do pigs fly?" />);
  //   expect(wrapper.props().question).to.equal('Do pigs fly?');
  //   wrapper.setProps({ questions: 'Do pigs fly?'});
  //   expect(wrapper.props().bar).to.equal('Do pigs fly?');
  // })

  // it('passes props to <Votes />', () => {
  //   const wrapper = mount(<CustomerQuestion />);
  //   const
  // })
});