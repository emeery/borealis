import React from 'react';
import {Meteor} from 'meteor/meteor';
export default class Animation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationRunning: true,
        };
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({ animationRunning: false });
        }, 3000);
    };
    
    render() {
      const loaderCss = this.state.animationRunning ? ['loader-wrapper', 'visible'] : ['loader-wrapper'];
      const contentCss = this.state.animationRunning ? ['content'] : ['content', 'visible'];
            return (
                <div className="container">
                    <div className={loaderCss.join(' ')}>
                        <div className="loader" />
                    </div>
                    <div className={contentCss.join(' ')}>
                        {/* <h1>Página principal</h1> */}
                    </div>
                </div>
            );
    };
};


