import React, { PureComponent } from 'react';
import '../../App.css';
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
class Repo extends PureComponent {
    render() {
        let { data } = this.props;
        let date = new Date(data.updated_at);
        return (
            <div className="list">
                <p>{data.name}</p>
                <div className='user-profile-bio'>{data.description}</div>
                <span>
                    {data.language ?<b className="yellow-dot"></b>:<div/>}{data.language ? data.language+'    ':''}
                    {data.license && data.license.spdx_id? (`${data.license.spdx_id}    `) : ''}
                    Updated on {date.getDate()+' '+month[date.getMonth()]}
                </span>
            </div>
        );
    }
}

export default Repo;

