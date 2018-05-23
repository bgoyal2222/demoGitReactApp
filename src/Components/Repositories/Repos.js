import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { fetchRepos, search, filterLanguage,filterType } from "./actions";
import Repo from './Repo';
import { TabContent, Badge, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container, Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classnames from 'classnames';
import _ from 'lodash';

class Repos extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleDropdownLanguage = this.toggleDropdownLanguage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.selectLanguage = this.selectLanguage.bind(this);
        this.state = {
            activeTab: '2',
            dropdownOpen: false,
            dropdownOpenLanguage: false,
            searchValue: '',
            filterLanguage:'All',
            filterType:'All'
        };
    }
    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    selectLanguage(txt) {
        this.props.filterLanguage(txt);
        this.setState({filterLanguage:txt})
    }
    selectType(txt) {
        this.props.filterType(txt);
        this.setState({ filterType: txt })
    }
    handleChange(evnt) {
        this.props.search(evnt.target.value);
        this.setState({
            searchValue: evnt.target.value
        });
    }
    toggleDropdownLanguage() {
        this.setState({
            dropdownOpenLanguage: !this.state.dropdownOpenLanguage
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
        let { repos,data } = this.props;
        let languages = [];
        data.map((item) => {
            if (item.language)
                languages.push(item.language);
            return item;
        })
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
                                    <Row >
                                        <Col md="6" className="search_bar">
                                            <Input type="text" name="search" id="search" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search repositories..." />
                                        </Col>
                                        <Col md="6" className="search_bar">
                                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                                                <DropdownToggle caret>
                                                    Type: <b>{this.state.filterType}</b>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>Select type</DropdownItem>
                                                    <DropdownItem onClick={() => this.selectType('All')}>All</DropdownItem>
                                                    {/* <DropdownItem onClick={() => this.selectType('Sources')}>Sources</DropdownItem> */}
                                                    <DropdownItem onClick={() => this.selectType('Forks')}>Forks</DropdownItem>
                                                    <DropdownItem onClick={() => this.selectType('Archived')}>Archived</DropdownItem>
                                                    <DropdownItem onClick={() => this.selectType('Mirrors')}>Mirrors</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown> &nbsp;&nbsp;
                                            <ButtonDropdown isOpen={this.state.dropdownOpenLanguage} toggle={this.toggleDropdownLanguage}>
                                                <DropdownToggle caret>
                                                    Language: <b>{this.state.filterLanguage}</b>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>Select Language</DropdownItem>
                                                    <DropdownItem onClick={() => this.selectLanguage('All')}>All</DropdownItem>
                                                    {_.uniq(languages).map((item,index) => {
                                                        return <DropdownItem key={index} onClick={()=>this.selectLanguage(item)}>{item}</DropdownItem>
                                                    })}
                                                </DropdownMenu>
                                            </ButtonDropdown>&nbsp;&nbsp;
                                            <Button color="success">New</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='12'>
                                            {repos.length>0?repos.map((item, index) => <Repo key={index} data={item} />):<div className="not-found">No Repositories found {this.state.filterType==="All"?"":'for type '+this.state.filterType}</div>}
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
    return { repos: state.repos.result, data: state.repos.data};
}

export default connect(mapStateToProps, { fetchRepos, search, filterLanguage,filterType })(Repos);
