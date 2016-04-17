import TaskList from './TaskList';
import TaskForm from './TaskForm';

const React = require('react-native');
const {
    AppRegistry,
    Component,
    Navigator,
} = React;

class PluralTodo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Learn React Native'
                },
                {
                    task: 'Learn React Native with iOS'
                },
                {
                    task: 'Learn React Native with Android'
                }
            ]
        };
    }
    
    onAddStarted() {
        this.nav.push({
            name: 'taskform'
        });
    }
    
    onCancel() {
        this.nav.pop();
    }
    
    onAdd(task) {
        this.state.todos.push({ task });
        this.setState({
            todos: this.state.todos
        });
        this.nav.pop();
    }
    
    onDone(todo) {
        const filteredTodos = this.state.todos.filter(
            (filterTodo) => filterTodo !== todo
        );
        
        this.setState({ todos: filteredTodos });
    }
    
    configureScene() {
        return Navigator.SceneConfigs.FloatFromBottom;
    }
    
    renderScene(route) {
        switch (route.name) {
            case 'taskform':
                return (
                    <TaskForm
                        onAdd={this.onAdd.bind(this)}
                        onCancel={this.onCancel.bind(this)} 
                    />
                );
            default:
                return (
                    <TaskList
                            onAddStarted={this.onAddStarted.bind(this)}
                            onDone={this.onDone.bind(this)}
                            todos={this.state.todos} 
                    />
                );
        }
    }

    render() {
        return (
            <Navigator
                configureScene={this.configureScene}
                initialRoute={{ name: 'tasklist', index: 0 }}
                renderScene={this.renderScene.bind(this)}
                ref={(nav) => {
                    this.nav = nav;
                }}
            />
        );
    }
}

AppRegistry.registerComponent('main', () => PluralTodo);
