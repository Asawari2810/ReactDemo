import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPosts from './NewPost/NewPost';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import './Blog.css';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

   state ={
       auth : false
   }
    render () {
        return (
            <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to= "/posts" 
                            exact
                            activeClassName="my-activeClass"
                            activeStyle = {
                                {
                                    color : 'orange',
                                    textDecoration : 'underline'

                                }
                            }>Posts</NavLink>
                        </li>

                        <li>
                            <NavLink to={{
                                pathname : '/new-post',
                                hash : '#submit',
                                search : '?quick-submit=true3'
                            }}>New Post</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
           {/* <Route path="/" exact render={() => <h1>HOME</h1>}/> */}
           <Switch>
           {this.state.auth ?  <Route path="/new-post" exact component={NewPosts}/> : null}       
           <Route path="/posts" component={Posts}/>
           <Route render = {() => <h1>Not found</h1>}/>
          {/*<Route path="/" component={Posts}/>*/}
          {/* <Redirect from="/" to="/posts"/>*/}
           </Switch>
            </div>
        );
    }
}

export default Blog;