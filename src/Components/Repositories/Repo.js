import React, { PureComponent } from 'react';
import '../../App.css';

class Repo extends PureComponent {
    render() {
        let { data } = this.props;
        return (
            <div className="list">
                <p>{data.name}</p>
                <div>{data.description}</div>
                <span>
                    {data.language}&nbsp;
                    {data.license ? data.license.spdx_id : ''}
                </span>
            </div>
        );
    }
}

export default Repo;

