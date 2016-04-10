import TaskList from './TaskList';

let React = require('react-native');
let {
    AppRegistry,
    Component,
    Text
} = React;

class PluralTodo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Learn React Native'
                }
            ]
        };
    }

    render() {
        return (
            <TaskList>Hello there, again and again!</TaskList>
        );
    }
}

AppRegistry.registerComponent('main', () => PluralTodo);
