var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENT
var Person = function(props) {
    // Returns React element
    return (
        <div className="person">
            <div className="person-name">{props.name}</div>
            <img className="person-img" src={props.imageUrl}/>
            <div className="person-job">{props.job}</div>
        </div>
    );
};

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
                <Person
                    name="Ben Young"
                    job="Thinkful student" />
            </div>
        );
    };

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Call the ReactDOM.render function (root component, which you want to render; place you want to render it)
    ReactDOM.render(
        <PersonList/>, document.getElementById('app'));
});
