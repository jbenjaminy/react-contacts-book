var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENT
var Person = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        var classes = 'person ' + (this.state.highlight ? 'highlight' : '');
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className="person-img" src={this.props.imageUrl} />
                <div className="person-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
});

Person.defaultProps = {
    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
};

var PersonList = function() {
        return (
            <div className="person-list">
                <Person 
                    name="Derek Zoolander"
                    imageUrl="http://uifaces.com/assets/static/images/zoolander.jpg"
                    job="Male model" />
                <Person 
                    name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
            </div>
        );
    };

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Call the ReactDOM.render function (root component, which you want to render; place you want to render it)
    ReactDOM.render(
        <PersonList/>, document.getElementById('app'));
});
