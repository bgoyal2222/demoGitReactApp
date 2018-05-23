import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { fetchProfile } from "./actions";
import { Button } from "reactstrap";
import * as Material from 'react-icons/lib/md'
class Profile extends Component {
    componentWillMount() {
        this.props.fetchProfile('supreetsingh247');
    }
    render() {
        console.log(this.props)
        let { profile } = this.props;
        return (
            <div className="profile">
                {profile == null ? <div /> : <div className="">
                    <div>
                        <img src={profile.avatar_url} className="App-logo" alt="profile pic" />
                        <span className='vcard-fullname'>
                            {profile.name}
                        </span>
                        <span className='vcard-username'>
                            {profile.login}
                        </span>
                        <p className="user-profile-bio">{profile.bio}</p>
                        <Button className="btn-bold">Add a bio</Button>
                        <p className='user-profile-bio2'><Material.MdPeople />{profile.company}</p>
                        <p className='user-profile-bio2'><Material.MdLocationOn />{profile.location}</p>
                    </div>

                </div>}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { profile: state.profile };
}

export default connect(mapStateToProps, { fetchProfile })(Profile);
