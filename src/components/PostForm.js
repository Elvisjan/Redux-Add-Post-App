import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postActions';

 class PostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       body: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(e) {
    this.setState({ [e.target.name] : e.target.value})
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post)
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>          
            <div>
             <label>
               Title: 
             </label> 
             <input type='text' name='title' value={this.state.title} onChange={this.onChange}></input>
            </div>    
            <br />
            <div>
             <label>
               Body: 
             </label> 
             <textarea name="body" value={this.state.body} onChange={this.onChange}></textarea>
            </div>    
            <br />
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, {createPost})(PostForm);