import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { fetchRepos } from "./actions";
import Repo from './Repo';
import { TabContent, Badge, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container, Form, FormGroup, Label, Input, FormText, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classnames from 'classnames';


class Repos extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.state = {
            activeTab: '2',
            dropdownOpen: false
        };
    }
    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    componentWillMount() {
        this.props.fetchRepos('supreetsingh247');
    }
    render() {
        console.log(this.props)
        let { repos } = this.props;
        return (
            <div >
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Overview&nbsp;&nbsp;<Badge color="secondary">4</Badge>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Repositories
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Stars
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        >
                            Followers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.toggle('5'); }}
                        >
                            Following
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <h4>Overview</h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Container>
                                    <Row className="search_bar">
                                        <Col md="7">
                                            <Input type="text" name="search" id="exampleEmail" placeholder="Search..." />
                                        </Col>
                                        <Col md="5">
                                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                                                <DropdownToggle caret>
                                                    Type:All
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>Header</DropdownItem>
                                                    <DropdownItem disabled>Action</DropdownItem>
                                                    <DropdownItem>Another Action</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Another Action</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown> &nbsp;&nbsp;
                                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                                                <DropdownToggle caret>
                                                    Language:All
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>Header</DropdownItem>
                                                    <DropdownItem disabled>Action</DropdownItem>
                                                    <DropdownItem>Another Action</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Another Action</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>&nbsp;&nbsp;
                                            <Button color="success">New</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='12'>
                                            {repos.map((item, index) => <Repo data={item} />)}
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { repos: state.repos };
}

export default connect(mapStateToProps, { fetchRepos })(Repos);
