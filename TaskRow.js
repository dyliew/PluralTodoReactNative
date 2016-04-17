import React from 'react-native';

const {
    Text,
    View,
    TouchableHighlight
} = React;

const styles = React.StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e7e7e7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    label: {
        fontSize: 20,
        fontWeight: '300'
    },
    doneButton: {
        borderRadius: 5,
        backgroundColor: '#eaeaea',
        padding: 5,
    }
});

const TaskRow = (props) => 
<View style={styles.container}>
    <Text
        style={styles.label}
    >{props.todo.task}</Text>
    
    <TouchableHighlight
        style={styles.doneButton}
        onPress={() => props.onDone(props.todo)}
    >
        <Text>Done</Text>
    </TouchableHighlight>
</View>;

// class TaskRow extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text
//                     style={styles.label}
//                 >{this.props.todo.task}</Text>
                
//                 <TouchableHighlight
//                     style={styles.doneButton}
//                     onPress={() => this.props.onDone(this.props.todo)}
//                 >
//                     <Text>Done</Text>
//                 </TouchableHighlight>
//             </View>
//         );
//     }
// }

TaskRow.propTypes = {
    onDone: React.PropTypes.func.isRequired,
    todo: React.PropTypes.shape({
        task: React.PropTypes.string.isRequired
    }).isRequired
};

export default TaskRow;