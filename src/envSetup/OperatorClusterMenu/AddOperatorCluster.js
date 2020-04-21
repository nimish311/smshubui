import React, { Component } from 'react';
import ApiService from "../../service/ApiService";

class AddOperatorCluster extends Component{

    constructor(props){
        super(props);
        this.state ={
            id:'',
            clustername: '',
            clustertype: 'default',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data.result;
                this.setState({
                id: user.id,
                clustername:user.clustername,
                clustertype:user.clustertype,
                })
            });
    }
    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value },
            );
    }

    onChangeradio = (e) =>{
        this.setState({ [e.target.name]: e.target.value },
            // {[e.target.gender]:e.target.selectedOption}
            );
            // console.log(this.state.selectedOption)
        }

    saveUser = (e) => {
        e.preventDefault();
        let user = {id:this.state.id, clustername: this.state.clustername, clustertype: this.state.clustertype,
             };
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/environmentSetup-operatorCluster');
            });
    }
    
    render(){
        return(
            <div>
                <form>
                    <fieldset>
                    <label for="clustername" class="required">Cluster name:</label>
                        <input type="text" id="cluster_name" maxlength="10" name="clustername" className='form-control'
                        value={this.state.clustername} onChange={this.onChange} /><br/><br/>

                        <label for="" >Cluster Type: </label>
                        <label><input type="radio" id="cluster_type" name="clustertype" value="Default" 
                        onChange={this.onChangeradio}  defaultChecked/>
                        Default</label>
                        <label><input type="radio" id="cluster_type" name="clustertype" value="Roaming"
                        onChange={this.onChangeradio}  />
                        Roaming</label><br /><br />

                        <div>
                                <button class="gaping" id="done" onClick={this.saveUser} disabled={!this.state.clustername}>Done</button>
                                <button id="clear" class="gaping">Clear</button>
                                <button id="cancel" onClick={() => this.props.history.push('/environmentSetup-operatorCluster')}>Cancel</button>
                        </div>
                        <br/><br/>
                        <label class="mandatory" >* Denotes Mandatory Fields</label>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default AddOperatorCluster;